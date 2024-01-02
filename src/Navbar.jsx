import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { stateMenuResp } = props;
  const { setStateMenuResp } = props;
  const navigate = useNavigate()

  useEffect(() => {
    if (stateMenuResp) {
      gsap.to("#stick", {
        rotation: 45,
        backgroundColor: "white",
      });

      gsap.to("#stick1", {
        x: 200,
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
        gap: 6,
        ease: "circ.out(1.7)",
      });
      gsap.to("#stick", {
        rotation: 0,
        backgroundColor: "red",
      });

      gsap.to("#stick1", {
        x: 0,
      });
      gsap.to("#stick2", {
        rotation: 0,
        backgroundColor: "red",
      });
    }
  }, [stateMenuResp]);

  return (
    <main className="z-50 fixed overflow-hidden w-full h-[55px] mt-10 flex justify-between items-center bg-white/[0.5] backdrop-blur-md ">
      <img onClick={()=> navigate("/")} src="assets/descarga.png" width={125} alt="img" />
      <section
        id="cnt"
        onClick={() => setStateMenuResp(!stateMenuResp)}
        className="ml-5 z-50 flex flex-col gap-4 w-20 h-20 items-center justify-center"
      >
        <div id="stick" className="w-6 h-[2px] bg-red-600 "></div>
        <div id="stick1" className="w-6 h-[2px] bg-red-600 "></div>
        <div id="stick2" className="w-6 h-[2px] bg-red-600 "></div>
      </section>
    </main>
  );
}
