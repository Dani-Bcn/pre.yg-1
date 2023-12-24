import "./App.css";
import Tienda from "./Tienda";
import Navbar from "./Navbar";
import MenuResponsive from "./MenuResponsive";
import Carousel from "./Carousel";
import Fresado from "./Soluciones/Fresado";
import { useState } from "react";
import Eventos from "./Eventos";
import Productos from "./Productos";
import Soluciones from "./Soluciones";
import Footer from "./Footer";

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
      text: "Sistemas de herramientas ",
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
      <Soluciones />
      <Eventos />
      <Productos />
      <article className="text-2xl font-semibold text-white flex justify-center items-center w-[90vw] m-auto my-10 h-12 bg-red-600">
        <p>Noticias +</p>
      </article>
      <Footer/>
    </main>
  );
}

export default App;
