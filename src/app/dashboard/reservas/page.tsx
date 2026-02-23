'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ReservasPublicaPage() {
  const supabase = createClient()

  // --- ESTADOS ---
  const [complejo, setComplejo] = useState<any>(null)
  const [canchas, setCanchas] = useState<any[]>([])
  const [canchaSel, setCanchaSel] = useState<any>(null)
  const [fecha, setFecha] = useState('')
  const [slots, setSlots] = useState<any[]>([])
  const [slotSel, setSlotSel] = useState<string | null>(null)
  const [paso, setPaso] = useState(1)
  const [loading, setLoading] = useState(false)
  const [reservaOk, setReservaOk] = useState(false)

  // Datos del cliente
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  // --- 1. CARGA INICIAL (Complejo y Canchas) ---
  useEffect(() => {
    const cargarDatosIniciales = async () => {
      // Traemos el primer complejo disponible
      const { data: complejosData } = await supabase.from('complejos').select('*').limit(1)
      
      if (complejosData && complejosData.length > 0) {
        const miComplejo = complejosData[0]
        setComplejo(miComplejo)
        
        // Traemos las canchas de ese complejo
        const { data: canchasData } = await supabase
          .from('canchas')
          .select('*')
          .eq('complejo_id', miComplejo.id)
          .eq('activa', true)
        
        setCanchas(canchasData || [])
      }
    }
    cargarDatosIniciales()
  }, [])

  // --- 2. GENERAR HORARIOS (SLOTS) ---
  const cargarHorariosDisponibles = async () => {
    if (!canchaSel || !fecha || !complejo) return
    setLoading(true)

    // A. Consultar reservas ya hechas
    const { data: ocupados } = await supabase
      .from('reservas')
      .select('hora_inicio')
      .eq('cancha_id', canchaSel.id)
      .eq('fecha', fecha)
      .neq('estado', 'cancelada')

    const horasOcupadas = ocupados?.map(r => r.hora_inicio.slice(0, 5)) || []
    
    // B. Obtener apertura y cierre del complejo (con fallbacks por si están vacíos)
    const aperturaStr = complejo.horario_apertura?.toString().slice(0, 5) || "08:00"
    const cierreStr = complejo.horario_cierre?.toString().slice(0, 5) || "23:00"

    const hApertura = parseInt(aperturaStr.split(':')[0])
    const hCierre = parseInt(cierreStr.split(':')[0])

    // C. Generar la lista de horas
    const nuevosSlots = []
    for (let h = hApertura; h < hCierre; h++) {
      const horaStr = `${h.toString().padStart(2, '0')}:00`
      nuevosSlots.push({
        hora: horaStr,
        disponible: !horasOcupadas.includes(horaStr)
      })
    }

    setSlots(nuevosSlots)
    setPaso(3) // Avanzar al paso de horarios
    setLoading(false)
  }

  // --- 3. PROCESAR LA RESERVA ---
  const ejecutarReserva = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Calculamos hora de fin (asumiendo 1 hora de duración)
    const horaFin = `${(parseInt(slotSel!.split(':')[0]) + 1).toString().padStart(2, '0')}:00`

    const { error } = await supabase.from('reservas').insert({
      complejo_id: complejo.id,
      cancha_id: canchaSel.id,
      fecha: fecha,
      hora_inicio: slotSel,
      hora_fin: horaFin,
      cliente_nombre: nombre,
      cliente_telefono: telefono,
      monto_total: canchaSel.precio_hora,
      monto_seña: canchaSel.precio_hora / 2,
      estado: 'pendiente'
    })

    if (error) {
      alert("Hubo un error: " + error.message)
    } else {
      setReservaOk(true)
    }
    setLoading(false)
  }

  // --- INTERFAZ DE ÉXITO ---
  if (reservaOk) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-green-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl">
        <span className="text-6xl">✅</span>
        <h1 className="text-2xl font-bold mt-4">¡Turno reservado!</h1>
        <p className="text-gray-500 mt-2">En breve recibiras un mensaje para confirmar la seña.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-8 bg-green-600 text-white px-10 py-3 rounded-full font-bold hover:bg-green-700 transition"
        >
          Hacer otra reserva
        </button>
      </div>
    </div>
  )

  // --- INTERFAZ PRINCIPAL ---
  return (
    <main className="max-w-md mx-auto min-h-screen p-4 pb-20">
      <header className="py-10 text-center">
        <h1 className="text-3xl font-black text-green-700 italic tracking-tighter uppercase">
          {complejo?.nombre || 'CARGANDO...'}
        </h1>
        <div className="h-1 w-20 bg-green-500 mx-auto mt-2 rounded-full"></div>
      </header>

      {/* 1. SELECCIÓN DE CANCHA */}
      <section className="mb-10">
        <h2 className="text-xs font-black text-gray-400 uppercase mb-4 tracking-widest">1. Elegí tu cancha</h2>
        <div className="grid gap-3">
          {canchas.map(c => (
            <button 
              key={c.id}
              onClick={() => { setCanchaSel(c); setPaso(2); }}
              className={`p-5 rounded-2xl border-2 text-left transition-all ${canchaSel?.id === c.id ? 'border-green-500 bg-green-50 ring-4 ring-green-50' : 'border-gray-100 bg-white'}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-800 text-lg">{c.nombre}</span>
                <span className="text-green-600 font-black">${c.precio_hora}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Precio por 1 hora de juego</p>
            </button>
          ))}
        </div>
      </section>

      {/* 2. SELECCIÓN DE FECHA */}
      {paso >= 2 && (
        <section className="mb-10 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-xs font-black text-gray-400 uppercase mb-4 tracking-widest">2. ¿Cuándo juegan?</h2>
          <div className="flex gap-2">
            <input 
              type="date" 
              className="flex-1 p-4 rounded-2xl border-2 border-gray-100 outline-none focus:border-green-500 bg-white font-bold"
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setFecha(e.target.value)}
            />
            <button 
              onClick={cargarHorariosDisponibles}
              disabled={!fecha || loading}
              className="bg-black text-white px-8 rounded-2xl font-bold active:scale-95 transition disabled:opacity-20"
            >
              {loading ? '...' : 'VER'}
            </button>
          </div>
        </section>
      )}

      {/* 3. SELECCIÓN DE HORARIO */}
      {paso >= 3 && (
        <section className="mb-10 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-xs font-black text-gray-400 uppercase mb-4 tracking-widest">3. Horarios disponibles</h2>
          <div className="grid grid-cols-3 gap-2">
            {slots.map(s => (
              <button 
                key={s.hora}
                disabled={!s.disponible}
                onClick={() => { setSlotSel(s.hora); setPaso(4); }}
                className={`p-4 rounded-xl text-sm font-black border-2 transition-all ${
                  !s.disponible 
                  ? 'bg-gray-50 text-gray-200 border-gray-50 line-through' 
                  : slotSel === s.hora 
                    ? 'bg-green-600 text-white border-green-600 shadow-lg shadow-green-200' 
                    : 'bg-white border-gray-100 text-gray-700 hover:border-green-200'
                }`}
              >
                {s.hora}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 4. FORMULARIO FINAL */}
      {paso >= 4 && (
        <form onSubmit={ejecutarReserva} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-xs font-black text-gray-400 uppercase mb-2 tracking-widest">4. Confirmá tus datos</h2>
          <input 
            type="text" placeholder="Tu nombre completo" required 
            className="w-full p-4 rounded-xl bg-gray-50 border-transparent border-2 focus:border-green-500 focus:bg-white outline-none transition-all"
            onChange={e => setNombre(e.target.value)}
          />
          <input 
            type="tel" placeholder="WhatsApp (sin 0 ni 15)" required 
            className="w-full p-4 rounded-xl bg-gray-50 border-transparent border-2 focus:border-green-500 focus:bg-white outline-none transition-all"
            onChange={e => setTelefono(e.target.value)}
          />
          <button 
            disabled={loading}
            className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-green-200 hover:bg-green-700 active:scale-95 transition-all"
          >
            {loading ? 'RESERVANDO...' : 'RESERVAR AHORA'}
          </button>
          <p className="text-[10px] text-center text-gray-400 px-4">
            Al reservar, te comprometes a abonar la seña correspondiente para validar el turno.
          </p>
        </form>
      )}
    </main>
  )
}