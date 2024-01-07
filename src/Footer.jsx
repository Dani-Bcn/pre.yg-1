import React from "react";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate= useNavigate()
  return (
    <main className="w-screen m-auto h-60 md:h-40  text-white bg-black flex justify-center items-center">
      <section className="w-[80vw] h-40 p-5  flex md:flex-row md:gap-10 md:items-start justify-center flex-col items-center">
      
        <article className="flex flex-col md:w-60 md:mx-16 ">
          <p>C/ Nord, 22</p>
          <p>08329 Teiá (Barcelona)</p>
          <a href="tel:938 29 72 75">Tel: 938 29 72 75 </a>
          <a href="mailto:contacto@yg-1.es">contacto@yg-1.es</a>
        </article>
        <article className="flex w-[80vw] md:w-80 md:mx-20 md:pt-0 pt-5 justify-between items-center">
          <a href="https://www.facebook.com/yg1worldwide/" target="_blank">
            <img src="social/facebook.png" alt="img" className="w-6 h-5" />
          </a>
          <a
            href="https://www.instagram.com/yg1cuttingtools_official/"
            target="_blank"
          >
            <img src="social/insta.png" alt="img" className="w-6 h-5" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC4Dd_1ECGroDnr3DQ-c5iKQ"
            target="_blank"
          >
            <img src="social/youtube.png" alt="img" className="w-6 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/yg-1-co--ltd-%EC%A3%BC-%EC%99%80%EC%9D%B4%EC%A7%80-%EC%9B%90/?originalSubdomain=kr"
            target="_blank"
          >
            <img src="social/linkedin.png" alt="img" className="w-6 h-5" />
          </a>
          <a href="https://twitter.com/YG1worldwide" target="_blank">
            <img src="social/twiter.png" alt="img" className="w-6 h-5" />
          </a>
        </article>
        <article className="md:w-96  mx-5 md:my-0 w-[80vw] h-5 flex my-5 justify-between ">         
           <p  onClick={()=> navigate("/politica") }className="  text-[0.9rem]">Política de privacidad</p>
            <p className=" text-[0.9rem]">Aviso legal</p>
            <p className=" text-[0.9rem]">Cookies</p>       
        </article>
      </section>
    </main>
  );
}
