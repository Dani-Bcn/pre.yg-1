import React from "react";

export default function Va_catalogos() {
  window.scrollTo(0, 0)
  const arrayGsCatalog = [
    {
      title: "TITANOX POWER",
      img: "catalogos/TITANOX-POWER.jpg",
      text: "Mecanizado de materiales exóticos a altas velocidades: Titanio, Inconel y Aceros Inoxidables.",
      link: "https://www.yg1.kr/_include/preview.asp?uploadFile=2023082413514498.pdf&CatalogName=%5BYE%2DTP23%5D+TitaNox+Power+Metric%5Fspread%2Epdf",
    },
    {
      title: "i-Xmill",
      img: "catalogos/i-Xmill.jpg",
      text: "Programa de copiado 3D para molde y matriz.",
      link: "https://www.yg1.kr/_include/preview.asp?uploadFile=2019111116463019.pdf&CatalogName=%5BYE%5Di%5FXmill%2Epdf",
    },
    {
      title: "JET-POWER",
      img: "catalogos/JET-POWER.jpg",
      text: "Fresas para el mecanizado de aceros inoxidables y materiales exóticos así como aleaciones con base de Níquel y titanios.",
      link: "pdf/jetpower.pdf",
    },
    {
      title: "ONLY ONE",
      img: "catalogos/ONLY-ONE.jpg",
      text: "Fresas HSS-PM para el mecanizado en condiciones inestables.",
      link: "https://www.yg1.kr/_include/preview.asp?uploadFile=2018091216565759.pdf&CatalogName=%5BYE%2DOP16%5DOnlyOne%5F20180711%5F%ED%8E%BC%EC%B9%A8%2Epdf",
    },
    {
      title: "TANK-POWER",
      img: "catalogos/TANK-POWER.jpg",
      text: "Fresas HSS-PM de alta tenacidad para el mecanizado de aceros inoxidables, aceros al carbono y aceros aleados.",
      link: "pdf/tankpower.pdf",
    },
  ];

  return (
    <main className="w-[90vw] mt-24 m-auto ">
      <h1 className="text-2xl py-5 ">
        Aceros de fácil mecanización Rm &lt; 850N/mm²
      </h1>

      {arrayGsCatalog.map((e, i) => {
        return (
          <a href={e.link} target="_blank">
            <h2 className="text-2xl my-2">{e.title}</h2>
            <div key={i} className="w-full flex">
              <img src={e.img} className="w-32 h-32 mb-7"></img>
              <p className="mx-5">{e.text}</p>
            </div>
          </a>
        );
      })}
    </main>
  );
}
