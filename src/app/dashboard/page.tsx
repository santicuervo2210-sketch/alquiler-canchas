'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  // Función para forzar la navegación y limpiar cualquier duda del navegador
  const navegarA = (ruta: string) => {
    router.push(ruta);
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans relative overflow-hidden">
      
      {/* Fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 via-[#050505] to-[#050505]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        
        <nav className="absolute top-0 w-full p-8 flex justify-between items-center max-w-7xl">
          <div className="flex items-center gap-2">
            <span className="text-xl italic font-black uppercase tracking-tighter">Arena <span className="text-green-500">Pro</span></span>
          </div>
          <button 
            onClick={() => navegarA('/dashboard')}
            className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-all"
          >
            Panel de Control →
          </button>
        </nav>

        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight mb-4">
            TU PARTIDO <br /> EMPIEZA <span className="text-green-500 underline decoration-green-500/30">ACÁ</span>
          </h1>
          <p className="text-gray-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-10">
            Reserva directa y gestión de desafíos
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {/* BOTÓN RESERVAR: Redirige a /reservar */}
            <button 
              onClick={() => navegarA('/reservar')} 
              className="w-full sm:w-auto bg-white text-black font-black px-10 py-4 rounded-xl uppercase italic text-[11px] hover:bg-green-500 transition-all active:scale-95"
            >
              🏟️ Reservar cancha
            </button>

            {/* BOTÓN DESAFÍOS: Redirige a /armar-desafio */}
            <button 
              onClick={() => navegarA('/armar-desafio')} 
              className="w-full sm:w-auto bg-green-500 text-black font-black px-10 py-4 rounded-xl uppercase italic text-[11px] hover:bg-white transition-all shadow-lg shadow-green-500/10 active:scale-95"
            >
              ⚔️ Buscar desafíos
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}