import React from "react";

export default function Tienda() {
  return (
    <a href="https://www.tiendayg1.es/">
      <main className="z-50 md:hidden fixed w-full h-10 flex justify-between items-center bg-red-600 ">
        <h3 className="text-white text-[1.1rem] mx-3">Tienda virtual</h3>
        <section className="flex gap-4 h-full items-center">
          <div className="w-[0.1px] h-7 bg-white "></div>
          <img src="/assets/carrito.png" alt="" className="mr-5 w-6 h-6" />
        </section>
      </main>
    </a>
  );
}
