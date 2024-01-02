import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import ReactPlayer from "react-player";
import Slider from "infinite-react-carousel";

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

  return (
    <main id="main" className="mt-24 z-20">
      <Slider autoplay={true} pauseOnHover={false} className="h-42 ">
        {arrayCarousel.map((e, i) => {     
          return (   
            <div key={i} className="h-52 flex items-center justify-center">                     
             
             <img              
                className="w-[150vw] -mt-20 h-[32vh] object-cover"                
                key={i}
                src={e.url}
                alt="coco" />    
              <h3 className="-mt-40 z-50 text-slate-50 font-bold text-center text-3xl">{e.text}</h3>        
              </div>
          );
        })}
      </Slider>
    </main>
  );
}
