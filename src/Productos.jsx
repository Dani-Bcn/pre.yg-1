import React from "react";

export default function Productos() {
  return (
    <main className="w-[90vw]  mx-auto justify-between items-center">
      <section className=" flex flex-col ">
        <div className="my-5 text-2xl md:text-4xl"><span>ROSCADO DE YG-1 DE ALTO RENDIMIENTO</span></div>
        <div className="mb-5 text-[1.3rem]" >
          Lanzamiento de los nuevos machos HSS-PM de alto rendimiento PRIME TAPS
        </div>
       <img src="/assets/prime.webp" alt="prime"  
       className="h-52 object-cover md:w-[40vw] md:h-[80vh]" />     
      
      </section>
    </main>
  );
}
