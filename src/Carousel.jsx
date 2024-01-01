import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";

export default function Carousel() {
  const arrayCarousel = [
    {
      url: "assets/video.jpg",
      text: "Una nueva era ha empezado",
      titleSoluciones: "Fresado",
    },

    {
      url: "assets/02.png",
      text: "YG-1 Cutting Tools | [Mandrinos] Portaherramientas hidráulicos Power E-Hydro",
      titleSoluciones: "Taladro",
    },
    {
      url: "assets/prime.png",
      text: "YG-1 Cutting Tools | [Roscado] Machos de roscar Prime Taps",
      titleSoluciones: "Roscado",
    },
    {
      url: "assets/4-dream-drill-pro.jpg",
      text: "YG-1 Cutting Tools | [Taladrado]  Dream Drill pro para aceros y fundición",
      titleSoluciones: "Fijación mecánica",
    },
    {
      url: "assets/yg-1-nanocut.jpg",
      text: "YG-1 Cutting Tools | [Torneado] Programa de mandrinado NanoCut",
      titleSoluciones: "Sistemas de herramientas",
    },
  ];

  const [positionX, setPositionX] = useState(0);
  console.log(positionX);

  positionX < -1560 ? setPositionX(0) : null;
  positionX  === 390 ? setPositionX(0) : null;
  return (
    <main id="main" className="mt-24 z-20">
      <section id="slider">
     
          <button
            onClick={() => setPositionX(positionX + 390)}
            className=" absolute z-50  text-5xl text-white mt-24"
          >
            ⬅️
          </button>
          <button
            onClick={() => setPositionX(positionX + -390)}
            className="absolute  z-50  text-5xl text-white ml-80 mt-24"
          >
            ➡️
          </button>
      

        {arrayCarousel.map((e, i) => {
          console.log(e.url);
          return (
            <section
              key={e.url}
              className="flex h-60 justify-center items-center"
            >
              <m.div
                animate={{
                  x: positionX,
                }}
                id="img"
                className=" z-20 w-screen h-60  "
                style={{
                  background: `url(${e.url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  display: "flex",
                }}
              >
                <p className="z-20 h-60 backdrop-brightness-50 text-white text-center font-bold justify-center items-center  text-3xl flex  ">
                  {e.text}
                </p>
              </m.div>
            </section>
          );
        })}
      </section>
    </main>
  );
}
