import React from "react";

export default function Gs_catalogos() {
  const arrayGsCatalog = [
    {
      title:"4G-MIL",
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "https://ptsc.co.th/catalogfile/yg1/3/YG-1_%5BYE-4G%5D4GMills_Endmill.pdf",
    },
    {
      title:"X-POWER PRO",
      img: "catalogos/X-POWER-PRO.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "https://www.yg1.kr/_include/preview.asp?uploadFile=2019031316035381.pdf&CatalogName=%5BYE%2DXP19%5DX%2Dpower+pro%5F%ED%8E%BC%EC%B9%A8%EB%A9%B4%5F190312%2Epdf",
    },
    {
      title:"K-2",
      img: "catalogos/K-2.jpg",
      text: "Fresas en metal duro integral recubiertas TiAlN para uso general.",
      link: "https://www.yg1.kr/_include/preview.asp?uploadFile=2020031011101419.PDF&CatalogName=%5BYE%5DK%2D2%5FCARBIDE%5FEND%5FMIILS%2EPDF",
    },
    {
      title:"i-Xmill",
      img: "catalogos/i-Xmill.jpg",
      text: "Programa de copiado 3D para molde y matriz.",
      link: "https://www.yg1.kr/_include/preview.asp?uploadFile=2019111116463019.pdf&CatalogName=%5BYE%5Di%5FXmill%2Epdf",
    },
    {
      title:"JET-POWER",
      img: "catalogos/JET-POWER.jpg",
      text: "Fresas para el mecanizado de aceros inoxidables y materiales exóticos así como aleaciones con base de Níquel y titanios.",
      link: "pdf/jetpower.pdf",
    },
    {
      title:"i-SMART",
      img: "catalogos/i-SMART.jpg",
      text: "Programa de fresado modular en rosca métrica.",
      link: "https://www.yg1.kr/_include/preview.asp?uploadFile=2020010811440797.pdf&CatalogName=%5BYE%5DI%5FSMART%5FEND%5FMILLS%2Epdf",
    },
    {
      title:"ONLY ONE",
      img: "catalogos/ONLY-ONE.jpg",
      text: "FRESAS HSS-PM PARA EL MECANIZADO EN CONDICIONES INESTABLES.",
      link: "https://www.yg1.kr/_include/preview.asp?uploadFile=2018091216565759.pdf&CatalogName=%5BYE%2DOP16%5DOnlyOne%5F20180711%5F%ED%8E%BC%EC%B9%A8%2Epdf",
    },
    {
      title:"TANK-POWER",
      img: "catalogos/TANK-POWER.jpg",
      text: "Fresas HSS-PM de alta tenacidad para el mecanizado de aceros inoxidables, aceros al carbono y aceros aleados.",
      link: "pdf/tankpower.pdf",
    },
    {
      title:"HSSCo END MILLS",
      img: "catalogos/HSSCo-END-MILLS.jpg",
      text: "Fresas HSSCo para uso general.",
      link: "pdf/hss-end-mills.pdf",
    },
    {
      title:"MILLING CUTTERS",
      img: "catalogos/MILLING-CUTTERS.jpg",
      text: "Fresas HSSCo al 5% y al 8% para ranurar en T, Woodruff, de disco, de vaso, angulares (cola de Milano).",
      link: "pdf/milling-cutters.pdf",
    },
    {
      title:"ROTARY BURS",
      img: "catalogos/ROTARY-BURS.jpg",
      text: "Programa de fresas rotativas de uso general.",
      link: "pdf/rotary-burrs.pdf",
    },
    {
      title:"VHM",
      img: "catalogos/VHM.jpg",
      text: "Fresas de biselar en metal duro de 4 labios y recubrimiento TiCN.",
      link: "pdf/vhm.pdf",
    },
  ];

  return (
    <main className="w-[90vw] mt-24 m-auto ">
      <h1 className="text-2xl py-5 ">
        Aceros de fácil mecanización Rm &lt; 850N/mm²
      </h1>

      {arrayGsCatalog.map((e, i) => {
        return (
          <a href={e.link} target="_blank"
          >
          

          <h2 className="text-2xl my-2" >{e.title}</h2>
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
