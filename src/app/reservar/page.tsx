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
      .order('fecha', { ascending: true })
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

  const estadoStyles: Record<string, string> = {
    pendiente: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    confirmada: 'bg-green-500/10 text-green-500 border-green-500/20',
    cancelada: 'bg-red-500/10 text-red-500 border-red-500/20',
  }

  const tipoIcon: Record<string, string> = {
    futbol_5: '⚽',
    futbol_7: '⚽',
    futbol_11: '⚽',
    paddle: '🎾',
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-green-500 selection:text-black">
      {/* Background Decorativo */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900/10 via-transparent to-transparent pointer-events-none" />

      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <h1 className="text-sm font-black italic uppercase tracking-tighter">Panel de Gestión</h1>
        </div>
        <button 
          onClick={() => router.push('/dashboard')} 
          className="group text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all flex items-center gap-2"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al panel
        </button>
      </nav>

      <div className="container mx-auto px-4 py-10 max-w-5xl relative z-10">
        <header className="mb-10">
          <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2">
            Control de <span className="text-green-500">Reservas</span>
          </h2>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.3em]">Administración de turnos en tiempo real</p>
        </header>

        {/* Filtros Estilo Tabs Modernos */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 custom-scrollbar">
          {['todas', 'pendiente', 'confirmada', 'cancelada'].map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                filtro === f 
                ? 'bg-green-500 text-black border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]' 
                : 'bg-[#111] text-gray-500 border-white/5 hover:border-white/20'
              }`}
            >
              {f} <span className="ml-1 opacity-50">
                ({f === 'todas' ? reservas.length : reservas.filter(r => r.estado === f).length})
              </span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Sincronizando con el servidor...</p>
          </div>
        ) : reservasFiltradas.length === 0 ? (
          <div className="bg-[#0f0f0f] border border-white/5 rounded-3xl p-16 text-center">
            <p className="text-5xl mb-6 grayscale opacity-50">📅</p>
            <p className="text-sm font-black italic uppercase text-gray-500">No se encontraron registros</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {reservasFiltradas.map((reserva) => (
              <div 
                key={reserva.id} 
                className="group bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.05)]"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-lg font-black italic uppercase tracking-tight">{reserva.cliente_nombre}</h3>
                      <span className={`text-[8px] px-2.5 py-1 rounded-md font-black uppercase tracking-widest border ${estadoStyles[reserva.estado]}`}>
                        {reserva.estado}
                      </span>
                      {reserva.es_desafio && (
                        <span className="text-[8px] px-2.5 py-1 rounded-md font-black uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          ⚔️ Desafío
                        </span>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 text-[11px] font-bold uppercase tracking-tight text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">📞</span> {reserva.cliente_telefono}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">🏟️</span> 
                        <span className="text-white font-black italic">
                            {reserva.canchas?.nombre} {tipoIcon[reserva.canchas?.tipo]}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">📅</span> {reserva.fecha}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">⏰</span> {reserva.hora_inicio.slice(0,5)} - {reserva.hora_fin.slice(0,5)}
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-4">
                      <div className="text-[10px] font-black italic">
                        <span className="text-gray-600 uppercase mr-2">Seña</span>
                        <span className="text-green-500 text-sm">${reserva.monto_seña.toLocaleString()}</span>
                      </div>
                      <div className="text-[10px] font-black italic">
                        <span className="text-gray-600 uppercase mr-2">Total</span>
                        <span className="text-white text-sm">${reserva.monto_total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Acciones Estilo Floating Buttons */}
                  {reserva.estado === 'pendiente' && (
                    <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto">
                      <button
                        onClick={() => cambiarEstado(reserva.id, 'confirmada')}
                        className="flex-1 bg-green-500 text-black px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-lg shadow-green-500/10"
                      >
                        Confirmar
                      </button>
                      <button
                        onClick={() => cambiarEstado(reserva.id, 'cancelada')}
                        className="flex-1 bg-[#1a1a1a] text-red-500 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border border-red-500/20 hover:bg-red-500 hover:text-white transition-all active:scale-95"
                      >
                        Cancelar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { height: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
      `}</style>
    </main>
  )
}