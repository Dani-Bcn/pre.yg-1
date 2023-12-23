import React, { useEffect } from "react";

export default function Carousel() {
  const arrayCarousel = [
    { url: "src/assets/video.jpg", text: "Una nueva era ha empezado" },
    {
      url: "src/assets/02.png",
      text: "YG-1 Cutting Tools | [Mandrinos] Portaherramientas hidráulicos Power E-Hydro",
    },
    {
      url: "src/assets/prime.png",
      text: "YG-1 Cutting Tools | [Roscado] Machos de roscar Prime Taps",
    },
    {
      url: "src/assets/4-dream-drill-pro.jpg",
      text: "YG-1 Cutting Tools | [Taladrado]  Dream Drill pro para aceros y fundición",
    },
    {
      url: "src/assets/yg-1-nanocut.jpg",
      text: "YG-1 Cutting Tools | [Torneado] Programa de mandrinado NanoCut",
    },
  ];

  return (
    <main>
      <section className="flex h-52 overflow-auto">
         { arrayCarousel.map((e, i) => {
              console.log(arrayCarousel[i]);
              return ( 
        <section key={i} className="flex justify-center items-center">
           <div
            className={`w-screen               
               h-60 flex justify-center 
               items-center 
                bg-[url("${e.url}")]
               bg-center bg-cover
               text-white
               text-4xl
               font-bold`}
          >
            <p className="w-full h-full text-center flex  ">{e.text}</p>
          </div>
        </section> 
             );
            })
         } 
       {/*   <div className="bg-[url('src/assets/02.png')] w-screen h-52 bg-center bg-cover" /> */}
      </section>
    </main>
  );
}
