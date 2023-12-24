import React from "react";

export default function Productos() {
  return (
    <main className="w-[90vw]  mx-auto justify-between items-center">
      <section className=" flex flex-col ">
        <div className="my-5 text-2xl"><span>ROSCADO DE YG-1 DE ALTO RENDIMIENTO</span></div>
        <div className="mb-5 text-[1.3rem]" >
          Lanzamiento de los nuevos machos HSS-PM de alto rendimiento PRIME TAPS
        </div>
        <div 
      
        className="w-screen h-72 "
        style={{background:`url(assets/prime.png)`,
        backgroundPositionY:-75,
        backgroundSize:350,
        backgroundRepeat:"no-repeat",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
        }}
        />
      
      </section>
    </main>
  );
}
