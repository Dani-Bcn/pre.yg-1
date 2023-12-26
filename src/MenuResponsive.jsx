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
      className="z-[50] ml-[-100vw] fixed  w-full h-full flex items-center justify-start bg-red-700/[0.8] backdrop-blur-md"
    >
      <ul className="p-5 gap-5 text-2xl text-white font-bold flex flex-col w-full ">
        <li>
          <p
            onClick={() => {
              navigate("/"),
                setStateMenuResp(false),
                setSoluciones(false),
                setYg(false);
            }}
          >
            Inicio
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              setYg(!yg), setSoluciones(false);
            }}
          >
            YG-1
          </p>
          <m.ul
            className="absolute w-48 flex flex-col gap-5 -mt-32 p-5 text-[1.2rem] rounded-3xl text-red-600  bg-slate-50 ml-[200vw]"
            animate={{
              x: yg ? "-157vw" : 0,
              opacity: yg ? 1 : 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <li
              onClick={() => {
                navigate("/quienes_somos"), setStateMenuResp(false);
              }}
            >
              Quienes somos
            </li>
            <li
              onClick={() => {
                navigate("/historia"), setStateMenuResp(false);
              }}
            >
              Historia{" "}
            </li>
            <li
              onClick={() => {
                navigate("/mision"), setStateMenuResp(false);
              }}
            >
              Mision
            </li>
            <li 
              onClick={() => {
                navigate("/yg-1-world"), setStateMenuResp(false);
              }}
            >YG en el mundo</li>
            <li
              onClick={() => {
                navigate("/contacto"), setStateMenuResp(false);
              }}
            >
              Contacto
            </li>
          </m.ul>
        </li>
        <li>
          <p onClick={() => setSoluciones(!soluciones, setYg(false))}>
            Soluciones
          </p>
          <m.ul
            className="absolute   flex flex-col gap-5 -mt-52 p-5 text-[1.2rem] text-red-600 rounded-3xl bg-slate-50 ml-[200vw]"
            animate={{
              x: soluciones ? "-152vw" : 0,
              opacity: soluciones ? 1 : 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <li
              onClick={() => {
                navigate("/fresado"), setStateMenuResp(false);
              }}
            >
              Fresado
            </li>
            <li
              onClick={() => {
                navigate("/taladrado"), setStateMenuResp(false);
              }}
            >
              Taladrado
            </li>
            <li
              onClick={() => {
                navigate("/roscado"), setStateMenuResp(false);
              }}
            >
              Roscado
            </li>
            <li
              onClick={() => {
                navigate("/fijacion"), setStateMenuResp(false);
              }}
            >
              Fijación mecánica
            </li>
            <li
              onClick={() => {
                navigate("/sistemas"), setStateMenuResp(false);
              }}
            >
              Sistemas de herramientas
            </li>
          </m.ul>
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
