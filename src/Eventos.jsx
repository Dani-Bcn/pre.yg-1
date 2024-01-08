import React from "react";

export default function () {
  return (
    <main className="h-[700px] md:w-[90vw] m-auto">
      <section className="mt-10  md:my-20 w-[90vw] m-auto  h-72 flex flex-col ">
        <h3 className=" font-semibold text-3xl md:text-5xl">Actualidad YG-1</h3>
        <div className="md:flex justify-center  items-center">
          <article className="mt-10 md:w-[30vw] md:p-20 ">
            <h3 className="md:text-4xl md:py-10 md:w-[70vw] text-2xl">
              <span>YG-1 EN BIEHM</span>
            </h3>
            <p className="md:text-[2em] md:w-96 md:px-5 text-[1.5em]">
              Herramientas YG-1 se presenta a la próxima feria de muestras
              31BIEMH
            </p>
          </article>
          <div className="w-[90vw] m-auto flex justify-center items-center">
            <img
              src="assets/evento.jpg"
              alt="img"
              className="md:w-[70vw] md:h-[100vh]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
