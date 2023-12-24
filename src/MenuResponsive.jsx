import React from "react";
import gsap from "gsap";

export default function MenuResponsive(props) {
        const {setStateMenuResp} = props
    const {stateMenuResp} = props
   
stateMenuResp?
    gsap.to("#mainMenu",{
        x:"100vw"
    }):
    gsap.to("#mainMenu",{
        x:0
    })

  return (
    <main id="mainMenu" onClick={()=> setStateMenuResp(false)} className="z-50 ml-[-100vw] fixed  w-full h-full flex items-center justify-start bg-red-700/[0.8] backdrop-blur-md">
      <ul className="p-10 gap-10 text-3xl text-white font-bold flex flex-col w-full ">
        <li>
          <p>Inicio</p>
        </li>
        <li>
          <p>YG-1 España </p>
        </li>
        <li>
          <p>Soluciones</p>
        </li>
        <li>
          <p>Equipo</p>
        </li>
        <li>
          <p>Noticias</p>
        </li>
      </ul>
    </main>
  );
}
