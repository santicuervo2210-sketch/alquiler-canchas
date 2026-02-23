'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ReservasPublicaPage() {
  const [canchas, setCanchas] = useState<any[]>([])
  const [complejos, setComplejos] = useState<any[]>([])
  const [complejoSeleccionado, setComplejoSeleccionado] = useState<any>(null)
  const [canchaSeleccionada, setCanchaSeleccionada] = useState<any>(null)
  const [fecha, setFecha] = useState('')
  const [slots, setSlots] = useState<any[]>([])
  const [slotSeleccionado, setSlotSeleccionado] = useState<string | null>(null)
  const [paso, setPaso] = useState(1)
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    metodo_pago: 'transferencia',
  })
  const [loading, setLoading] = useState(false)
  const [reservaExitosa, setReservaExitosa] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    cargarComplejos()
  }, [])

  const cargarComplejos = async () => {
    const { data } = await supabase.from('complejos').select('*')
    setComplejos(data || [])
    if (data && data.length === 1) {
      setComplejoSeleccionado(data[0])
      cargarCanchas(data[0].id)
    }
  }

  const cargarCanchas = async (complejoId: string) => {
    const { data } = await supabase
      .from('canchas')
      .select('*')
      .eq('complejo_id', complejoId)
      .eq('activa', true)
    setCanchas(data || [])
  }

  const cargarSlots = async () => {
    if (!canchaSeleccionada || !fecha || !complejoSeleccionado) {
      alert('Por favor seleccioná cancha y fecha')
      return
    }

    const apertura = complejoSeleccionado.horario_apertura?.toString().slice(0, 5) || '08:00'
    const cierre = complejoSeleccionado.horario_cierre?.toString().slice(0, 5) || '23:00'

    const { data: reservasExistentes } = await supabase
      .from('reservas')
      .select('hora_inicio')
      .eq('cancha_id', canchaSeleccionada.id)
      .eq('fecha', fecha)
      .neq('estado', 'cancelada')

    const ocupados = reservasExistentes?.map(r => r.hora_inicio.slice(0, 5)) || []

    const slotsGenerados = []
    let hora = parseInt(apertura.split(':')[0])
    const horaFin = parseInt(cierre.split(':')[0])

    while (hora < horaFin) {
      const horaStr = `${hora.toString().padStart(2, '0')}:00`
      const horaFinStr = `${(hora + 1).toString().padStart(2, '0')}:00`
      slotsGenerados.push({
        hora_inicio: horaStr,
        hora_fin: horaFinStr,
        disponible: !ocupados.includes(horaStr),
      })
      hora++
    }

    setSlots(slotsGenerados)
    setPaso(3)
  }

  const handleReservar = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const slotElegido = slots.find(s => s.hora_inicio === slotSeleccionado)
    const monto_total = canchaSeleccionada.precio_hora
    const monto_seña = monto_total / 2

    const { error } = await supabase.from('reservas').insert({
      cancha_id: canchaSeleccionada.id,
      complejo_id: complejoSeleccionado.id,
      fecha,
      hora_inicio: slotElegido.hora_inicio + ':00',
      hora_fin: slotElegido.hora_fin + ':00',
      cliente_nombre: form.nombre,
      cliente_telefono: form.telefono,
      cliente_email: form.email,
      monto_seña,
      monto_total,
      metodo_pago: form.metodo_pago,
      estado: 'pendiente',
      es_desafio: false,
    })

    if (error) {
      alert('Error al crear la reserva')
      setLoading(false)
      return
    }

    setReservaExitosa(true)
    setLoading(false)
  }

  const tipoLabel: Record<string, string> = {
    futbol_5: '⚽ Fútbol 5',
    futbol_7: '⚽ Fútbol 7',
    futbol_11: '⚽ Fútbol 11',
    paddle: '🎾 Pádel',
  }

  if (reservaExitosa) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-4">
        <div className="bg-[#111] border-2 border-green-500 rounded-2xl p-10 text-center max-w-md w-full">
          <p className="text-6xl mb-4">🎉</p>
          <h2 className="text-2xl font-black italic uppercase text-green-500 mb-2">¡Reserva Confirmada!</h2>
          <p className="text-gray-400 mb-4">Te contactaremos para confirmar el pago de la seña.</p>
          {form.metodo_pago === 'transferencia' && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-left mb-4">
              <p className="text-green-400 font-bold text-sm">📱 Próximo paso:</p>
              <p className="text-green-300 text-sm mt-1">Transferí la seña de <strong>${(canchaSeleccionada.precio_hora / 2).toLocaleString()}</strong> y enviá el comprobante por WhatsApp.</p>
            </div>
          )}
          <button
            onClick={() => { 
              setReservaExitosa(false); 
              setPaso(1); 
              setSlotSeleccionado(null);
              setForm({ nombre: '', telefono: '', email: '', metodo_pago: 'transferencia' });
            }}
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-green-500 transition w-full font-black uppercase italic text-sm"
          >
            Nueva Reserva
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-500/8 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/8 blur-[100px] rounded-full"></div>
      </div>

      <nav className="relative z-10 px-6 py-4 flex justify-between items-center border-b border-white/5">
        <h1 className="text-xl font-black italic uppercase text-white">⚽ Reservar Cancha</h1>
        <a href="/" className="text-gray-400 hover:text-white transition text-sm font-bold uppercase tracking-wide">← Inicio</a>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-3xl">

        {/* Paso 1 - Elegir cancha */}
        <div className="mb-6">
          <h2 className="text-lg font-black uppercase text-green-500 mb-3 tracking-wide">1️⃣ Elegí tu cancha</h2>
          {canchas.length === 0 ? (
            <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-8 text-center">
              <p className="text-gray-400">⚠️ No hay canchas disponibles</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {canchas.map((cancha) => (
                <button
                  key={cancha.id}
                  onClick={() => { setCanchaSeleccionada(cancha); setPaso(2) }}
                  className={`p-5 rounded-xl border-2 text-left transition ${
                    canchaSeleccionada?.id === cancha.id 
                    ? 'border-green-500 bg-green-500/10' 
                    : 'border-white/10 bg-[#0f0f0f] hover:border-green-500/50'
                  }`}
                >
                  <p className="font-black text-white text-lg italic uppercase">{cancha.nombre}</p>
                  <p className="text-sm text-gray-400 font-bold mt-1">{tipoLabel[cancha.tipo]}</p>
                  <p className="text-sm text-green-400 font-black mt-2">${cancha.precio_hora.toLocaleString()}/hora · Seña: ${(cancha.precio_hora / 2).toLocaleString()}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Paso 2 - Elegir fecha */}
        {paso >= 2 && (
          <div className="mb-6">
            <h2 className="text-lg font-black uppercase text-green-500 mb-3 tracking-wide">2️⃣ Elegí la fecha</h2>
            <div className="flex gap-3">
              <input
                type="date"
                value={fecha}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFecha(e.target.value)}
                className="flex-1 bg-[#0f0f0f] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500 transition"
              />
              <button
                onClick={cargarSlots}
                disabled={!fecha}
                className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition disabled:opacity-50 font-black uppercase italic text-sm whitespace-nowrap"
              >
                Ver Horarios
              </button>
            </div>
          </div>
        )}

        {/* Paso 3 - Elegir horario */}
        {paso >= 3 && (
          <div className="mb-6">
            <h2 className="text-lg font-black uppercase text-green-500 mb-3 tracking-wide">3️⃣ Elegí el horario</h2>
            {slots.length === 0 ? (
              <p className="text-red-400">⚠️ No hay horarios disponibles</p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot.hora_inicio}
                    disabled={!slot.disponible}
                    onClick={() => { setSlotSeleccionado(slot.hora_inicio); setPaso(4) }}
                    className={`py-3 rounded-lg text-sm font-black italic transition ${
                      !slot.disponible ? 'bg-[#0a0a0a] text-gray-600 cursor-not-allowed border border-white/5' :
                      slotSeleccionado === slot.hora_inicio ? 'bg-green-500 text-black' :
                      'bg-[#0f0f0f] border border-white/10 text-white hover:border-green-500'
                    }`}
                  >
                    {slot.hora_inicio}
                    {!slot.disponible && <span className="block text-xs font-normal">Ocupado</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Paso 4 - Datos del cliente */}
        {paso >= 4 && slotSeleccionado && (
          <div className="mb-6">
            <h2 className="text-lg font-black uppercase text-green-500 mb-3 tracking-wide">4️⃣ Tus datos</h2>
            <form onSubmit={handleReservar} className="bg-[#0f0f0f] border border-white/10 rounded-xl p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase mb-1 tracking-wide">Nombre y apellido</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-green-500 transition"
                  placeholder="Juan García"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase mb-1 tracking-wide">WhatsApp</label>
                <input
                  type="text"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  required
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-green-500 transition"
                  placeholder="1123456789"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase mb-1 tracking-wide">Email (opcional)</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-green-500 transition"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase mb-1 tracking-wide">Método de pago</label>
                <select
                  value={form.metodo_pago}
                  onChange={(e) => setForm({ ...form, metodo_pago: e.target.value })}
                  className="w-full bg-black/30 border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-green-500 transition"
                >
                  <option value="transferencia">💸 Transferencia</option>
                  <option value="efectivo">💵 Efectivo</option>
                </select>
              </div>

              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400 font-bold text-sm uppercase tracking-wide">📋 Resumen:</p>
                <p className="text-white text-sm mt-2">🏟️ {canchaSeleccionada?.nombre} · {tipoLabel[canchaSeleccionada?.tipo]}</p>
                <p className="text-white text-sm">📅 {fecha} · ⏰ {slotSeleccionado} - {slots.find(s => s.hora_inicio === slotSeleccionado)?.hora_fin}</p>
                <p className="text-green-400 font-black text-lg mt-2">
                  💰 Seña: ${(canchaSeleccionada?.precio_hora / 2).toLocaleString()}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition disabled:opacity-50 font-black uppercase italic"
              >
                {loading ? '⏳ Enviando...' : '✅ Confirmar Reserva'}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}