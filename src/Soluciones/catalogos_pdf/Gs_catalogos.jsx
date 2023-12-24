import React from "react";

export default function Gs_catalogos() {
  const arrayGsCatalog = [
    {
      title:"4G-MIL",
      img: "catalogos/4G-MILL.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"X-POWER PRO",
      img: "catalogos/X-POWER-PRO.jpg",
      text: "Para Aceros pre-endurecidos (HRc 20~50) Recubrimiento Y (AlCrN), Carburo ultra nano-grano.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"K-2",
      img: "catalogos/K-2.jpg",
      text: "Fresas en metal duro integral recubiertas TiAlN para uso general.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"i-Xmill",
      img: "catalogos/i-Xmill.jpg",
      text: "Programa de copiado 3D para molde y matriz.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"JET-POWER",
      img: "catalogos/JET-POWER.jpg",
      text: "Fresas para el mecanizado de aceros inoxidables y materiales exóticos así como aleaciones con base de Níquel y titanios.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"i-SMART",
      img: "catalogos/i-SMART.jpg",
      text: "Programa de fresado modular en rosca métrica.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"ONLY ONE",
      img: "catalogos/ONLY-ONE.jpg",
      text: "FRESAS HSS-PM PARA EL MECANIZADO EN CONDICIONES INESTABLES.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"TANK-POWER",
      img: "catalogos/TANK-POWER.jpg",
      text: "Fresas HSS-PM de alta tenacidad para el mecanizado de aceros inoxidables, aceros al carbono y aceros aleados.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"HSSCo END MILLS",
      img: "catalogos/HSSCo-END-MILLS.jpg",
      text: "Fresas HSSCo para uso general.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"MILLING CUTTERS",
      img: "catalogos/MILLING-CUTTERS.jpg",
      text: "Fresas HSSCo al 5% y al 8% para ranurar en T, Woodruff, de disco, de vaso, angulares (cola de Milano).",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"ROTARY BURS",
      img: "catalogos/ROTARY-BURS.jpg",
      text: "Programa de fresas rotativas de uso general.",
      link: "pdf/ye-4g20-4g.pdf",
    },
    {
      title:"VHM",
      img: "catalogos/VHM.jpg",
      text: "Fresas de biselar en metal duro de 4 labios y recubrimiento TiCN.",
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
          <a href="pdf/ye-4g20-4g.pdf" target="_blank"
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
