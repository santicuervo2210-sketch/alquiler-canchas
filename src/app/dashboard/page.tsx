'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setEmail(user.email || '')
      }
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <main className="min-h-screen" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=1600)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="min-h-screen" style={{ backgroundColor: 'rgba(22, 101, 52, 0.82)' }}>
        
        <nav className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
          <h1 className="text-xl font-bold text-white">⚽ Alquiler de Canchas</h1>
          <div className="flex items-center gap-4">
            <span className="text-green-200 text-sm">{email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-white mb-2">Panel de Control</h2>
          <p className="text-green-200 mb-8">Bienvenido a tu complejo deportivo</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 border border-white/20" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
              <h3 className="text-lg font-semibold text-white">🏟️ Mi Complejo</h3>
              <p className="text-green-200 text-sm mt-2">Configurá tu complejo deportivo</p>
              <button
                onClick={() => router.push('/dashboard/complejo')}
                className="mt-4 bg-white text-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition w-full font-semibold"
              >
                Configurar
              </button>
            </div>

            <div className="rounded-xl p-6 border border-white/20" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
              <h3 className="text-lg font-semibold text-white">📅 Reservas</h3>
              <p className="text-green-200 text-sm mt-2">Gestioná las reservas</p>
              <button
                onClick={() => router.push('/dashboard/reservas')}
                className="mt-4 bg-white text-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition w-full font-semibold"
              >
                Ver reservas
              </button>
            </div>

            <div className="rounded-xl p-6 border border-white/20" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
              <h3 className="text-lg font-semibold text-white">⚽ Canchas</h3>
              <p className="text-green-200 text-sm mt-2">Administrá tus canchas</p>
              <button
                onClick={() => router.push('/dashboard/canchas')}
                className="mt-4 bg-white text-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition w-full font-semibold"
              >
                Ver canchas
              </button>
            </div>

            <div className="rounded-xl p-6 border border-white/20" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
              <h3 className="text-lg font-semibold text-white">⚔️ Desafíos</h3>
              <p className="text-green-200 text-sm mt-2">Gestioná los desafíos</p>
              <button
                onClick={() => router.push('/dashboard/desafios')}
                className="mt-4 bg-white text-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition w-full font-semibold"
              >
                Ver desafíos
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}