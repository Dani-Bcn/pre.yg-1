import React from "react";

export default function Carousel() {
  const arrayCarousel = [
    "/img/video.jpg",
    "/img/yg-1-nanocut.png",
    "/img/prime.png",
    "/img/4-dream-drill-pro.jpg",
    "/img/02.png",
  ];

  return (
    <main className="w-full h-64 bg-red-500">
      <section className="overflow-auto  flex w-full h-full">
        {arrayCarousel.map((e, i) => {
          return <div key={i} 
        
           className={` w-full h-full bg-[url("${e}")] bg-center bg-cover bg-no-repeat`}
           />;
        })}
      </section>
    </main>
  );
}
