import React from "react";

export default function Equipo() {

  const arrayEquipo = [
    {
      img: "/assets/jorge.png",
      name: "Jorge Bonastre Quintana",
      text: "Director general",
      textLink: "ventas@yg-1.es",
      link: "mailto:ventas@yg-1.es",
    },
    {
      img: "/assets/ramon.png",
      name: "Ramon García Fernández",
      text: "Director financiero",
      textLink: "ramongarcia@yg-1.es",
      link: "mailto:ramongarcia@yg-1.es",
    },
    {
      img: "/assets/javier.png",
      name: "Javier Fernández Garcia",
      text: "Director comercial",
      textLink: "javierfernandez@yg-1.es",
      link: "mailto:javierfernandez@yg-1.es",
    },
    {
      img: "/assets/david.png",
      name: "David Leyva Mena",
      text: "Director Técnico",
      textLink: "davidleyva@herramientasyg-1.es",
      link: "mailto:davidleyva@herramientasyg-1.es ",
    },
    {
      img: "/assets/victor.png",
      name: "Victor Murcia Ferrer",
      text: "Responsable área logística",
      textLink: "almacen@herramientasyg-1.es",
      link: "mailto:almacen@herramientasyg-1.es",
    },
    {
      img: "/assets/xavi.png",
      name: "Xabier Ballester González",
      text: "Administración",
      textLink: "xavierballester@yg-1.es",
      link: "mailto:xavierballester@yg-1.es",
    },
  ];

  return (
    <main className="mt-24 p-5 flex flex-col items-center">
      <h2 className="text-4xl my-5 font-semibold">Nuestro equipo</h2>
      <div className="-mt-5 -ml-48 w-16 h-1 bg-red-600"></div>
      <p className="w-[90vw] md:w-[60vw] py-10">
        Un equipo innovador, con años de experiencia y sentido común que hace
        del dinamismo su día a día. La pasión por el trabajo bien hecho nos
        caracteriza. En Herramientas Yg-1 encontrará a personas que se implican
        en su labor dando lo mejor de cada uno con un único objetivo: Ser la
        solución global número 1 en el mundo de la herramienta de corte.
      </p>

      {arrayEquipo.map((e, i) => {
        return (
          <article key={i} className="my-10">
            <img src={e.img} alt="img" width={350}  className="border-[10px]" />
            <div className=" text-start w-full flex flex-col items-center">
              <div>
                <h2 className="text-red-500  text-[1.8rem] font-bold ">
                  {e.name}
                </h2>
                <p className="text-[1.4rem]">{e.text}</p>
                <a href={e.link}>
                  <p className="text-[1.4rem] underline">{e.textLink}</p>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
}
