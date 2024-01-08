import React from "react";
import { useNavigate } from "react-router-dom";

import Carousel from "./Carousel";
import Eventos from "./Eventos";
import Productos from "./Productos";
import Soluciones from "./Soluciones";
import Footer from "./Footer";
import Fresado from "./Soluciones/Fresado";
import { useState } from "react";

export default function Home() {

  
  const navigate = useNavigate();
  setTimeout(() => {
    scrollUp();
  }, 1);

 /*  const scrollUp = () => {
    window.scrollTo(0, 0);
  }; */

  const arraySoluciones = [
    { url: "assets/fresado.jpg", text: "Fresado" },
    { url: "assets/taladrado.jpg", text: "Taladrado" },
    { url: "assets/roscado.jpg", text: "Roscado" },
    { url: "assets/fijacion_mecanica.jpg", text: "Fijación mecánica" },
    {
      url: "assets/sistema_herramientas.jpg",
      text: "Sistemas de herramientas ",
    },
  ];

  return (
    <main>
      <Carousel />

      <Soluciones />
      <Eventos />
      <Productos />
      <article
        onClick={() => {
          navigate("/noticias");
        }}
        className="text-2xl font-semibold text-white flex 
        justify-center items-center w-[90vw] md:w-72  
        m-auto my-10 h-12 bg-red-600
        hover:text-red-600
        hover:bg-slate-300
        cursor-pointer
        transition-all 
        duration-500
        "
      >
        <p>+ Actualidad</p>
      </article>
    </main>
  );
}
