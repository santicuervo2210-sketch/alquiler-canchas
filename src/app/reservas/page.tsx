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
    console.log('🔵 Cargando complejos...')
    const { data, error } = await supabase.from('complejos').select('*')
    console.log('🔵 Complejos cargados:', data, error)
    setComplejos(data || [])
    if (data && data.length === 1) {
      console.log('🔵 Auto-seleccionando complejo:', data[0])
      setComplejoSeleccionado(data[0])
      cargarCanchas(data[0].id)
    }
  }

  const cargarCanchas = async (complejoId: string) => {
    console.log('🟢 Cargando canchas para complejo:', complejoId)
    const { data } = await supabase
      .from('canchas')
      .select('*')
      .eq('complejo_id', complejoId)
      .eq('activa', true)
    console.log('🟢 Canchas cargadas:', data)
    setCanchas(data || [])
  }

  const cargarSlots = async () => {
    console.log('🟡 === INICIANDO CARGA DE SLOTS ===')
    console.log('🟡 Datos:', { 
      canchaSeleccionada: canchaSeleccionada?.id, 
      fecha, 
      complejoSeleccionado: complejoSeleccionado?.id 
    })

    if (!canchaSeleccionada || !fecha || !complejoSeleccionado) {
      console.error('❌ Faltan datos')
      alert('Error: Falta información. Recargá la página e intentá de nuevo.')
      return
    }

    const apertura = complejoSeleccionado.horario_apertura?.toString().slice(0, 5) || '08:00'
    const cierre = complejoSeleccionado.horario_cierre?.toString().slice(0, 5) || '23:00'

    console.log('🟡 Horarios:', { apertura, cierre })

    const { data: reservasExistentes, error } = await supabase
      .from('reservas')
      .select('hora_inicio')
      .eq('cancha_id', canchaSeleccionada.id)
      .eq('fecha', fecha)
      .neq('estado', 'cancelada')

    if (error) {
      console.error('❌ Error cargando reservas:', error)
    }

    console.log('🟡 Reservas existentes:', reservasExistentes)

    const ocupados = reservasExistentes?.map(r => r.hora_inicio.slice(0, 5)) || []

    const slotsGenerados = []
    let hora = parseInt(apertura.split(':')[0])
    const horaFin = parseInt(cierre.split(':')[0])

    console.log('🟡 Generando slots desde', hora, 'hasta', horaFin)

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

    console.log('🟡 Slots generados:', slotsGenerados.length, 'slots')

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
      console.error('Error creando reserva:', error)
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
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-md p-10 text-center max-w-md w-full">
          <p className="text-6xl mb-4">🎉</p>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Reserva enviada!</h2>
          <p className="text-gray-500 mb-4">Te vamos a contactar para confirmar el pago de la seña.</p>
          {form.metodo_pago === 'transferencia' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-left mb-4">
              <p className="text-green-700 font-medium text-sm">📱 Para confirmar tu reserva:</p>
              <p className="text-green-600 text-sm mt-1">Transferí la seña de <strong>${(canchaSeleccionada.precio_hora / 2).toLocaleString()}</strong> y enviá el comprobante por WhatsApp al complejo.</p>
            </div>
          )}
          <button
            onClick={() => { 
              setReservaExitosa(false); 
              setPaso(1); 
              setSlotSeleccionado(null);
              setForm({ nombre: '', telefono: '', email: '', metodo_pago: 'transferencia' });
            }}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition w-full"
          >
            Hacer otra reserva
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">⚽ Reservá tu cancha</h1>
        <a href="/" className="text-green-600 hover:underline text-sm">← Volver al inicio</a>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-2xl">

        {/* Paso 1 - Elegir cancha */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-700 mb-3">1️⃣ Elegí una cancha</h2>
          {canchas.length === 0 ? (
            <p className="text-red-500">⚠️ No hay canchas disponibles.</p>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {canchas.map((cancha) => (
                <button
                  key={cancha.id}
                  onClick={() => { 
                    console.log('🟢 Cancha seleccionada:', cancha)
                    setCanchaSeleccionada(cancha); 
                    setPaso(2) 
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition ${canchaSeleccionada?.id === cancha.id ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white hover:border-green-300'}`}
                >
                  <p className="font-semibold text-gray-800">{cancha.nombre}</p>
                  <p className="text-sm text-gray-500">{tipoLabel[cancha.tipo]}</p>
                  <p className="text-sm text-green-600 font-medium">${cancha.precio_hora.toLocaleString()}/hora · Seña: ${(cancha.precio_hora / 2).toLocaleString()}</p>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Paso 2 - Elegir fecha */}
        {paso >= 2 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-700 mb-3">2️⃣ Elegí una fecha</h2>
            <div className="flex gap-3">
              <input
                type="date"
                value={fecha}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => {
                  console.log('📅 Fecha seleccionada:', e.target.value)
                  setFecha(e.target.value)
                }}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                onClick={() => {
                  console.log('🔘 Botón Ver horarios clickeado')
                  cargarSlots()
                }}
                disabled={!fecha}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
              >
                Ver horarios
              </button>
            </div>
          </div>
        )}

        {/* Paso 3 - Elegir horario */}
        {paso >= 3 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-700 mb-3">3️⃣ Elegí un horario</h2>
            {slots.length === 0 ? (
              <p className="text-red-500">⚠️ No se generaron horarios.</p>
            ) : (
              <div className="grid grid-cols-3 gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot.hora_inicio}
                    disabled={!slot.disponible}
                    onClick={() => { setSlotSeleccionado(slot.hora_inicio); setPaso(4) }}
                    className={`py-2 rounded-lg text-sm font-medium transition ${
                      !slot.disponible ? 'bg-gray-100 text-gray-400 cursor-not-allowed' :
                      slotSeleccionado === slot.hora_inicio ? 'bg-green-600 text-white' :
                      'bg-white border border-gray-200 text-gray-700 hover:border-green-400'
                    }`}
                  >
                    {slot.hora_inicio}
                    {!slot.disponible && <span className="block text-xs">Ocupado</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Paso 4 - Datos del cliente */}
        {paso >= 4 && slotSeleccionado && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-700 mb-3">4️⃣ Tus datos</h2>
            <form onSubmit={handleReservar} className="bg-white rounded-xl shadow-sm p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre y apellido</label>
                <input
                  type="text"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Juan García"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                <input
                  type="text"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                  required
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="1123456789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email (opcional)</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Método de pago de la seña</label>
                <select
                  value={form.metodo_pago}
                  onChange={(e) => setForm({ ...form, metodo_pago: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="transferencia">💸 Transferencia bancaria</option>
                  <option value="efectivo">💵 Efectivo en el complejo</option>
                </select>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-700 font-medium text-sm">📋 Resumen:</p>
                <p className="text-green-600 text-sm mt-1">🏟️ {canchaSeleccionada?.nombre} · {tipoLabel[canchaSeleccionada?.tipo]}</p>
                <p className="text-green-600 text-sm">📅 {fecha} · ⏰ {slotSeleccionado} - {slots.find(s => s.hora_inicio === slotSeleccionado)?.hora_fin}</p>
                <p className="text-green-700 font-semibold text-sm mt-1">
                  💰 Seña a pagar: ${(canchaSeleccionada?.precio_hora / 2).toLocaleString()}
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition disabled:opacity-50 font-medium"
              >
                {loading ? 'Enviando...' : '✅ Confirmar reserva'}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}