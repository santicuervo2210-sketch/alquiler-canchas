'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function MiComplejoPro() {
  const supabase = createClient()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [mensaje, setMensaje] = useState('')
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    direccion: '',
    telefono: '',
    email: '',
    horario_apertura: '08:00',
    horario_cierre: '23:00'
  })

  useEffect(() => {
    fetchComplejo()
  }, [])

  const fetchComplejo = async () => {
    const { data } = await supabase.from('complejos').select('*').limit(1).single()
    if (data) setForm(data)
    setLoading(false)
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from('complejos').update(form).eq('id', form.id)
    
    if (!error) {
      setMensaje('✅ Datos actualizados con éxito')
      setTimeout(() => setMensaje(''), 3000)
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4">
      {/* FONDO DE IMPACTO: Estadio nocturno con filtro oscuro */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000" 
          className="w-full h-full object-cover"
          alt="estadio"
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* BOTÓN VOLVER CON ESTILO NAVEGACIÓN */}
        <button 
          onClick={() => router.push('/dashboard')}
          className="mb-6 flex items-center gap-2 text-white/50 hover:text-green-400 transition-all font-bold uppercase text-xs tracking-[0.2em]"
        >
          ← Volver al Centro de Control
        </button>

        <div className="bg-white/10 backdrop-blur-2xl rounded-[40px] border border-white/10 shadow-2xl overflow-hidden">
          {/* HEADER DEL FORMULARIO */}
          <div className="bg-gradient-to-r from-green-600 to-green-400 p-8 text-center">
            <h1 className="text-3xl font-black text-slate-900 italic uppercase tracking-tighter">
              Perfil del <span className="text-white">Complejo</span>
            </h1>
            <p className="text-slate-900/60 text-xs font-bold uppercase tracking-widest mt-1">Configuración Maestra</p>
          </div>

          <form onSubmit={handleUpdate} className="p-8 md:p-12 space-y-8">
            {/* SECCIÓN: INFORMACIÓN BÁSICA */}
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-green-400 uppercase tracking-widest ml-1">Nombre Comercial</label>
                <input 
                  type="text" 
                  value={form.nombre} 
                  onChange={e => setForm({...form, nombre: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white font-bold focus:border-green-500 outline-none transition-all focus:ring-4 ring-green-500/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-green-400 uppercase tracking-widest ml-1">Ubicación Física</label>
                <input 
                  type="text" 
                  value={form.direccion} 
                  onChange={e => setForm({...form, direccion: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white font-medium focus:border-green-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* SECCIÓN: CONTACTO Y HORARIOS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-green-400 uppercase tracking-widest ml-1">WhatsApp de Reservas</label>
                <input 
                  type="tel" 
                  value={form.telefono} 
                  onChange={e => setForm({...form, telefono: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white font-bold focus:border-green-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-green-400 uppercase tracking-widest ml-1">Email Administrativo</label>
                <input 
                  type="email" 
                  value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white font-medium focus:border-green-500 outline-none transition-all"
                />
              </div>
            </div>

            {/* SECCIÓN: FRANJA HORARIA */}
            <div className="bg-white/5 p-6 rounded-[32px] border border-white/5">
              <p className="text-center text-[10px] font-black text-white/30 uppercase tracking-[0.3em] mb-4 text-sm">Disponibilidad de Turnos</p>
              <div className="flex items-center justify-between gap-4 text-center">
                <div className="flex-1">
                  <input 
                    type="time" 
                    value={form.horario_apertura} 
                    onChange={e => setForm({...form, horario_apertura: e.target.value})}
                    className="bg-transparent text-2xl font-black text-white outline-none text-center cursor-pointer hover:text-green-400 transition-colors"
                  />
                  <p className="text-[10px] text-white/40 uppercase font-bold mt-2">Apertura</p>
                </div>
                <div className="h-10 w-[1px] bg-white/10"></div>
                <div className="flex-1">
                  <input 
                    type="time" 
                    value={form.horario_cierre} 
                    onChange={e => setForm({...form, horario_cierre: e.target.value})}
                    className="bg-transparent text-2xl font-black text-white outline-none text-center cursor-pointer hover:text-green-400 transition-colors"
                  />
                  <p className="text-[10px] text-white/40 uppercase font-bold mt-2">Cierre</p>
                </div>
              </div>
            </div>

            {/* BOTÓN DE ACCIÓN */}
            <button 
              disabled={loading}
              className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black text-lg uppercase italic tracking-tighter hover:bg-green-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-white/5"
            >
              {loading ? 'Sincronizando...' : 'Actualizar Configuración'}
            </button>

            {mensaje && (
              <p className="text-center text-green-400 font-bold animate-bounce text-sm">{mensaje}</p>
            )}
          </form>
        </div>
      </div>
    </main>
  )
}