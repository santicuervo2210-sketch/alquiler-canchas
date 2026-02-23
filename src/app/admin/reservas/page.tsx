'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function AdminReservas() {
  const [reservas, setReservas] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    fetchReservas()
  }, [])

  async function fetchReservas() {
    const { data, error } = await supabase
      .from('reservas')
      .select('*, canchas(nombre)')
      .order('fecha', { ascending: false })
      .order('hora_inicio', { ascending: true })

    if (!error) setReservas(data || [])
    setLoading(false)
  }

  const cambiarEstado = async (id: string, nuevoEstado: string) => {
    const { error } = await supabase
      .from('reservas')
      .update({ estado: nuevoEstado })
      .eq('id', id)
    
    if (!error) fetchReservas()
  }

  if (loading) return <p className="p-10 text-center">Cargando reservas...</p>

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">📅 Panel de Reservas</h1>
          <button onClick={fetchReservas} className="text-sm bg-white px-3 py-1 rounded-lg shadow-sm border">Actualizar</button>
        </div>

        <div className="grid gap-4">
          {reservas.length === 0 && <p className="text-center text-gray-500 py-10">No hay reservas todavía.</p>}
          
          {reservas.map((reserva) => (
            <div key={reserva.id} className="bg-white rounded-2xl shadow-sm p-5 border border-gray-200 flex flex-col md:flex-row justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-3 h-3 rounded-full ${reserva.estado === 'confirmada' ? 'bg-green-500' : reserva.estado === 'pendiente' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
                  <p className="font-black text-gray-800 uppercase text-xs">{reserva.estado}</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{reserva.cliente_nombre}</h3>
                <p className="text-gray-500 text-sm font-medium">📞 {reserva.cliente_telefono}</p>
                <div className="mt-3 flex gap-4 text-sm">
                  <p><strong>Cancha:</strong> {reserva.canchas?.nombre}</p>
                  <p><strong>Día:</strong> {new Date(reserva.fecha).toLocaleDateString()}</p>
                  <p><strong>Hora:</strong> {reserva.hora_inicio.slice(0, 5)} hs</p>
                </div>
              </div>

              <div className="flex md:flex-col justify-end gap-2">
                {reserva.estado === 'pendiente' && (
                  <button 
                    onClick={() => cambiarEstado(reserva.id, 'confirmada')}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-green-700 transition"
                  >
                    Confirmar Seña
                  </button>
                )}
                <button 
                  onClick={() => window.open(`https://wa.me/${reserva.cliente_telefono.replace(/\D/g,'')}`, '_blank')}
                  className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold border border-blue-100"
                >
                  WhatsApp
                </button>
                <button 
                  onClick={() => { if(confirm('¿Cancelar reserva?')) cambiarEstado(reserva.id, 'cancelada') }}
                  className="text-red-400 text-xs hover:underline mt-2"
                >
                  Cancelar turno
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}