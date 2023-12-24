import "./App.css";
import Tienda from "./Tienda";
import Navbar from "./Navbar";
import Fresado from "./Soluciones/Fresado";
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
      </Routes>
    </main>
  );
}

export default App;
