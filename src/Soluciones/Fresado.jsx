import React from "react";

export default function Fresado() {
  const arraySolution = [
    { img: "assets/gs.png", text: "Aceros de fácil mecanización Rm<850N/mm²" },
    {
      img: "assets/vg.png",
      text: "Aceros tratados y resistentes al calor Rm<850N/mm² ≤Rm ≤1200N/mm²",
    },
    { img: "assets/va.png", text: "Aceros inoxidables" },
    {
      img: "assets/nw.png",
      text: "Aceros al carbono de baja aleación Rm<700N/mm²",
    },
    { img: "assets/ti.png", text: "Titanio y sus aleaciones" },
    { img: "assets/ni.png", text: "Aleaciones con base de Níquel" },
    { img: "assets/ai.png", text: "Aluminio y materiales no metálicos" },
    { img: "assets/gg.png", text: "Fundición gris" },
    { img: "assets/ms.png", text: "Bronce, y aleaciones de cobre" },
  ];
  return (
    <main className="w-screen  mt-24">
      <header>
        <img src="assets/header_soluciones.png" alt="" />
      </header>
      <section>
        <h2 className=" mt-7 px-7 text-4xl font-semibold">Fresado</h2>
        <div className="mx-7 w-12 h-[2px] mb-2 bg-red-700"></div>
        <article className="flex flex-col  w-[90vw]  m-auto rounded-3xl my-10  p-2">
          {arraySolution.map((e, i) => {
            return (
              <div
                key={i}
                className="w-full h-40  my-2 text-white  hover:bg-gray-800 bg-gray-500  rounded-2xl flex "
              >
                <img src={e.img} alt="img" className="w-20 h-20 px m-3  " />
                <div className="flex flex-col w-full h-full ">
                  <p className=" w-62 p-3 text-start">{e.text}</p>
                  <div className="flex py-4 h-40  items-end gap-5 w-full">
                    <button className="w-20 h-5 bg-red-500 text-center p-5 rounded-md flex justify-center items-center">
                      Catálogo
                    </button>

                    <button className="w-20 h-5 bg-red-500 text-center p-5 rounded-md flex justify-center items-center">
                      <a
                        target="_blank"
                        href="https://www.tiendayg1.es/tienda/seccion/0B"
                      >
                        Tienda
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}
