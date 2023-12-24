import React from "react";

export default function Footer() {
  return (
    <main className="w-screen h-52 text-white bg-black flex justify-center items-center">
      <section className="w-[90vw] h-40 p-5  bg-red-700 flex justify-center items-start">
        <img src="assets/descarga_white.png" alt="img" width={100} />
        <article className="flex flex-col">
            <p>C/ Nord, 22</p>
            <p>08329 Teiá (Barcelona)</p>
          <a href="tel:938 29 72 75">Tel: 938 29 72 75 </a>
          <a href="mailto:contacto@yg-1.es">contacto@yg-1.es</a>
        </article>
      </section>
    </main>
  );
}
