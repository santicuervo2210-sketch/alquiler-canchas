'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DesafiosAdminPage() {
  const [desafios, setDesafios] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [complejoId, setComplejoId] = useState<string | null>(null)
  const [filtro, setFiltro] = useState('todos')
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
      .from('desafios')
      .select('*, canchas(nombre, tipo, precio_hora)')
      .eq('complejo_id', complejo.id)
      .order('fecha', { ascending: false })

    setDesafios(data || [])
    setLoading(false)
  }

  const cambiarEstado = async (id: string, estado: string) => {
    await supabase.from('desafios').update({ estado }).eq('id', id)
    await cargarDatos()
  }

  const desafiosFiltrados = desafios.filter(d => {
    if (filtro === 'todos') return true
    return d.estado === filtro
  })

  const estadoColor: Record<string, string> = {
    abierto: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    completo: 'bg-green-500/20 text-green-400 border-green-500/30',
    cancelado: 'bg-red-500/20 text-red-400 border-red-500/30',
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
        <h1 className="text-xl font-black italic uppercase">⚔️ Gestión de Desafíos</h1>
        <button onClick={() => router.push('/dashboard')} className="text-gray-400 hover:text-white transition text-sm font-bold uppercase tracking-wide">
          ← Panel
        </button>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        
        <div className="mb-6">
          <h2 className="text-2xl font-black italic uppercase text-green-500 mb-1">Desafíos del Complejo</h2>
          <p className="text-gray-400 text-sm">Gestioná los matchmaking creados por los equipos</p>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['todos', 'abierto', 'completo', 'cancelado'].map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-lg text-sm font-black italic uppercase transition whitespace-nowrap ${
                filtro === f 
                ? 'bg-green-500 text-black' 
                : 'bg-[#0f0f0f] border border-white/10 text-gray-400 hover:border-green-500/50'
              }`}
            >
              {f} ({f === 'todos' ? desafios.length : desafios.filter(d => d.estado === f).length})
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
            <p>Cargando desafíos...</p>
          </div>
        ) : desafiosFiltrados.length === 0 ? (
          <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-20 text-center">
            <p className="text-6xl mb-4">⚔️</p>
            <p className="text-gray-400 font-bold text-lg">No hay desafíos {filtro !== 'todos' ? `"${filtro}"` : 'todavía'}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {desafiosFiltrados.map((desafio) => (
              <div key={desafio.id} className="bg-[#0f0f0f] border border-white/10 rounded-xl p-5 hover:border-green-500/50 transition">
                <div className="flex flex-col lg:flex-row justify-between gap-4">
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <h3 className="font-black text-white text-lg italic uppercase">{desafio.equipo_creador_nombre}</h3>
                      <span className={`text-xs px-2 py-1 rounded-lg font-black uppercase border ${estadoColor[desafio.estado]}`}>
                        {desafio.estado}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-sm text-gray-400">
                      <p className="font-bold">📞 {desafio.equipo_creador_telefono}</p>
                      <p>🏟️ <span className="text-white font-bold">{desafio.canchas?.nombre}</span> ({tipoLabel[desafio.canchas?.tipo]})</p>
                      <p>📅 <span className="text-white font-bold">{desafio.fecha}</span> · ⏰ {desafio.hora_inicio.slice(0,5)} - {desafio.hora_fin.slice(0,5)}</p>
                      <p className="text-blue-400 font-bold">👥 Busca {desafio.jugadores_necesarios} jugadores</p>
                      <p className="text-green-400 font-black text-base mt-2">
                        💰 ${((desafio.canchas?.precio_hora || 0) / 2).toLocaleString()} por jugador
                      </p>
                    </div>
                  </div>

                  {/* Acciones */}
                  {desafio.estado === 'abierto' && (
                    <div className="flex flex-col gap-2 lg:w-40">
                      <button
                        onClick={() => cambiarEstado(desafio.id, 'cancelado')}
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