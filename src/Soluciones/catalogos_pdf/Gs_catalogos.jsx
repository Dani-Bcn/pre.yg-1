import React from "react";

export default function Gs_catalogos() {
  const arrayGsCatalog = [
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
  ];

  return (
    <main className="w-[90vw] mt-24 m-auto ">
      <h1 className="text-2xl py-5 ">
        Aceros de fácil mecanización Rm &lt; 850N/mm²
      </h1>

      {arrayGsCatalog.map((e, i) => {
        return (
          <a href="/public/pdf/ye-4g20-4g.pdf" target="_blank">
            <div key={i} className="w-full flex justify-center items-center">
              <img src={e.img} className="w-32 h-32 my-5"></img>
              <p className="m-5">{e.text}</p>
            </div>
          </a>
        );
      })}
    </main>
  );
}
