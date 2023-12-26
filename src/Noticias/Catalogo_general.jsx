import React from "react";

export default function Catalogo_general() {
  return (
    <main className="mt-24 ">
      <section className="p-5">
        <h2 className="text-3xl font-semibold">Catálogo general 2022 - 2023</h2>
        <h3 className="my-5 font-semibold text-2xl">
          YG-1 Lanza el catálogo general 2022 - 2023 actualizado para el mercado
          Europeo.{" "}
        </h3>
        <img
          src="/assets/catalog_book_samp_210929.png"
          alt="img"
          width={900}
        />
        <article className="my-5">
          <p>
            Las series HSS-PM PRIME TAP y DREAM DRILL PRO se agregaron al
            catálogo general:
          </p><br />
          <p>            
            PRIME TAP con el recubrimiento X es la respuesta de YG-1 para el
            roscado de alto rendimiento en materiales dúctiles.
          </p><br />
          <p>
            DREAM DRILL PRO con el recubrimiento Z de YG-1 muestra un
            rendimiento mejorado con mayor velocidad de corte.
          </p><br />
          <p>
            Esta es la primera edición del catálogo 2022-2023 con algunas
            actualizaciones en sus líneas de productos.
          </p>
          <br />
          <a href="https://www.yg1.kr/support/catalog.asp" target="_blank">
            <p className="underline">https://www.yg1.kr/support/catalog.asp</p>
          </a>
        </article>
      </section>
    </main>
  );
}
