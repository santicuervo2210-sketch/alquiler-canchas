'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function GestionCanchas() {
  const supabase = createClient()
  const router = useRouter()
  const [canchas, setCanchas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  
  // Estado para la nueva cancha
  const [form, setForm] = useState({
    nombre: '',
    tipo: 'futbol_5',
    precio_hora: '',
    activa: true
  })

  useEffect(() => {
    fetchCanchas()
  }, [])

  const fetchCanchas = async () => {
    setLoading(true)
    const { data: complejos } = await supabase.from('complejos').select('id').limit(1)
    if (complejos?.[0]) {
      const { data } = await supabase
        .from('canchas')
        .select('*')
        .eq('complejo_id', complejos[0].id)
        .order('created_at', { ascending: true })
      setCanchas(data || [])
    }
    setLoading(false)
  }

  const handleToggleActiva = async (id: string, estadoActual: boolean) => {
    await supabase.from('canchas').update({ activa: !estadoActual }).eq('id', id)
    fetchCanchas()
  }

  const handleEliminar = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta cancha? No se puede deshacer.')) {
      await supabase.from('canchas').delete().eq('id', id)
      fetchCanchas()
    }
  }

  const handleCrearCancha = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data: complejos } = await supabase.from('complejos').select('id').limit(1)
    if (!complejos?.[0]) return

    const { error } = await supabase.from('canchas').insert({
      ...form,
      complejo_id: complejos[0].id,
      precio_hora: parseInt(form.precio_hora)
    })

    if (!error) {
      setShowForm(false)
      setForm({ nombre: '', tipo: 'futbol_5', precio_hora: '', activa: true })
      fetchCanchas()
    }
  }

  return (
    <main className="min-h-screen relative p-4 md:p-10 font-sans">
      {/* FONDO DE PASTO CON OVERLAY */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-black/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1551673400-38fdadad5c3d?q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="pasto"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <button 
            onClick={() => router.push('/dashboard')}
            className="text-white/70 hover:text-white transition-all text-sm font-bold uppercase tracking-widest flex items-center gap-2"
          >
            ← Volver al Panel
          </button>
          <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">
            Mis <span className="text-green-400">Canchas</span>
          </h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 hover:bg-green-400 text-black font-black px-6 py-3 rounded-full transition-all shadow-lg shadow-green-500/20 active:scale-95"
          >
            {showForm ? 'CERRAR' : '+ AGREGAR CANCHA'}
          </button>
        </div>

        {/* FORMULARIO (MODAL STYLE) */}
        {showForm && (
          <div className="bg-white rounded-[32px] p-8 mb-10 shadow-2xl animate-in zoom-in-95 duration-300">
            <h2 className="text-2xl font-black text-gray-800 mb-6 italic uppercase">Nueva Cancha</h2>
            <form onSubmit={handleCrearCancha} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input 
                type="text" placeholder="Nombre (ej: Cancha 1)" required
                className="bg-gray-100 p-4 rounded-2xl outline-none focus:ring-2 ring-green-500 font-bold"
                value={form.nombre} onChange={e => setForm({...form, nombre: e.target.value})}
              />
              <select 
                className="bg-gray-100 p-4 rounded-2xl outline-none focus:ring-2 ring-green-500 font-bold"
                value={form.tipo} onChange={e => setForm({...form, tipo: e.target.value})}
              >
                <option value="futbol_5">⚽ Fútbol 5</option>
                <option value="paddle">🎾 Pádel</option>
              </select>
              <input 
                type="number" placeholder="Precio por hora" required
                className="bg-gray-100 p-4 rounded-2xl outline-none focus:ring-2 ring-green-500 font-bold"
                value={form.precio_hora} onChange={e => setForm({...form, precio_hora: e.target.value})}
              />
              <button className="bg-black text-white font-black rounded-2xl hover:bg-gray-800 transition-all">
                GUARDAR
              </button>
            </form>
          </div>
        )}

        {/* LISTADO DE CANCHAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {canchas.map((c) => (
            <div key={c.id} className={`bg-white/10 backdrop-blur-md border ${c.activa ? 'border-white/20' : 'border-red-500/50'} rounded-[32px] p-6 flex flex-col justify-between transition-all hover:bg-white/15`}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-black bg-green-500 text-black px-2 py-1 rounded-md uppercase mb-2 block w-fit">
                    {c.tipo.replace('_', ' ')}
                  </span>
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">{c.nombre}</h3>
                  <p className="text-green-400 font-bold text-xl mt-1">${c.precio_hora} <span className="text-xs text-white/50 uppercase">/ hora</span></p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleToggleActiva(c.id, c.activa)}
                    className={`p-3 rounded-xl font-bold text-xs transition-all ${c.activa ? 'bg-green-500 text-black' : 'bg-gray-600 text-white'}`}
                  >
                    {c.activa ? 'ACTIVA' : 'PAUSADA'}
                  </button>
                  <button 
                    onClick={() => handleEliminar(c.id)}
                    className="bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white p-3 rounded-xl transition-all"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {canchas.length === 0 && !loading && (
          <div className="text-center py-20 bg-white/5 rounded-[40px] border border-dashed border-white/20">
            <p className="text-white/40 font-bold uppercase tracking-widest">No tenés canchas creadas todavía</p>
          </div>
        )}
      </div>
    </main>
  )
}