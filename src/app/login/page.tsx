'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [isRegister, setIsRegister] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (isRegister) {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) {
        setError(error.message)
      } else {
        router.push('/dashboard')
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError('Email o contraseña incorrectos')
      } else {
        router.push('/dashboard')
      }
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen flex">

      {/* Lado izquierdo - Fútbol */}
      <div className="hidden md:flex w-1/2 relative flex-col justify-end" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1551958219-acbc4a4b8a2e?w=900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(22, 101, 52, 0.75)' }} />
        <div className="relative z-10 p-10 text-white">
          <h2 className="text-4xl font-bold mb-2">⚽ Fútbol</h2>
          <p className="text-green-200 text-lg">Reservá tu cancha y jugá cuando quieras</p>
        </div>
      </div>

      {/* Lado derecho - Pádel */}
      <div className="hidden md:flex w-1/2 relative flex-col justify-end" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1612458225373-83afe9301a76?w=900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(4, 120, 87, 0.75)' }} />
        <div className="relative z-10 p-10 text-white">
          <h2 className="text-4xl font-bold mb-2">🎾 Pádel</h2>
          <p className="text-green-200 text-lg">Encontrá rivales y jugá tus partidos</p>
        </div>
      </div>

      {/* Formulario flotante centrado */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">⚽ Alquiler de Canchas</h1>
            <p className="text-gray-500 mt-1 text-sm">
              {isRegister ? 'Creá tu cuenta de complejo' : 'Accedé a tu panel'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50 font-medium"
            >
              {loading ? 'Cargando...' : isRegister ? 'Registrarse' : 'Iniciar Sesión'}
            </button>
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            {isRegister ? '¿Ya tenés cuenta?' : '¿No tenés cuenta?'}{' '}
            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-green-600 font-medium hover:underline"
            >
              {isRegister ? 'Iniciá sesión' : 'Registrate'}
            </button>
          </p>
        </div>
      </div>

    </main>
  )
}