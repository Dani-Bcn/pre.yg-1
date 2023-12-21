import React from "react";
import gsap from "gsap";

export default function MenuResponsive(props) {
        const {setStateMenuResp} = props
    const {stateMenuResp} = props
   
stateMenuResp?
    gsap.to("#main",{
        x:"100vw"
    }):
    gsap.to("#main",{
        x:0
    })



  return (
    <main id="main" onClick={()=> setStateMenuResp(false)} className="ml-[-100vw] fixed w-full h-full flex items-center justify-start bg-indigo-600/[0.7] backdrop-blur-sm">
      <ul className=" p-10 gap-10 text-2xl font-semibold text-orange-300 flex flex-col w-full ">
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
