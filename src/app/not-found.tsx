import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-black text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página no encontrada</p>
        <Link 
          href="/"
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-bold"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  )
}