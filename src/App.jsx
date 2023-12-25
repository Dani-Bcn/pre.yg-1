import "./App.css";
import Tienda from "./Tienda";
import Navbar from "./Navbar";
import Fresado from "./Soluciones/Fresado";
import Footer from "./Footer";
import Taladrado from "./Soluciones/Taladrado";
import Roscado from "./Soluciones/Roscado";
import Fijacion from "./Soluciones/Fijacion"
import Sistemas from "./Soluciones/Sistemas"
import Gs_catalogos from "./Soluciones/catalogos_pdf/Gs_catalogos";
import Va_catalogos from "./Soluciones/catalogos_pdf/Va_catalogos";
import Home from "./Home";
import MenuResponsive from "./MenuResponsive";
import { useState } from "react";

import { Route, useLocation, Routes } from "react-router-dom";

function App() {
  const openMenuResp = () => {
    console.log(stateMenuResp);
  };
  const [stateMenuResp, setStateMenuResp] = useState(false);
  const location = useLocation();
  return (
    <main className="flex flex-col">
        <MenuResponsive
        stateMenuResp={stateMenuResp}
        setStateMenuResp={setStateMenuResp}
      />
      <Tienda />
      <Navbar
        openMenuResp={openMenuResp}
        stateMenuResp={stateMenuResp}
        setStateMenuResp={setStateMenuResp}
      />
    
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="fresado" element={<Fresado />} />
        <Route path="taladrado" element={<Taladrado />} />
        <Route path="roscado" element={<Roscado />} />
        <Route path="fijacion" element={<Fijacion />} />
        <Route path="sistemas" element={<Sistemas />} />
        <Route path="fresado/gs_catalogos" element={<Gs_catalogos/>}/>
        <Route path="fresado/va_catalogos" element={<Va_catalogos/>}/>
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
