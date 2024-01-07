import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { stateMenuResp } = props;
  const { setStateMenuResp } = props;
  const [stateYg, setStateYg] = useState(false);
  const [stateSoluciones, setStateSoluciones] = useState(false);
  const navigate = useNavigate();
console.log(stateMenuResp)

  useEffect(() => {
    if (stateMenuResp) {
      gsap.to("#stick", {
        rotation: 45,
        backgroundColor: "white",
      });
      gsap.to("#cnt", {
        height: 1,
      });

      gsap.to("#stick1", {
        visibility: "hidden",
      });
      gsap.to("#stick2", {
        rotation: -45,
        backgroundColor: "white",
        ease: "circ.out(1.7)",
      });
      gsap.to("#cnt", {
        gap: 0,
        ease: "circ.out(1.7)",
      });
    } else {
      gsap.to("#cnt", {
        height: "50px",
      });
      gsap.to("#cnt", {
        gap: 6,
        ease: "circ.out(1.7)",
      });
      gsap.to("#stick", {
        rotation: 0,
        backgroundColor: "red",
      });
      gsap.to("#stick1", {
        visibility: "visible",
      });
      gsap.to("#stick2", {
        rotation: 0,
        backgroundColor: "red",
      });
    }
  }, [stateMenuResp]);
  stateYg
    ? gsap.to("#yg", {
     
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.3,
        ease: "none",
      })
    : gsap.to("#yg", {     
        opacity: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)",
        duration: 0.3,
        ease: "none",
      });
      stateSoluciones
      ? gsap.to("#soluciones", {
      
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.3,
          ease: "none",
        })
      : gsap.to("#soluciones", {
        
       opacity:0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)",
          duration: 0.3,
          ease: "none",
        });

  return (
    <main className="z-[150] fixed w-full h-[55px] md:h-10  mt-10 flex items-center justify-between  bg-white/[0.5] backdrop-blur-md ">
      <img
        onClick={() => navigate("/")}
        src="assets/logo-red.png"
        width={125}
        alt="img"
        className="md:ml-20 p-2"
      />
      <section
        id="cnt"
        onClick={() => setStateMenuResp(!stateMenuResp)}
        className="landscape:hidden  ml-5 z-50 flex flex-col gap-4 w-20 h-20 items-center justify-center"
      >
        <div id="stick" className="w-8 h-[3px] bg-red-600 "></div> 
        <div id="stick1" className="w-8 h-[3px] bg-red-600 "></div>
        <div id="stick2" className="w-8 h-[3px] bg-red-600 "></div>
      </section>
      <section className="w-[65vw] portrait:hidden h-20  flex justify-between items-center">
        <h3 className="cursor-pointer w-40 text-black  hover:text-white font-semibold hover:bg-red-600 h-10 flex items-center justify-center transition-all duration-500 " onClick={()=>navigate("/")}>Inicio</h3>
        <nav
          className="z-50 h-10 flex cursor-pointer w-40"
          onMouseOver={() => setStateYg(true)}
          onMouseOut={() => setStateYg(false)}
        >
          <h3 className="w-40 text-black  hover:text-white hover:bg-red-600 font-semibold bg-white/[0]    flex items-center justify-center transition-all duration-500 ">YG 1</h3>
          <ul
            id="yg"
            className="absolute p-5 mt-10  rounded-xl opacity-0 text-red-200 bg-slate-950/[0.9]  w-60 h-46 flex  flex-col justify-start"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)" }}
          >
            <li id="yg" onClick={() => navigate("/quienes_somos")}>
              Equipo
            </li>
            <li id="yg" onClick={() => navigate("/quienes_somos")}>
              Quienes Somos
            </li>
            <li id="yg" onClick={() => navigate("/historia")}>
              Historia
            </li>
            <li id="yg" onClick={() => navigate("/mision")}>
              Misión
            </li>
            <li id="yg" onClick={() => navigate("/yg-1-world")}>
              YG en el mundo
            </li>
            <li id="yg" onClick={() => navigate("/contacto")}>
              Contacto
            </li>
          </ul>
        </nav>
        <nav
          className="z-50 h-10 flex cursor-pointer w-40"
          onMouseOver={() => setStateSoluciones(true)}
          onMouseOut={() => setStateSoluciones(false)}
        >
          <h3 className="w-40 text-black  hover:text-white transition-all duration-150 font-semibold hover:bg-red-600    flex items-center justify-center ">Soluciones</h3>
          <ul
            id="soluciones"
            className="absolute p-5  mt-10 rounded-xl opacity-0 text-red-200 bg-slate-950/[0.9]  w-60 h-46 flex flex-col justify-start"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)" }}
          >
            <li  id="soluciones" onClick={() => navigate("/quienes_somos")}>
              Fresado
            </li>
            <li  id="soluciones" onClick={() => navigate("/historia")}>
              Taladrado
            </li>
            <li  id="soluciones" onClick={() => navigate("/mision")}>
              Roscado
            </li>
            <li  id="soluciones" onClick={() => navigate("/yg-1-world")}>
              Fijación mecánica
            </li>
            <li  id="soluciones" onClick={() => navigate("/contacto")}>
              Sistema de herramientas
            </li>
          </ul>
        </nav>
        <h3 className="cursor-pointer  font-semibold text-black  hover:text-white  hover:bg-red-600 transition-all duration-150 m-6 p-2">Actualidad</h3>
      </section>
    </main>
  );
}
