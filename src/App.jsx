import "./App.css";
import Tienda from "./Tienda";
import Navbar from "./Navbar";
import MenuResponsive from "./MenuResponsive";
import Carousel from "./Carousel";
import Fresado from "./Soluciones/Fresado";
import { useState } from "react";
import Eventos from "./Eventos";

function App() {
  const [stateMenuResp, setStateMenuResp] = useState(false);

  const openMenuResp = () => {
    console.log(stateMenuResp);
  };
  const arraySoluciones = [
    { url: "assets/fresado.jpg", text: "Fresado" },
    { url: "assets/taladrado.jpg", text: "Taladrado" },
    { url: "assets/roscado.jpg", text: "Roscado" },
    { url: "assets/fijacion_mecanica.jpg", text: "Fijación mecánica" },
    {
      url: "assets/sistema_herramientas.jpg",
      text: "Sistemas de herramientas",
    },
    
  ];

  return (
    <main className="flex flex-col">
      <Tienda />
      <Navbar
        openMenuResp={openMenuResp}
        stateMenuResp={stateMenuResp}
        setStateMenuResp={setStateMenuResp}
      />
      <Carousel />
      <MenuResponsive
        stateMenuResp={stateMenuResp}
        setStateMenuResp={setStateMenuResp}
      />

      <section className="m-auto mt-14 w-full h-full flex flex-col">
        <h2 className=" py-2 px-7 text-3xl">Soluciones</h2>
        <div className="mx-7 w-12 h-[2px]  -mt-2 mb-2 bg-red-700"></div>
        <article className="w-full flex flex-wrap  justify-center">
          {arraySoluciones.map((e, i) => {
            return (
              <div key={i} className="h-72 flex flex-col justify-start  ">
                <img key={i} className="w-44  p-2 h-52" src={e.url} alt="img" />
                <p className="ml-2 w-36 font-bold text-2xl">{e.text}</p>
              </div>
            );
          })}
        </article>
      </section>
      <section className="py-14 bg-gradient-to-b from-gray-200 to-slate-50 flex mt-20 w-screen h-62 overflow-auto">
        <article className="flex flex-col justify-center items-center">
          <img
            src="assets/matrices_moldes.png"
            alt="img"
            width={2000}
            className="w-screen"
          />
          <p className="w-screen pl-20 text-3xl">
            Industria
            <br /> <span>Matrices y molde</span>
          </p>
        </article>
        <article className="flex flex-col">
          <img src="assets/automocion.png" alt="img" />
          <p className="w-screen pl-24 text-3xl">
            Industria <br />
            <span>Automoción</span>
          </p>
        </article>
        <article className="flex flex-col">
          <img src="assets/aeroespacial.png" alt="img" className="w-screen " />
          <p className="w-screen pl-24 text-3xl">
            Industria <span>Aeroespacial</span>
          </p>
        </article>
      </section>
      <Eventos/>    
    </main>
  );
}

export default App;
