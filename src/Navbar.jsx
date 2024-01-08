import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { stateMenuResp } = props;
  const { setStateMenuResp } = props;
  const [stateYg, setStateYg] = useState(false);
  const [stateSolutions, setStateSolutions] = useState(false);
  const navigate = useNavigate();
  console.log(stateMenuResp);

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
    ? gsap.to("#yg1", {
        visibility: "visible",
        opacity: 1,
      })
    : gsap.to("#yg1", {
        visibility: "hidden",
        opacity: 0,
      });
      stateSolutions
      ? gsap.to("#solutions", {
          visibility: "visible",
          opacity: 1,
        })
      : gsap.to("#solutions", {
          visibility: "hidden",
          opacity: 0,
        });

  return (
    <main className="z-[150] fixed w-full h-[55px] md:h-10  mt-10 flex items-center justify-between  bg-white/[0.9] backdrop-blur-md ">
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
      <section className="w-[80vw] portrait:hidden h-20  flex justify-around items-center">
        <h3
          className="cursor-pointer w-40 text-black text-[1.2em]   hover:text-white hover:bg-red-600 h-10 flex items-center justify-center transition-all duration-500 "
          onClick={() => navigate("/")}
        >
          Inicio
        </h3>
        <div>
          <h3
            className="cursor-pointer w-40 text-black text-[1.2em]   hover:text-white hover:bg-red-600 h-10 flex items-center justify-center transition-all duration-500 "
            onMouseOver={() => setStateYg(true)}
            onMouseOut={() => setStateYg(false)}
          >
            YG-1
          </h3>
          <ul
            id="yg1"
            onMouseOver={() => setStateYg(true)}
            onMouseOut={() => setStateYg(false)}
            className="text-black absolute  cursor-pointer rounded-bl-xl rounded-tr-xl w-52 p-3 bg-white flex flex-col gap-2"
          >
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Quienes somos</p>
            </li>
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Historia</p>
            </li>
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Misión, visión y valores</p>
            </li>
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">YG-1 en el mundo</p>
            </li>
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Contacto</p>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className="cursor-pointer w-40 text-black text-[1.2em]   hover:text-white hover:bg-red-600 h-10 flex items-center justify-center transition-all duration-500 "
            onMouseOver={() => setStateSolutions(true)}
            onMouseOut={() => setStateSolutions(false)}
          >
            Soluciones
          </h3>
          <ul
            id="solutions"
            onMouseOver={() => setStateSolutions(true)}
            onMouseOut={() => setStateSolutions(false)}
            className="text-black absolute w-40 p-3 cursor-pointer rounded-bl-xl rounded-tr-xl w-52 bg-white flex flex-col gap-2"
          >
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Fresado</p>
            </li>
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Taladrado</p>
            </li>
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Roscado</p>
            </li>
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Fijación mecánica</p>
            </li>
            <li>
              <p className="hover:text-white p-2 hover:bg-red-600  rounded-xl transition-all duration-500  ">Sistema de herramients</p>
            </li>
          </ul>
        </div>
        <h3  className="cursor-pointer w-40 text-black text-[1.2em]   hover:text-white hover:bg-red-600 h-10 flex items-center justify-center transition-all duration-500 ">
          Equipo
        </h3>
        <h3
          className="cursor-pointer w-40 text-black text-[1.2em]   hover:text-white hover:bg-red-600 h-10 flex items-center justify-center transition-all duration-500 "
          onClick={() => navigate("/")}
        >
          Actualidad
        </h3>
      </section>
    </main>
  );
}
