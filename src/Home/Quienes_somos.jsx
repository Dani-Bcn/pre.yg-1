import React from "react";

export default function Quienes_somos() {
  window.scrollTo(0, 0)
  return (
    <main className="w-screen flex flex-col mt-24">
      <h1 className="p-5 text-3xl font-bold">Quienes somos</h1>
      <section className="flex flex-wrap  ">
        <article className="w-96   bg-slate-200 m-5 p-4">
          <h2 className="text-2xl font-semibold py-5">Ajustado control de calidad</h2>
          <h3>Eficiencia que consigue la confianza del cliente</h3>
          <p>
            YG-1 mantiene un ajustado nivel de inspección de calidad. Las
            tolerancias de nuestras herramientas son mas precisas que las normas
            federales de América, puesto que YG-1 empezó como una empresa que
            exportaba el 100% de sus ventas a América.
          </p>
        </article>
        <article className="w-96  bg-slate-200 m-5 p-4">
          <h2 className="text-2xl font-semibold py-5">Gestión de productos</h2>
          <h3>Efficiency Building Customer Trust</h3>
          <p>
            YG-1 ha obtenido la confianza continua de los clientes al obtener un
            sistema de logística eficiente que permite reducir los plazos de
            entrega.
          </p>
        </article>
        <article className="w-96  bg-slate-200 m-5 p-4">
          <h2 className="text-2xl font-semibold py-5">RR.HH. e I+D</h2>
          <h3>Inversiones ilimitadas en Recursos Humanos e I+D</h3>
          <p>
            YG-1 preserva la flexibilidad y la satisfacción del cliente al
            invertir constantemente en I+D y recursos humanos.
          </p>
        </article>
      </section>
      <p className="w-96 m-auto p-10 font-bold ">
        YG-1 es una de las principales empresas del mundo en la fabricación y
        venta de fresas cilíndricas y también la más grande de la República de
        Corea Basándose en sus 40 años de conocimiento, YG-1 está expandiendo la
        diversificación de artículos.
      </p>
      <article className="w-96">
        <div className="bg-slate-200 m-5 p-4">
          <h2 className="text-3xl font-semibold py-5">
            Los nuevos productos de YG-1 siempre empiezan desde cero
          </h2>
          <p>
            El desarrollo de un producto empieza desde "cero" para YG-1, ya que
            YG-1 siempre se ha esforzado por desarrollar un producto único que
            nunca antes se haya visto en el mercado. Al buscar desarrollo
            técnico mas allá del sentido común, YG-1 puede desarrollar artículos
            fascinantes que maravillen a clientes de todas partes del mundo.
            Desde la elección de la mejor materia prima hasta proceder con un
            tratamiento térmico exacto y también pasando por las ajustadas
            inspecciones de calidad de YG-1, se desarrollan nuevos productos con
            un corte extraordinario y un acabado excelente. Los institutos
            técnicos de YG-1 se esfuerzan todos los días por liderar la
            industria de las herramientas de corte con predominancia de la
            tecnología
          </p>
        </div>
      </article>
    </main>
  );
}
