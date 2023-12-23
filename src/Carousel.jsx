import gsap from "gsap";
import React, { useEffect } from "react";


export default function Carousel() {
  const arrayCarousel = [
    { url: "assets/video.jpg", text: "Una nueva era ha empezado" },
    {
      url: "assets/02.png",
      text: "YG-1 Cutting Tools | [Mandrinos] Portaherramientas hidráulicos Power E-Hydro",
    },
    {
      url: "assets/prime.png",
      text: "YG-1 Cutting Tools | [Roscado] Machos de roscar Prime Taps",
    },
    {
      url: "assets/4-dream-drill-pro.jpg",
      text: "YG-1 Cutting Tools | [Taladrado]  Dream Drill pro para aceros y fundición",
    },
    {
      url: "assets/yg-1-nanocut.jpg",
      text: "YG-1 Cutting Tools | [Torneado] Programa de mandrinado NanoCut",
    },
  ];

  return (
    <main id="main">
      <section className="flex w-screen h-52 overflow-auto">
        {arrayCarousel.map((e, i) => {
          console.log(e.url);
          return (
            <section key={e.url} className="flex h-52 justify-center items-center">
              <div              
              className="w-screen h-52 "
               style={{background:`url(${e.url})`,
               backgroundPosition:"center",
               backgroundSize:"cover",
               display:"flex",
               alignItems:"center",
               justifyContent:"center"
               }}  >
                 <p className="w-full h-52 backdrop-brightness-50 text-white text-center font-bold justify-center items-center  text-3xl flex  ">{e.text}</p>                 
              </div>
            </section>
          );
        })}
      </section>
      <section className="m-auto mt-20 w-full h-full flex flex-col">
        <h2 className=" py-5 px-7 text-3xl">Soluciones</h2>
        <article className="w-full flex flex-wrap items-center justify-center">
        {
          arrayCarousel.map((e,i)=>{
            return (
              <img className="w-44  p-2 h-52" src={e.url} alt="img" />
            )
          })
        }        
        </article>
      </section>
    </main>
  );
}
