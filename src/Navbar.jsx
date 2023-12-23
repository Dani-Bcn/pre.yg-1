import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar(props) {

    const {openMenuResp} = props
    const {stateMenuResp} = props
    const {setStateMenuResp} = props

  const [openMenu, setOpenMenu] = useState(false);

   useEffect(() => {
    if (openMenu) {
      gsap.to("#stick", {
        rotation: 45,
      });

      gsap.to("#stick1", {
        x: 200,
      });
      gsap.to("#stick2", {
        rotation: -45,
        ease:"circ.out(1.7)"
      });
      gsap.to("#cnt", {
        gap: 0,
        ease:"circ.out(1.7)"
      });
    } else {
      gsap.to("#cnt", {
        gap: 6,
        ease:"circ.out(1.7)"
      });
      gsap.to("#stick", {
        rotation: 0,
      });

      gsap.to("#stick1", {
        x: 0,
      });
      gsap.to("#stick2", {
        rotation: 0,
      });
    }
  }, [openMenu]);

  return (
    <main className="  overflow-hidden w-full h-[55px] mt-10 flex justify-between items-center">
      <img src="assets/descarga.png" width={125} alt="img" />
      <section
        id="cnt"
        onClick={() => {setOpenMenu(!openMenu), openMenuResp(setStateMenuResp(!stateMenuResp))}}
        className="ml-5 z-50 flex flex-col gap-4 w-20 h-20 items-center justify-center"
      >
        <div id="stick" className="w-6 h-[0.5px] bg-red-600 "></div>
        <div id="stick1" className="w-6 h-[1px] bg-red-600 "></div>
        <div id="stick2" className="w-6 h-[0.5px] bg-red-600 "></div>
      </section>
    </main>
  );
}
