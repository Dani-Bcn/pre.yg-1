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
import Nw_catalogos from "./Soluciones/catalogos_pdf/Nw_catalogos";
import Home from "./Home";
import MenuResponsive from "./MenuResponsive";
import { useState } from "react";

import { Route, useLocation, Routes } from "react-router-dom";
import Quienes_somos from "./Home/Quienes_somos";
import Historia from "./Home/Historia";
import Mision from "./Home/Mision";
import Contacto from "./Home/Contacto";
import YG_world from "./Home/YG_wold";
import Equipo from "./Equipo/Equipo";
import Noticias from "./Noticias";
import Roscado_prime_tap from "./Roscado_prime_tap";
import Catalogo_general from "./Catalogo_general";


function App() {
  const openMenuResp = () => {
   
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
        <Route path="fresado/nw_catalogos" element={<Nw_catalogos/>}/>
        <Route path="quienes_somos" element={<Quienes_somos/>}/>
        <Route path="historia" element={<Historia/>}/>
        <Route path="mision" element={<Mision/>}/>
        <Route path="contacto" element={<Contacto/>}/>
        <Route path="yg-1-world" element={<YG_world/>}/>
        <Route path="equipo" element={<Equipo/>}/>
        <Route path="noticias" element={<Noticias/>}/>
        <Route path="noticias/roscado" element={<Roscado_prime_tap/>}/>
        <Route path="noticias/catalogo" element={<Catalogo_general/>}/>
       
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
