import React from "react";

export default function Footer() {
  return (
    <main className="w-s[80vw] h-72 text-white bg-black flex justify-center items-center">
      <section className="w-[80vw] h-40 p-5 flex justify-center flex-col items-center">
        <img src="assets/descarga_white.png" alt="img" width={100}
        className="absolute -mt-20 -ml-64 "
        />
        <article className="flex flex-col">
          <p>C/ Nord, 22</p>
          <p>08329 Teiá (Barcelona)</p>
          <a href="tel:938 29 72 75">Tel: 938 29 72 75 </a>
          <a href="mailto:contacto@yg-1.es">contacto@yg-1.es</a>
        </article>
        <article className="flex w-[80vw] pt-5 justify-center gap-5 items-center">
          <img src="social/facebook.png" alt="" className="w-6 h-5" />
          <img src="social/facebook.png" alt="" className="w-6 h-5" />
          <img src="social/facebook.png" alt="" className="w-6 h-5" />
          <img src="social/facebook.png" alt="" className="w-6 h-5" />
          <img src="social/facebook.png" alt="" className="w-6 h-5" />
          <img src="social/facebook.png" alt="" className="w-6 h-5" />
        </article>
        <article className="h-10 py-10 w-full m-auto">
            <a href="" className="flex justify-center items-start">
                <p className="w-52 text-[0.9rem]">Politica de privacidad</p>
                <p className="w-52 text-[0.9rem]">Aviso legal</p>
                <p className="w-52 text-[0.9rem]">Cookies</p>
            </a>
        </article>
      </section>
    </main>
  );
}
