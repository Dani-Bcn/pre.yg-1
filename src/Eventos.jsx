import React from "react";

export default function () {
  window.scrollTo(0, 0)
  return (
    <main className="h-[700px]" >
      <section className="mt-10 w-[90vw] m-auto  h-72 flex flex-col">
        <h3 className=" font-semibold  text-3xl">Actualidad YG-1</h3>
        <div className="w-14 h-[2px]  bg-red-700"></div>
        <article className="mt-10">
          <h3 className="text-2xl">
            <span>YG-1 EN BIEHM</span>
          </h3>
          <p className="text-[1.3rem]">
            Herramientas YG-1 se presenta a la próxima feria de muestras 31BIEMH
          </p>
        </article>      
        <img src="assets/evento.jpg" alt="img"/>
      </section>
    </main>
  );
}
