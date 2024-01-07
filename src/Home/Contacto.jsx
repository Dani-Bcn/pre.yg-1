import React, { useEffect, useState } from "react";

export default function Contacto() {
  return (
    <main className="pt-24   ">
      <section className=" w-[90vw] m-auto flex flex-col ">
        <h2 className="text-3xl text-red-600 py-1">Contacto</h2>
        <p className="text-2xl">Mapa</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.5692593819417!2d2.3360325749132542!3d41.49193718950548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b0d69a768115%3A0x2b765bc50d00826c!2sHerramientas%20Yg-1%20S.l.!5e0!3m2!1ses!2ses!4v1703514343114!5m2!1ses!2ses"
          className=" h-60 my-5 lg:h-72 shadow-2xl"
        />
      </section>
      <section className="flex  flex-col  justify-center items-start py-10">
        <div className="md:py-10 md:px-16  px-5">
          <h2 className="text-3xl ">Contacte con YG1</h2>
          <div className="w-10 h-1 bg-red-600"></div>
        </div>
        <form
          action="https://formsubmit.co/nneodani@gmail.com"
          method="POST"
          className="w-[90vw] mt-10 m-auto flex flex-col justify-center items-center"
        >
          <div className="w-full flex flex-wrap gap-5 items-center ">
            <input type="text" name="username" placeholder="Nombre" required />
            <input
              type="text"
              name="surname"
              id=""
              placeholder="Apellido"
              required
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="E-mail"
              required
            />
            <input
              type="tel"
              name="tel"
              id=""
              placeholder="Teléfono"
              required
            />
            <textarea
              className="w-full h-40 border-2 border-blue-400/[0.5] p-2 "
              type="text"
              name="message"
              id=""
              placeholder="Mensaje"
              required
            />
          </div>
          <div className=" w-[95vw] h-20  mb-10 flex p-5 gap-2 items-center">
            <input className="w-10 h-5" type="checkbox" />
            <p className="w-96 h-10">He leido y acepto la política de privacidad</p>
          </div>

          <button
            type="submit"
            className="border border-blue-500 m-5 py-1 px-5 "
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
