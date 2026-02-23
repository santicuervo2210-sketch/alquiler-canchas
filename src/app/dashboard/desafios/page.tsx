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
      .order('fecha', { ascending: true })

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
    abierto: 'bg-blue-100 text-blue-700',
    completo: 'bg-green-100 text-green-700',
    cancelado: 'bg-red-100 text-red-600',
  }

  const tipoLabel: Record<string, string> = {
    futbol_5: '⚽ F5',
    futbol_7: '⚽ F7',
    futbol_11: '⚽ F11',
    paddle: '🎾 Pádel',
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-green-700">⚽ Alquiler de Canchas</h1>
        <button onClick={() => router.push('/dashboard')} className="text-green-600 hover:underline text-sm">
          ← Volver al panel
        </button>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">⚔️ Desafíos</h2>
          <p className="text-gray-500 text-sm mt-1">Gestioná los desafíos creados en tu complejo</p>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          {['todos', 'abierto', 'completo', 'cancelado'].map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition capitalize whitespace-nowrap ${filtro === f ? 'bg-green-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {f} {f === 'todos' && `(${desafios.length})`}
              {f !== 'todos' && `(${desafios.filter(d => d.estado === f).length})`}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-gray-400 py-10">Cargando desafíos...</div>
        ) : desafiosFiltrados.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-10 text-center text-gray-400">
            <p className="text-4xl mb-3">⚔️</p>
            <p className="font-medium">No hay desafíos {filtro !== 'todos' ? `con estado "${filtro}"` : 'todavía'}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {desafiosFiltrados.map((desafio) => (
              <div key={desafio.id} className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:border-green-200 transition">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="font-semibold text-gray-800">{desafio.equipo_creador_nombre}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${estadoColor[desafio.estado]}`}>
                        {desafio.estado}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 space-y-1">
                      <p>📞 {desafio.equipo_creador_telefono}</p>
                      <p>🏟️ {desafio.canchas?.nombre} ({tipoLabel[desafio.canchas?.tipo]}) · 📅 {desafio.fecha} · ⏰ {desafio.hora_inicio.slice(0,5)} - {desafio.hora_fin.slice(0,5)}</p>
                      <p>👥 Busca {desafio.jugadores_necesarios} jugadores</p>
                      <p className="text-green-600 font-medium">💰 ${((desafio.canchas?.precio_hora || 0) / 2).toLocaleString()} por jugador</p>
                    </div>
                  </div>

                  {desafio.estado === 'abierto' && (
                    <button
                      onClick={() => cambiarEstado(desafio.id, 'cancelado')}
                      className="bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-200 transition font-medium w-full md:w-auto"
                    >
                      ❌ Cancelar
                    </button>
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