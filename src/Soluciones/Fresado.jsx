import React from "react";

export default function Fresado() {
  const arraySolution = [
    { img: "assets/gs.png",text:"Aceros de fácil mecanización Rm<850N/mm²" },
    { img: "assets/vg.png",text:"Aceros tratados y resistentes al calor Rm<850N/mm² ≤Rm ≤1200N/mm²" },
    { img: "assets/va.png" ,text:"Aceros inoxidables"},
    { img: "assets/nw.png" ,text:"Aceros al carbono de baja aleación Rm<700N/mm²"},
    { img: "assets/ti.png" ,text:"Titanio y sus aleaciones"},
    { img: "assets/ni.png" ,text:"Aleaciones con base de Níquel"},
    { img: "assets/ai.png" ,text:"Aluminio y materiales no metálicos"},
    { img: "assets/gg.png" ,text:"Fundición gris"},
    { img: "assets/ms.png" ,text:"Bronce, y aleaciones de cobre"},
  ];
  return (
    <main className="w-screen h-screen mt-24">
      <header>
        <img src="assets/header_soluciones.png" alt="" />
      </header>
      <section>
        <h2 className=" mt-7 px-7 text-4xl font-semibold">Fresado</h2>
        <div className="mx-7 w-12 h-[2px] mb-2 bg-red-700"></div>
        <article className="flex flex-wrap justify-around  w-[90vw]  m-auto rounded-3xl my-10 bg-gray-400 p-2">
          {arraySolution.map((e, i) => {
            return (
              <div key={i} className="w-40 h-62 my-2 text-white text-center hover:bg-gray-800 bg-gray-400  rounded-2xl flex flex-col justify-start items-center">
                <img
                  src={e.img}
                  alt="img"
                  className="w-20 h-20 px m-3  "
                />
                <p className=" w-32 p-3 text-start">
                  {e.text}
                </p>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}
