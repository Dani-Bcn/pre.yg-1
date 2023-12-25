import React from "react";

export default function Historia() {
  const arrayHistory = [
    [
      {
        title: "1981 ~  1989",
        text: "Fundación de la empresa",
      },
      { text: "Finalización de la planta Nº 1 en Incheon" },
      {
        text: "Se lanzó la exportación a EE.UU. (fresas de espiga)",
      },
      { text: "Apertura de oficina en Chicago, EE.UU." },
      { text: "Incorporación a Yangji-1 Tools Co., Ltd" },
      {
        text: "Seleccionada como la empresa en busca de productos de clase mundial (KOTRA)",
      },
    ],
    [
      {
        title: "1990 ~ 1996",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Recibió permisos para las marcas KS (perforadora)" },
      { text: "Recibió permisos para las marcas KS (perforadora)" },
      { text: "Finalización de la planta de Gwangju" },
      { text: "Se fundó la sucursal del Reino Unido (Europa Tool)" },
    ],
    [
      {
        title: "1997 ~ 1999",
        text: "Recibió la Certificación de la Marca EM del gobierno",
      },
      { text: "Se fundó la sucursal de Alemania 2000.12 se convirtió en una empresa" },
      { text: "Registro en el mercado de KOSDAQ" },
      { text: "Seleccionada como una de las perspectivas de exportación pequeña/mediana (SBC)" },
      { text: "Se fundó el Centro de Investigación y Desarrollo de Herramientas" },
      { text: "Clasificada entre las 50 empresas líderes con una competencia sobresaliente en calidad de producto" },
      { text: "Cambio de nombre corporativo a YG-1" },
      { text: "Galardonada como Empresa de Primer Grado en Tecnología de Precisión (Laboratorio de Pruebas de Corea)" },
      { text: "Awarded with ISO 9001 certification (TÜV CERT)" },
    ],
    [
      {
        title: "2000 ~ 2002",
        text: "Galardonada como mejor empresa competitiva de tecnología (Administración de empresas pequeñas y medianas)",
      },
      { text: "Seleccionada como la empresa con una competencia sobresalienteen calidad (Ministerio de Comercio, Industria y Energía)" },
      { text: "Seleccionada como fabricante/empresa sobresaliente de Corea (KMA)a" },
      { text: "Obtuvo la certificación ISO 14001 (TÜV CERT)" },
      { text: "Fundación de la sucursal de China (Qingdao New Century Tool)" },
      { text: "Seleccionada como Empresa INNO-BIZ (Administración de empresas pequeñas y medianas)Seleccionada como Empresa INNO-BIZ (Administración de empresas pequeñas y medianas)" },
      { text: "Fundación de la sucursal de Francia (Corai P&L SAS)" },
      { text: "Clasificada entre las 50 empresas líderes con una competencia sobresaliente en la calidad del producto (Ministerio de Comercio, Industria y Energía)" },
      { text: "Fundación de la sucursal en la India  (YG-1 Industries India Pvt. Ltd)" },
    ],
    [
      {
        title: "2004 ~ 2005",
        text: "Fundación del Centro de I+D de Songdo",
      },
      { text: "Construcción de la nueva sede central" },
      { text: "Obtuvo la certificación ISO 9001/14001 (DAS CERT)" },
      { text: "Fundación del Centro de I+D de Songdo" },     
    ],
    [
      {
        title: "2006 ~ 2008",
        text: "Global Branches Established & Global Investment",
      },
      { text: "Adquisición de una empresa estadounidense (Regal Cutting Tools)" },
      { text: "Fundación de la sucursal de Brasil (YG-1 Comercio De Ferramentas Para Usinagem Tda)" },
      { text: "Fundación de la sucursal de Japón (YG-1 Japan)" },
      { text: "Fundación de la sucursal de India(YG Cutting Tool Corp)" },
      { text: "Adquisición de empresas canadienses (International Minicut INC, National Tool Hardening INC)" },
    ],
    [
      {
        title: "2009",
        text: "Seleccionada como una Empresa Campeona Oculta",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Seleccionada como una Empresa Campeona Oculta (KRX)" },
      ],
    [
      {
        title: "2011",
        text: "Finalización de la planta de Chungju",
      },      
      { text: "Finalización de la planta de Hyosung en Incheon Fundación de la sucursal de Japón (New Sankyo Tool)" },
    ],
    [
      {
        title: "2012",
        text: "Seleccionada como una de las 300 empresas de clase mundial (Ministerio de Economía del Conocimiento)",
      },
      { text: "Finalización de la Planta de Cheongcheon en Incheon" },
  
    ],
    [
      {
        title: "2013",
        text: "Finalización de la tercer planta",
      },
      { text: "Fundación del Centro de Logística Global" },
      { text: "Fundación de la sucursal de Vietnam (YG-1 Vietnam)" },
    ],
    [
      {
        title: "2014 - 2015",
        text: "Finalización de la tercer planta",
      },
      { text: "Fundación de la sucursal de EE.UU. (YG-1 America)" },
      { text: "Finalización de la planta Nº 3 en Incheon" },
    ],
    [
      {
        title: "2016",
        text: "Finalización de la Planta de Desarrollo de Piezas en Chungju",
      },
      { text: "Finalización de la Planta de Desarrollo de Piezas en Chungju" },
      { text: "Fundación de la sucursal de Tailandia (YG-1 Precision Co., Ltd.)Fundación de la sucursal de Rusia (YG-1 RUS. LLC) "},
      { text: "Finalización del Mega Proyecto en India (Fundación de la nueva planta de India)" },
    ],
    [
      {
        title: "2017 ~ 2018",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
    ],
    [
      {
        title: "2016",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2017 -2018",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2017 -2018",
        text: "Fundación de la sucursal en E.A.U Fundación del Centro tecnologico en Alemania",
      },
      { text: "Fundación de la sucursal en E.A.U. (YG-1 Middle East) (Producción de herramientas MINICUT)" },
      { text: "Fundación de la filial en Sud Africa (YG-1 S. AFRICA)" },
      { text: "Fundacion de la filial en España (Herramientas YG-1 SL)" },
      { text: "Fundación del Centro tecnologico en Alemania (YG-1 Technology Center)" },
    ],
    [
      {
        title: "2018",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
    ],
    [
      {
        title: "2019",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2019",
        date: "1991.12",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
    ],
  ];

  return (
    <main className="mt-24">
      <section className="p-5">
        {arrayHistory.map((e, i) => {
          return (
            <article key={i}>
              <h2 className=" text-red-600 font-bold text-3xl">
                {arrayHistory[i][0].title}
              </h2>
              {arrayHistory[i].length > 1 ? (
                <p>{arrayHistory[i][1].text}</p>
              ) : null}
              {arrayHistory[i].length > 2 ? (
                <p>{arrayHistory[i][2].text}</p>
              ) : null}
              {arrayHistory[i].length > 3 ? (
                <p>{arrayHistory[i][3].text}</p>
              ) : null}
              {arrayHistory[i].length > 4 ? (
                <p>{arrayHistory[i][4].text}</p>
              ) : null}
              {arrayHistory[i].length > 5 ? (
                <p>{arrayHistory[i][5].text}</p>
              ) : null}
              {arrayHistory[i].length > 6 ? (
                <p>{arrayHistory[i][6].text}</p>
              ) : null}
              {arrayHistory[i].length > 7 ? (
                <p>{arrayHistory[i][7].text}</p>
              ) : null}
              {arrayHistory[i].length > 8 ? (
                <p>{arrayHistory[i][8].text}</p>
              ) : null}
              {arrayHistory[i].length > 9 ? (
                <p>{arrayHistory[i][9].text}</p>
              ) : null}
            </article>
          );
        })}
      </section>
    </main>
  );
}
