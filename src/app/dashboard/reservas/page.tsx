'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function ReservasPage() {
  const [reservas, setReservas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [complejoId, setComplejoId] = useState<string | null>(null)
  const [filtro, setFiltro] = useState('todas')
  const supabase = createClient()
  const router = useRouter()

  useEffect(() => {
    cargarDatos()
  }, [])

  const cargarDatos = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/login'); return }

    const { data: complejo } = await supabase
      .from('complejos')
      .select('id')
      .eq('user_id', user.id)
      .single()

    if (!complejo) { router.push('/dashboard/complejo'); return }
    setComplejoId(complejo.id)

    const { data } = await supabase
      .from('reservas')
      .select('*, canchas(nombre, tipo)')
      .eq('complejo_id', complejo.id)
      .order('fecha', { ascending: false })
      .order('hora_inicio', { ascending: true })

    setReservas(data || [])
    setLoading(false)
  }

  const cambiarEstado = async (id: string, estado: string) => {
    await supabase.from('reservas').update({ estado }).eq('id', id)
    await cargarDatos()
  }

  const reservasFiltradas = reservas.filter(r => {
    if (filtro === 'todas') return true
    return r.estado === filtro
  })

  const estadoColor: Record<string, string> = {
    pendiente: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    confirmada: 'bg-green-500/20 text-green-400 border-green-500/30',
    cancelada: 'bg-red-500/20 text-red-400 border-red-500/30',
  }

  const tipoLabel: Record<string, string> = {
    futbol_5: '⚽ F5',
    futbol_7: '⚽ F7',
    futbol_11: '⚽ F11',
    paddle: '🎾 Pádel',
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-500/8 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/8 blur-[100px] rounded-full"></div>
      </div>

      <nav className="relative z-10 px-6 py-4 flex justify-between items-center border-b border-white/5">
        <h1 className="text-xl font-black italic uppercase">📅 Gestión de Reservas</h1>
        <button onClick={() => router.push('/dashboard')} className="text-gray-400 hover:text-white transition text-sm font-bold uppercase tracking-wide">
          ← Panel
        </button>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        
        <div className="mb-6">
          <h2 className="text-2xl font-black italic uppercase text-green-500 mb-1">Reservas del Complejo</h2>
          <p className="text-gray-400 text-sm">Gestioná y confirmá las reservas de tus clientes</p>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['todas', 'pendiente', 'confirmada', 'cancelada'].map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-lg text-sm font-black italic uppercase transition whitespace-nowrap ${
                filtro === f 
                ? 'bg-green-500 text-black' 
                : 'bg-[#0f0f0f] border border-white/10 text-gray-400 hover:border-green-500/50'
              }`}
            >
              {f} ({f === 'todas' ? reservas.length : reservas.filter(r => r.estado === f).length})
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p>Cargando reservas...</p>
          </div>
        ) : reservasFiltradas.length === 0 ? (
          <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-20 text-center">
            <p className="text-6xl mb-4">📅</p>
            <p className="text-gray-400 font-bold text-lg">No hay reservas {filtro !== 'todas' ? `"${filtro}"` : 'todavía'}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {reservasFiltradas.map((reserva) => (
              <div key={reserva.id} className="bg-[#0f0f0f] border border-white/10 rounded-xl p-5 hover:border-green-500/50 transition">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <h3 className="font-black text-white text-lg italic uppercase">{reserva.cliente_nombre}</h3>
                      <span className={`text-xs px-2 py-1 rounded-lg font-black uppercase border ${estadoColor[reserva.estado]}`}>
                        {reserva.estado}
                      </span>
                      {reserva.es_desafio && (
                        <span className="text-xs px-2 py-1 rounded-lg font-black uppercase bg-blue-500/20 text-blue-400 border border-blue-500/30">
                          ⚔️ Desafío
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-400">
                      <p className="font-bold">📞 {reserva.cliente_telefono}</p>
                      <p>🏟️ <span className="text-white font-bold">{reserva.canchas?.nombre}</span> ({tipoLabel[reserva.canchas?.tipo]})</p>
                      <p>📅 <span className="text-white font-bold">{reserva.fecha}</span> · ⏰ {reserva.hora_inicio.slice(0,5)} - {reserva.hora_fin.slice(0,5)}</p>
                      <p className="text-green-400 font-black text-base mt-2">
                        💰 Seña: ${reserva.monto_seña.toLocaleString()} · Total: ${reserva.monto_total.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">💳 {reserva.metodo_pago}</p>
                    </div>
                  </div>

                  {/* Acciones */}
                  {reserva.estado === 'pendiente' && (
                    <div className="flex flex-col gap-2 lg:w-40">
                      <button
                        onClick={() => cambiarEstado(reserva.id, 'confirmada')}
                        className="bg-green-500 text-black px-4 py-2.5 rounded-lg text-sm hover:bg-green-400 transition font-black italic uppercase"
                      >
                        ✅ Confirmar
                      </button>
                      <button
                        onClick={() => cambiarEstado(reserva.id, 'cancelada')}
                        className="bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-2.5 rounded-lg text-sm hover:bg-red-500/30 transition font-black italic uppercase"
                      >
                        ❌ Cancelar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}