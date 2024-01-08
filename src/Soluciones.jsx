import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Soluciones() {
  const navigate = useNavigate();





  const arraySoluciones = [
    { url: "assets/fresado.jpg", text: "Fresado", link: "fresado" },
    { url: "assets/taladrado.jpg", text: "Taladrado", link: "taladrado" },
    { url: "assets/roscado.jpg", text: "Roscado", link: "roscado" },
    {
      url: "assets/fijacion_mecanica.jpg",
      text: "Fijación mecánica",
      link: "fijacion",
    },
    {
      url: "assets/sistema_herramientas.jpg",
      text: "Sistemas de herramientas",
      link: "sistemas",
    },
  ];

  return (
    <main className="md:mt-0 z-[150]">
      <section className="m-auto mt-10 md:my-40  w-full h-full flex flex-col">
        <h2 className=" py-2 px-7 md:px-20 text-3xl md:text-5xl  md:pt-10 font-bold">Soluciones</h2>
        <div className="mx-7 w-12 h-[2px] md:mx-20 -mt-2 mb-2 bg-red-700"></div>
        <article className="w-full flex flex-wrap  justify-center">
          {arraySoluciones.map((e, i) => {
            return (
              <div
                onClick={() => {
                  navigate(e.link);
                }}
                key={i}
                className="h-72 flex flex-col justify-start  "
              >
                <img key={i} className="w-44 md:w-60  p-2 h-52 md:h-80" src={e.url} alt="img" />
                <p className="ml-2 w-36 text-2xl font-bold">{e.text}</p>
              </div>
            );
          })}
        </article>
      </section>
      
      <section className="my-14 md:py-16 bg-gradient-to-b from-gray-200 to-slate-50 flex  w-screen md:w-full h-62  overflow-auto md:overflow-hidden">
        <article className="flex flex-col justify-center items-center">
          <img
            src="assets/matrices_moldes.png"
            alt="img"
           
            className="w-screen md:w-80"
          />
          <p className="w-screen md:w-[40vw] pl-20 text-3xl">
            Industria
            <br /> <span>Matrices y molde</span>
          </p>
        </article>
        <article className="flex flex-col">
          <img src="assets/automocion.png" alt="img"    className="w-screen md:w-80" />
          <p className="w-screen md:w-96 pl-24 text-3xl">
            Industria <br />
            <span>Automoción</span>
          </p>
        </article>
        <article className="flex flex-col ">
          <img src="assets/aeroespacial.png" alt="img" className="w-screen md:w-80" />
          <p className="w-screen md:w-72 pl-24 text-3xl">
            Industria <span>Aeroespacial</span>
          </p>
        </article>
      </section>
    </main>
  );
}
