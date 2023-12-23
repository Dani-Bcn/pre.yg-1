import React from "react";

export default function () {
  return (
    <main>
      <section className="mt-10 w-[90vw] mx-auto  h-72 flex flex-col">
        <h3 className="ml-5 font-semibold  text-3xl">Actualidad YG-1</h3>
        <div className="ml-5 absolute mt-10 w-14 h-[2px]  bg-red-700"></div>
        <img src="assets/evento.jpg" alt="img" className="mt-10" />
        <article className="py-10">
          <h3 className="text-2xl">
            <span>YG-1 EN BIEHM</span>
          </h3>
          <p className="text-[1.3rem]">
            Herramientas YG-1 se presenta a la próxima feria de muestras 31BIEMH
          </p>
        </article>
      </section>
    </main>
  );
}
