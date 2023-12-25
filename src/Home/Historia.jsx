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
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "1997 ~ 1999",
        text: "Fundación de la empresa",
      },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2000 ~ 2002",
        text: "Fundación de la empresa",
      },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2004 ~ 2005",
        text: "Fundación de la empresa",
      },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2004 ~ 2005",
        text: "Fundación de la empresa",
      },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "1990 ~ 1996",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2009",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
    ],
    [
      {
        title: "2011",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2012",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2012",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Fundación de la empresa" },
    ],
    [
      {
        title: "2013",
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
    ],
    [
      {
        title: "2014 - 2015",
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
        text: "Finalización de la planta Nº 2 en Incheon",
      },
      { text: "Se fundó la sucursal de EE.UU. (PCT)" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
      { text: "Fundación de la empresa" },
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
