import React from "react";

export default function Contacto() {
  return (
    <main className="pt-24  md:h-screen ">
      <section className=" h-[60vh] px-10">
        <h2 className="text-3xl text-red-600 py-5">Contacto</h2>
        <p className="text-2xl">Mapa</p>        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.5692593819417!2d2.3360325749132542!3d41.49193718950548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b0d69a768115%3A0x2b765bc50d00826c!2sHerramientas%20Yg-1%20S.l.!5e0!3m2!1ses!2ses!4v1703514343114!5m2!1ses!2ses"
        className=" h-60 my-10 lg:h-72"
        />
      </section>
    </main>
  );
}
