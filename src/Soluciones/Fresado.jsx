import React from "react";
import { useNavigate } from "react-router-dom";

export default function Fresado() {
  window.scrollTo(0, 0)
  window.scrollTo(0, 0)
  const navigate = useNavigate()
  const arrayMilling = [
    { img: "assets/gs.png", text: "Aceros de fácil mecanización Rm<850N/mm²",link:"gs_catalogos" },
    {
      img: "assets/vg.png",
      text: "Aceros tratados y resistentes al calor Rm<850N/mm² ≤Rm ≤1200N/mm²",
      link:"gs_catalogos"
    },
    { img: "assets/va.png", text: "Aceros inoxidables",link:"va_catalogos" },
    {
      img: "assets/nw.png",
      text: "Aceros al carbono de baja aleación Rm<700N/mm²",link:"nw_catalogos"
    },
    { img: "assets/ti.png", text: "Titanio y sus aleaciones",link:"va_catalogos" },
    { img: "assets/ni.png", text: "Aleaciones con base de Níquel",link:"Nw_catalogos" },
    { img: "assets/ai.png", text: "Aluminio y materiales no metálicos",link:"va_catalogos" },
    { img: "assets/gg.png", text: "Fundición gris",link:"va_catalogos" },
    { img: "assets/ms.png", text: "Bronce, y aleaciones de cobre",link:"va_catalogos" },
  ];
 
  return (
    <main className="  mt-24">
      <header>
        <img src="assets/header_soluciones.png" alt="" />
      </header>
      <section>
        <h2 className=" mt-7 px-7 text-4xl font-semibold">Fresado</h2>
        <div className="mx-7 w-12 h-[2px] mb-2 bg-red-700"></div>
        <article className="flex flex-col  w-[90vw]  m-auto rounded-3xl my-10  p-2">
          {arrayMilling.map((e, i) => {
            return (
              <div
                key={i}
                className="w-full h-40  my-2 text-white  hover:bg-gray-800 bg-gray-400 rounded-2xl flex "
              >
                <img src={e.img} alt="img" className="w-20 h-20 px m-3  " />
                <div className="flex flex-col w-full h-full ">
                  <p className=" w-62 p-3 text-start">{e.text}</p>
                  <div className="flex py-4 h-40  items-end gap-5 w-full">
                    <button 
                    onClick={()=> navigate(e.link)} 
                    className="w-20 h-5 bg-red-500 text-center p-5 rounded-md flex justify-center items-center">
                     
                        <p>Catálogos</p>
                     
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
