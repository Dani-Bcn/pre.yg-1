import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {

  const navigate = useNavigate()

  return (
    <main
    className='mt-24 w-screen p-5'
    >
      <h2 className='text-3xl font-semibold'>Actualidad YG-1</h2>
      <div className='w-32 h-1 bg-red-600'></div>
      <img onClick={()=> navigate("roscado")} src="/public/assets/prime.png" alt="img" width={900}
      className='my-5'
      />
      <h3 className='text-2xl text-red-600 font-semibold'>ROSCADO DE YG-1 DE ALTO RENDIMIENTO</h3>
      <p>Lanzamiento de los nuevos machos HSS-PM de alto rendimento PRIME TAPS.</p>      
      <section onClick={()=> navigate("catalogo")}>
        <img src="/public/assets/catalog_book_samp_210929.png" width={900} alt="img" 
        className='my-5'
        />
        <h2 className='text-2xl text-red-600 font-semibold'>Catálogo general 2022 - 2023</h2>
        <p>YG-1 lanza el Catalogo general 2022-2023 actualizado para el mercado Europeo.</p>
      </section>
    </main>
  )
}
