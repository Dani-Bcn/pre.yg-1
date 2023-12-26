import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MenuResponsive(props) {
  const { setStateMenuResp } = props;
  const { stateMenuResp } = props;
  const navigate = useNavigate();
  const [yg, setYg] = useState(false);
  const [soluciones, setSoluciones] = useState(false);

  stateMenuResp
    ? gsap.to("#mainMenu", {
        x: "100vw",
      })
    : gsap.to("#mainMenu", {
        x: 0,
      });

  useEffect(() => {
    setSoluciones(false);
    setYg(false);
  }, [stateMenuResp]);

  return (
    <main
      id="mainMenu"
      className="fixed z-[50] -ml-[100vw] w-screen h-screen bg-red-600"
    >
      <section className="mt-20 w-screen  p-5">
        <h2
          onClick={() => {
            navigate("/"), setStateMenuResp(false);
          }}
          className="text-2xl font-semibold text-white my-5"
        >
          Inicio
        </h2>
        <h2 className="text-2xl font-semibold text-white">YG-1</h2>
        <nav className="flex p-2 h-52 ">
          <div className="  w-[0.5px] bg-white"></div>
          <div className="h-full justify-around px-2 text-[1.2rem] rounded-2xl text-white flex flex-col">
            <p
              onClick={() => {
                navigate("/quienes_somos"), setStateMenuResp(false);
              }}
            >
              - Quienes somos
            </p>
            <p
              onClick={() => {
                navigate("/historia"), setStateMenuResp(false);
              }}
            >
              - Historia
            </p>
            <p
              onClick={() => {
                navigate("/mision"), setStateMenuResp(false);
              }}
            >
              - Misión,Visión y valores
            </p>
            <p
              onClick={() => {
                navigate("/yg-1-world"), setStateMenuResp(false);
              }}
            >
              - YG-1 en el mundo
            </p>
            <p
              onClick={() => {
                navigate("/contacto"), setStateMenuResp(false);
              }}
            >
              - Contacto
            </p>
          </div>
        </nav>
        <h2 className="text-2xl font-semibold text-white pt-5">Soluciones</h2>
        <nav className="flex p-2 h-52">
          <div className="w-[0.5px] bg-white"></div>
          <div className="h-full justify-around px-2 text-[1.2rem] rounded-2xl text-white flex flex-col">
            <p
              onClick={() => {
                navigate("/fresado"), setStateMenuResp(false);
              }}
              className=""
            >
              - Fresado
            </p>
            <p
              onClick={() => {
                navigate("/taladrado"), setStateMenuResp(false);
              }}
            >
              - Taladrado
            </p>
            <p
              onClick={() => {
                navigate("/roscado"), setStateMenuResp(false);
              }}
            >
              - Roscado
            </p>
            <p
              onClick={() => {
                navigate("/fijacion"), setStateMenuResp(false);
              }}
            >
              - Fijación mecánica
            </p>
            <p
              onClick={() => {
                navigate("/sistemas"), setStateMenuResp(false);
              }}
            >
              - Sistema de herramientas
            </p>
          </div>
        </nav>
        <h2
          onClick={() => {
            navigate("/equipo"), setStateMenuResp(false);
          }}
          className="text-2xl font-semibold text-white py-5"
        >
          Equipo
        </h2>
        <h2
          onClick={() => {
            navigate("/noticias"), setStateMenuResp(false);
          }}
          className="py-3 text-2xl font-semibold text-white"
        >
          Noticias
        </h2>
      </section>
    </main>
  );
}
