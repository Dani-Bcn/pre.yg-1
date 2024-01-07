import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { stateMenuResp } = props;
  const { setStateMenuResp } = props;
  const [stateYg, setStateYg] = useState(false);
  const navigate = useNavigate();
  console.log(window)

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
        marginTop: 0,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.3,
        ease: "none",
      })
    : gsap.to("#yg", {
        marginTop: -20,
        opacity: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)",
        duration: 0.3,
        ease: "none",
      });
  console.log(stateYg);

  return (
    <main className="z-50 fixed w-full h-[55px] mt-10 flex items-center justify-between  bg-white/[0.5] backdrop-blur-md ">
      <img
        onClick={() => navigate("/")}
        src="assets/descarga.png"
        width={125}
        alt="img"
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
      <section className="w-96   z-[150] flex mx-5 justify-between">
        <h3 className="cursor-pointer" onClick={()=>navigate("/")}>Inicio</h3>
        <nav
          className="z-[150] h-5 cursor-pointer w-40"
          onMouseOver={() => setStateYg(true)}
          onMouseOut={() => setStateYg(false)}
        >
          <h3 className="px-5">YG 1</h3>
          <ul
            id="yg"
            className="p-5 rounded-xl opacity-0 text-white bg-slate-950/[0.6] backdrop-blur-3xl -mt-6 h-40 flex flex-col justify-start"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 10%, 0% 10%)" }}
          >
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
        <h3>Soluciones</h3>
        <h3>Equipo</h3>
        <h3>Noticias</h3>
      </section>
    </main>
  );
}
