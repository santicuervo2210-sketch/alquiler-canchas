'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function ArenaPublica() {
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [deporte, setDeporte] = useState('futbol')
  const supabase = createClient()
  const [desafios, setDesafios] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [complejos, setComplejos] = useState<any[]>([])
  const [canchas, setCanchas] = useState<any[]>([])
  const [formData, setFormData] = useState({
    nombreEquipo: '',
    canchaId: '',
    fecha: '',
    horaInicio: '',
    horaFin: '',
    jugadoresNecesarios: 6,
    telefono: ''
  })
  const [creando, setCreando] = useState(false)
  const [desafioSeleccionado, setDesafioSeleccionado] = useState<any>(null)
  const [mostrarModalAceptar, setMostrarModalAceptar] = useState(false)
  const [formAceptar, setFormAceptar] = useState({
    nombreEquipo: '',
    telefono: ''
  })
  const [aceptando, setAceptando] = useState(false)

  useEffect(() => {
    cargarDatos()
  }, [])

  const cargarDatos = async () => {
    setLoading(true)
    
    const { data: complejosData } = await supabase.from('complejos').select('id, nombre')
    setComplejos(complejosData || [])
    
    const { data: canchasData } = await supabase.from('canchas').select('id, nombre, complejo_id, tipo')
    setCanchas(canchasData || [])
    
    const { data: desafiosData } = await supabase
      .from('desafios')
      .select('*, canchas(nombre, tipo, precio_hora), complejos(nombre)')
      .eq('estado', 'abierto')
      .order('fecha', { ascending: true })
    
    console.log('Desafíos cargados:', desafiosData)
    setDesafios(desafiosData || [])
    setLoading(false)
  }

  const crearDesafio = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreando(true)

    if (!formData.nombreEquipo || !formData.canchaId || !formData.fecha || !formData.horaInicio || !formData.telefono) {
      alert('Por favor completá todos los campos')
      setCreando(false)
      return
    }

    const [hora, minuto] = formData.horaInicio.split(':')
    const horaFinCalculada = `${(parseInt(hora) + 1).toString().padStart(2, '0')}:${minuto}`

    const canchaSeleccionada = canchas.find(c => c.id === formData.canchaId)
    
    if (!canchaSeleccionada) {
      alert('Cancha no encontrada')
      setCreando(false)
      return
    }

    const { error } = await supabase.from('desafios').insert({
      cancha_id: formData.canchaId,
      complejo_id: canchaSeleccionada.complejo_id,
      fecha: formData.fecha,
      hora_inicio: formData.horaInicio + ':00',
      hora_fin: horaFinCalculada + ':00',
      equipo_creador_nombre: formData.nombreEquipo,
      equipo_creador_telefono: formData.telefono,
      jugadores_necesarios: formData.jugadoresNecesarios,
      estado: 'abierto'
    })

    if (error) {
      console.error('Error creando desafío:', error)
      alert('Error al crear el desafío. Revisá la consola.')
      setCreando(false)
      return
    }

    alert('¡Desafío creado exitosamente! 🔥')
    setShowForm(false)
    setFormData({
      nombreEquipo: '',
      canchaId: '',
      fecha: '',
      horaInicio: '',
      horaFin: '',
      jugadoresNecesarios: 6,
      telefono: ''
    })
    setCreando(false)
    cargarDatos()
  }

  const abrirModalAceptar = (desafio: any) => {
    setDesafioSeleccionado(desafio)
    setMostrarModalAceptar(true)
  }

  const aceptarDesafio = async (e: React.FormEvent) => {
    e.preventDefault()
    setAceptando(true)

    if (!formAceptar.nombreEquipo || !formAceptar.telefono) {
      alert('Por favor completá todos los campos')
      setAceptando(false)
      return
    }

    const monto_seña = (desafioSeleccionado.canchas?.precio_hora || 0) / 2

    // Crear la reserva
    const { error: errorReserva } = await supabase.from('reservas').insert({
      cancha_id: desafioSeleccionado.cancha_id,
      complejo_id: desafioSeleccionado.complejo_id,
      fecha: desafioSeleccionado.fecha,
      hora_inicio: desafioSeleccionado.hora_inicio,
      hora_fin: desafioSeleccionado.hora_fin,
      cliente_nombre: formAceptar.nombreEquipo,
      cliente_telefono: formAceptar.telefono,
      monto_seña,
      monto_total: desafioSeleccionado.canchas?.precio_hora || 0,
      metodo_pago: 'transferencia',
      estado: 'pendiente',
      es_desafio: true,
      desafio_id: desafioSeleccionado.id
    })

    if (errorReserva) {
      console.error('Error creando reserva:', errorReserva)
      alert('Error al aceptar el desafío')
      setAceptando(false)
      return
    }

    // Actualizar estado del desafío
    const { error: errorDesafio } = await supabase
      .from('desafios')
      .update({ estado: 'completo' })
      .eq('id', desafioSeleccionado.id)

    if (errorDesafio) {
      console.error('Error actualizando desafío:', errorDesafio)
    }

    alert('¡Desafío aceptado! 🎉\nTe contactaremos para confirmar el pago.')
    setMostrarModalAceptar(false)
    setFormAceptar({ nombreEquipo: '', telefono: '' })
    setDesafioSeleccionado(null)
    setAceptando(false)
    cargarDatos()
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans relative">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-500/8 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/8 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-4 md:p-6">
        
        <header className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-all text-[9px] font-black uppercase tracking-wider"
          >
            <span className="text-lg">←</span> Inicio
          </button>
          
          <button 
            onClick={() => setShowForm(!showForm)}
            className={`font-black px-6 py-2.5 rounded-xl transition-all uppercase italic text-[10px] tracking-tight ${
              showForm 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-black hover:bg-green-500'
            }`}
          >
            {showForm ? '✕ Cancelar' : '🚀 Lanzar Desafío'}
          </button>
        </header>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">
            ARENA DE <span className="text-green-500">DESAFÍOS</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[8px]">Unite a un equipo o armá tu propio match</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          <div className={`${showForm ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-4 transition-all duration-300`}>
            
            {loading ? (
              <div className="text-center py-10">
                <p className="text-gray-500 text-sm">Cargando desafíos...</p>
              </div>
            ) : desafios.length === 0 ? (
              <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-10 text-center">
                <p className="text-4xl mb-4">⚔️</p>
                <p className="text-gray-400 font-bold">No hay desafíos disponibles</p>
                <p className="text-gray-600 text-sm mt-2">Sé el primero en crear uno</p>
              </div>
            ) : (
              desafios.map((desafio) => (
                <div key={desafio.id} className="bg-[#0f0f0f] border border-green-500/20 rounded-2xl p-5 hover:border-green-500/50 transition-all group">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl border border-white/10 group-hover:border-green-500/50 transition-all">
                        {desafio.equipo_creador_nombre.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-black italic uppercase tracking-tight">{desafio.equipo_creador_nombre}</h3>
                        <span className="bg-green-500/20 text-green-500 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wide inline-block mt-1">
                          Busca {desafio.jugadores_necesarios} jugadores
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider text-green-500">
                      {desafio.canchas?.tipo === 'futbol_5' && '⚽ Fútbol 5'}
                      {desafio.canchas?.tipo === 'futbol_7' && '⚽ Fútbol 7'}
                      {desafio.canchas?.tipo === 'futbol_11' && '⚽ Fútbol 11'}
                      {desafio.canchas?.tipo === 'paddle' && '🎾 Pádel'}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-gray-400 font-bold text-[10px]">
                    <p className="flex items-center gap-2"><span>🏟️</span> {desafio.complejos?.nombre} · {desafio.canchas?.nombre}</p>
                    <p className="flex items-center gap-2"><span>📅</span> {desafio.fecha} · {desafio.hora_inicio.slice(0,5)} - {desafio.hora_fin.slice(0,5)}</p>
                    <div className="mt-3 pt-3 border-t border-white/5">
                        <p className="text-gray-500 text-[8px] mb-0.5 uppercase tracking-wide">Costo por jugador</p>
                        <p className="text-2xl font-black italic text-white">${((desafio.canchas?.precio_hora || 0) / 2).toLocaleString()}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => abrirModalAceptar(desafio)}
                    className="w-full py-3 bg-green-500 hover:bg-white text-black font-black uppercase italic rounded-xl transition-all text-sm active:scale-95"
                  >
                    ¡Quiero Jugar!
                  </button>
                </div>
              ))
            )}

            {!loading && desafios.length > 0 && (
              <p className="text-center text-gray-600 text-[9px] font-black uppercase tracking-widest py-4">— Fin de desafíos disponibles —</p>
            )}
          </div>

          {showForm && (
            <div className="lg:col-span-5 animate-in slide-in-from-right-5 duration-300">
              <div className="bg-[#111] border border-green-500/50 rounded-2xl p-5 sticky top-4">
                <h2 className="text-lg font-black italic uppercase mb-5 pb-3 border-b border-white/5 text-green-500">
                  Nuevo Desafío
                </h2>
                
                <form onSubmit={crearDesafio} className="space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      type="button"
                      onClick={() => setDeporte('futbol')}
                      className={`py-2.5 rounded-lg font-black uppercase italic text-[9px] border transition-all ${deporte === 'futbol' ? 'bg-green-500 border-green-500 text-black' : 'bg-transparent border-white/10 text-gray-400'}`}
                    >
                      ⚽ Fútbol
                    </button>
                    <button 
                      type="button"
                      onClick={() => setDeporte('padel')}
                      className={`py-2.5 rounded-lg font-black uppercase italic text-[9px] border transition-all ${deporte === 'padel' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-transparent border-white/10 text-gray-400'}`}
                    >
                      🎾 Pádel
                    </button>
                  </div>

                  <div>
                    <label className="text-[8px] font-black text-gray-500 uppercase ml-1 mb-1 block tracking-wide">Nombre del equipo</label>
                    <input 
                      type="text" 
                      placeholder="Ej: Los Galácticos" 
                      value={formData.nombreEquipo}
                      onChange={(e) => setFormData({...formData, nombreEquipo: e.target.value})}
                      required
                      className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg outline-none focus:border-green-500 font-bold text-sm text-white placeholder:text-gray-600 transition" 
                    />
                  </div>

                  <div>
                    <label className="text-[8px] font-black text-gray-500 uppercase ml-1 mb-1 block tracking-wide">Cancha</label>
                    <select 
                      value={formData.canchaId}
                      onChange={(e) => setFormData({...formData, canchaId: e.target.value})}
                      required
                      className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg outline-none focus:border-green-500 font-bold text-sm text-white"
                    >
                      <option value="">Seleccioná una cancha</option>
                      {canchas.filter(c => deporte === 'futbol' ? c.tipo.includes('futbol') : c.tipo === 'paddle').map((cancha) => (
                        <option key={cancha.id} value={cancha.id}>{cancha.nombre}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[8px] font-black text-gray-500 uppercase ml-1 mb-1 block tracking-wide">Día</label>
                      <input 
                        type="date" 
                        value={formData.fecha}
                        onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg outline-none focus:border-green-500 text-xs font-bold text-white" 
                      />
                    </div>
                    <div>
                      <label className="text-[8px] font-black text-gray-500 uppercase ml-1 mb-1 block tracking-wide">Hora</label>
                      <input 
                        type="time" 
                        value={formData.horaInicio}
                        onChange={(e) => setFormData({...formData, horaInicio: e.target.value})}
                        required
                        className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg outline-none focus:border-green-500 text-xs font-bold text-white" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[8px] font-black text-gray-500 uppercase ml-1 mb-1 block tracking-wide">Jugadores que buscás</label>
                    <select 
                      value={formData.jugadoresNecesarios}
                      onChange={(e) => setFormData({...formData, jugadoresNecesarios: parseInt(e.target.value)})}
                      className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg outline-none focus:border-green-500 font-bold text-sm text-white"
                    >
                      <option value="6">6 jugadores (Fútbol 6)</option>
                      <option value="5">5 jugadores (Fútbol 5)</option>
                      <option value="2">2 jugadores (Pádel)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[8px] font-black text-gray-500 uppercase ml-1 mb-1 block tracking-wide">WhatsApp</label>
                    <input 
                      type="tel" 
                      placeholder="1123456789" 
                      value={formData.telefono}
                      onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                      required
                      className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg outline-none focus:border-green-500 font-bold text-sm text-white placeholder:text-gray-600" 
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={creando}
                    className="w-full py-3 bg-white text-black font-black uppercase italic rounded-lg hover:bg-green-500 transition-all text-xs mt-2 active:scale-95 disabled:opacity-50"
                  >
                    {creando ? '⏳ Publicando...' : '🔥 Publicar Desafío'}
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Modal para aceptar desafío */}
      {mostrarModalAceptar && desafioSeleccionado && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] border-2 border-green-500 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-black italic uppercase mb-4 text-green-500">⚔️ Aceptar Desafío</h3>
            
            <div className="bg-white/5 rounded-lg p-3 mb-4 text-sm">
              <p className="text-gray-400">Vas a jugar contra:</p>
              <p className="font-bold text-white">{desafioSeleccionado.equipo_creador_nombre}</p>
              <p className="text-gray-400 text-xs mt-2">📅 {desafioSeleccionado.fecha} · {desafioSeleccionado.hora_inicio.slice(0,5)}</p>
              <p className="text-gray-400 text-xs">🏟️ {desafioSeleccionado.complejos?.nombre}</p>
              <p className="text-green-400 font-black mt-2">💰 Tu parte: ${((desafioSeleccionado.canchas?.precio_hora || 0) / 2).toLocaleString()}</p>
            </div>

            <form onSubmit={aceptarDesafio} className="space-y-3">
              <div>
                <label className="text-[8px] font-black text-gray-500 uppercase ml-1 mb-1 block">Nombre de tu equipo</label>
                <input 
                  type="text" 
                  placeholder="Los Cracks FC" 
                  value={formAceptar.nombreEquipo}
                  onChange={(e) => setFormAceptar({...formAceptar, nombreEquipo: e.target.value})}
                  required
                  className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg outline-none focus:border-green-500 font-bold text-sm text-white placeholder:text-gray-600"
                />
              </div>
              <div>
                <label className="text-[8px] font-black text-gray-500 uppercase ml-1 mb-1 block">WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="1123456789" 
                  value={formAceptar.telefono}
                  onChange={(e) => setFormAceptar({...formAceptar, telefono: e.target.value})}
                  required
                  className="w-full bg-white/5 border border-white/10 p-2.5 rounded-lg outline-none focus:border-green-500 font-bold text-sm text-white placeholder:text-gray-600"
                />
              </div>
              <div className="flex gap-2">
                <button 
                  type="submit"
                  disabled={aceptando}
                  className="flex-1 py-3 bg-green-500 text-black font-black uppercase italic rounded-lg hover:bg-green-400 transition-all text-xs disabled:opacity-50"
                >
                  {aceptando ? '⏳ Aceptando...' : '✅ Confirmar'}
                </button>
                <button 
                  type="button"
                  onClick={() => {setMostrarModalAceptar(false); setDesafioSeleccionado(null)}}
                  className="flex-1 py-3 bg-red-500 text-white font-black uppercase italic rounded-lg hover:bg-red-400 transition-all text-xs"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  )
}