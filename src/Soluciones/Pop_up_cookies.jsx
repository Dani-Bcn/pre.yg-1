import React, { useState } from "react";

export default function Pop_up_cookies() {
  const [closeBanner, setCloseBanner] = useState(true);

  const Banner = () => {
    return (
      <main className="flex flex-col items-center z-[200] fixed w-screen h-[60vh] text-white mt-52 bg-slate-700/[0.5] backdrop-blur-md p-10 text-2xl ">
        <h2 className="w-full md:w-[60vw] py-5">
          Utilizamos cookies propias y de terceros de análisis de uso y medición
          para mejorar la experiencia de uso y contenidos de nuestra web. Al
          continuar con la navegación entendemos que aceptas nuestra política de
          cookies.
        </h2>
        <div className="w-ful flex justify-center items-center">
          <button className="py-3 px-5 bg-slate-500 mx-5 rounded-md hover:text-slate-300 hover:bg-red-600 transition-all duration-500" onClick={() => setCloseBanner(false)}>Aceptar</button>
          <button  className="py-3 px-5  bg-slate-500  m-5 rounded-md hover:text-slate-300 hover:bg-red-600 transition-all duration-500" onClick={() => setCloseBanner(false)}>Rechazar</button>
        </div>
      </main>
    );
  };
  return closeBanner ? <Banner /> : null;
}
