'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function ArmarDesafio() {
  const router = useRouter()
  const supabase = createClient()
  
  // Estados de datos
  const [desafios, setDesafios] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [isCreating, setIsCreating] = useState(false)
  const [sending, setSending] = useState(false)

  // Estado del formulario
  const [form, setForm] = useState({
    equipo: '',
    jugadores_faltan: '',
    cancha: '',
    fecha: '',
    hora: '',
    precio_sena: ''
  })

  // Cargar datos al montar
  useEffect(() => {
    fetchDesafios()
  }, [])

  async function fetchDesafios() {
    setLoading(true)
    const { data, error } = await supabase
      .from('desafios')
      .select('*')
      .order('creado_at', { ascending: false })
    
    if (!error) setDesafios(data || [])
    setLoading(false)
  }

  async function handlePublicar(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)

    const { error } = await supabase
      .from('desafios')
      .insert([{
        equipo: form.equipo,
        jugadores_faltan: parseInt(form.jugadores_faltan),
        cancha: form.cancha,
        fecha: form.fecha,
        hora: form.hora,
        precio_sena: parseFloat(form.precio_sena)
      }])

    if (!error) {
      setForm({ equipo: '', jugadores_faltan: '', cancha: '', fecha: '', hora: '', precio_sena: '' })
      setIsCreating(false)
      fetchDesafios() // Recargar lista
    }
    setSending(false)
  }

  return (
    <main className="min-h-screen w-full bg-[#050505] text-white flex flex-col p-3 md:p-5 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Glow de fondo */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-green-500/5 blur-[100px]" />
      </div>

      <header className="relative z-10 flex justify-between items-center mb-6">
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-1.5 text-gray-500 hover:text-green-500 transition-all text-[10px] font-black uppercase tracking-widest group"
        >
          <span className="text-base group-hover:-translate-x-1 transition-transform">←</span> INICIO
        </button>
        <button 
          onClick={() => setIsCreating(!isCreating)}
          className={`px-5 py-2.5 rounded-xl font-black italic uppercase text-[10px] transition-all duration-300 shadow-lg ${
            isCreating 
            ? 'bg-red-500/10 text-red-500 border border-red-500/20' 
            : 'bg-green-500 text-black shadow-green-500/20'
          }`}
        >
          {isCreating ? '✕ Cancelar' : '+ Crear Desafío'}
        </button>
      </header>

      <div className="relative z-10 mb-6">
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
          ARENA DE <span className="text-green-500">RETO</span>
        </h1>
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.3em] mt-2">Busca rivales en tiempo real</p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        
        {/* LISTA DE DESAFÍOS */}
        <div className={`${isCreating ? 'lg:col-span-7' : 'lg:col-span-12'} space-y-3 transition-all duration-500`}>
          
          {loading ? (
            <div className="py-20 text-center animate-pulse">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600">Sincronizando Arena...</p>
            </div>
          ) : desafios.length === 0 ? (
            <div className="py-20 text-center border border-white/5 rounded-3xl bg-white/[0.02]">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-600">No hay desafíos activos</p>
            </div>
          ) : (
            desafios.map((desafio) => (
              <div key={desafio.id} className="bg-[#0f0f0f]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-green-500/40 transition-all group">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-xl font-black text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {desafio.equipo.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-black italic uppercase text-lg leading-none tracking-tight">{desafio.equipo}</h3>
                      <span className="text-[9px] bg-green-500 text-black px-2 py-0.5 rounded-lg font-black uppercase">
                        Busca {desafio.jugadores_faltan}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 font-bold mt-2 flex gap-3">
                      <span>🏟️ {desafio.cancha}</span>
                      <span className="text-gray-600">|</span>
                      <span>📅 {desafio.fecha} · {desafio.hora.slice(0,5)}hs</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-5 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-white/5 pt-4 sm:pt-0">
                  <div className="text-left sm:text-right">
                    <p className="text-[9px] text-gray-600 font-black uppercase tracking-widest">Seña Total</p>
                    <p className="text-xl font-black italic text-white leading-none">${desafio.precio_sena}</p>
                  </div>
                  <button className="px-6 py-3 bg-white text-black font-black uppercase italic text-[11px] rounded-xl hover:bg-green-500 transition-all active:scale-95 shadow-lg">
                    Aceptar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FORMULARIO LATERAL */}
        {isCreating && (
          <div className="lg:col-span-5 animate-in slide-in-from-right-5 duration-500 ease-out">
            <form onSubmit={handlePublicar} className="bg-[#111] border border-green-500/30 rounded-3xl p-6 sticky top-5 shadow-2xl">
              <h2 className="text-sm font-black italic uppercase mb-5 text-green-500 tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Publicar Reto
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[9px] font-black uppercase text-gray-500 ml-2 mb-1 block">Nombre del Equipo</label>
                  <input required type="text" placeholder="EJ: LOS PIBES FC" className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-green-500 font-black text-[11px] uppercase placeholder:text-gray-700 transition-all" value={form.equipo} onChange={e => setForm({...form, equipo: e.target.value})} />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] font-black uppercase text-gray-500 ml-2 mb-1 block">¿Cuántos faltan?</label>
                    <input required type="number" placeholder="4" className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-green-500 font-black text-[11px]" value={form.jugadores_faltan} onChange={e => setForm({...form, jugadores_faltan: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase text-gray-500 ml-2 mb-1 block">Monto Seña</label>
                    <input required type="number" placeholder="20000" className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-green-500 font-black text-[11px]" value={form.precio_sena} onChange={e => setForm({...form, precio_sena: e.target.value})} />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-black uppercase text-gray-500 ml-2 mb-1 block">Complejo / Cancha</label>
                  <input required type="text" placeholder="EJ: EDISON CANCHA 1" className="w-full bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none focus:border-green-500 font-black text-[11px] uppercase" value={form.cancha} onChange={e => setForm({...form, cancha: e.target.value})} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <input required type="date" className="bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none text-[11px] font-black focus:border-green-500 text-gray-400" value={form.fecha} onChange={e => setForm({...form, fecha: e.target.value})} />
                  <input required type="time" className="bg-white/5 border border-white/10 p-3.5 rounded-xl outline-none text-[11px] font-black focus:border-green-500 text-gray-400" value={form.hora} onChange={e => setForm({...form, hora: e.target.value})} />
                </div>

                <button 
                  disabled={sending}
                  className="w-full py-4 bg-green-500 text-black font-black uppercase italic rounded-xl hover:bg-white transition-all text-[11px] active:scale-95 shadow-xl shadow-green-500/10 disabled:opacity-50"
                >
                  {sending ? 'Publicando...' : '🔥 Lanzar Desafío'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #1a1a1a; border-radius: 10px; }
      `}</style>
    </main>
  )
}