import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import ReactPlayer from "react-player";

export default function Carousel() {
  const arrayCarousel = [
    {
      url: "assets/video.webp",
      text: "Una nueva era ha empezado",
      titleSoluciones: "Fresado",
    },

    {
      url: "assets/02.webp",
      text: "YG-1 Cutting Tools | [Mandrinos] Portaherramientas hidráulicos Power E-Hydro",
      titleSoluciones: "Taladro",
    },
    {
      url: "assets/prime.webp",
      text: "YG-1 Cutting Tools | [Roscado] Machos de roscar Prime Taps",
      titleSoluciones: "Roscado",
    },
    {
      url: "assets/4-dream-drill-pro.webp",
      text: "YG-1 Cutting Tools | [Taladrado]  Dream Drill pro para aceros y fundición",
      titleSoluciones: "Fijación mecánica",
    },
    {
      url: "assets/yg-1-nanocut.webp",
      text: "YG-1 Cutting Tools | [Torneado] Programa de mandrinado NanoCut",
      titleSoluciones: "Sistemas de herramientas",
    },
  ];

  const [count, setCount] = useState(0);

  const slider = () => {
    setCount(count + 1);
    clearInterval(interval)
    count === 4 ? setCount(0):null
  };

  const interval = setInterval(() => slider(), 3000);

  return (
    <main id="main" className="mt-24 z-20">
      <div className="w-screen h-48 bg-red-500 flex justify-center items-center ">
        <img
          src={arrayCarousel[count].url}
          alt=""
          className="w-screen  h-48 object-cover brightness-[50%]"
        />
        <h3 className="absolute px-5 text-3xl text-center text-white font-bold ">
          {arrayCarousel[count].text}
        </h3>
      </div>
    </main>
  );
}
