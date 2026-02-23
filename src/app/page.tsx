import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1600)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="min-h-screen" style={{ backgroundColor: 'rgba(22, 101, 52, 0.88)' }}>
        
        <nav className="px-6 py-4 flex justify-between items-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
          <h1 className="text-xl font-bold text-white">⚽ Alquiler de Canchas</h1>
          <Link href="/login" className="text-white hover:text-green-200 transition text-sm font-medium">
            Acceso dueños →
          </Link>
        </nav>

        <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[85vh]">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Reservá tu cancha<br/>en segundos ⚡
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-10">
              Sistema de reservas online para complejos deportivos
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/reservas" 
                className="bg-white text-green-700 px-10 py-5 rounded-2xl hover:bg-green-50 transition text-lg font-black shadow-2xl hover:scale-105 transform duration-200"
              >
                🏟️ Reservar Cancha
              </Link>
              <Link 
                href="/desafios" 
                className="bg-green-500 text-white border-2 border-white px-10 py-5 rounded-2xl hover:bg-green-600 transition text-lg font-black shadow-2xl hover:scale-105 transform duration-200"
              >
                ⚔️ Buscar Rivales
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
                <p className="text-5xl mb-3">⚡</p>
                <h3 className="font-black text-xl mb-2">Reserva Rápida</h3>
                <p className="text-green-200 text-sm">Elegí cancha, fecha, horario y listo</p>
              </div>
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
                <p className="text-5xl mb-3">⚔️</p>
                <h3 className="font-black text-xl mb-2">Matchmaking</h3>
                <p className="text-green-200 text-sm">Encontrá equipos para jugar desafíos</p>
              </div>
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)' }}>
                <p className="text-5xl mb-3">💳</p>
                <h3 className="font-black text-xl mb-2">Pago Flexible</h3>
                <p className="text-green-200 text-sm">Transferencia o efectivo, vos elegís</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}