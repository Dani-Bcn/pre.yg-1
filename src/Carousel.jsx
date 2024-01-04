import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import ReactPlayer from "react-player";

export default function Carousel() {
  const arrayCarousel = [
    {
      img: "assets/video.webp",
      text: "Una nueva era ha empezado",
      titleSoluciones: "Fresado",
      video: "/videos/video1.ogv",
    },

    {
      img: "assets/02.webp",
      text: "YG-1 Cutting Tools | [Mandrinos] Portaherramientas hidráulicos Power E-Hydro",
      titleSoluciones: "Taladro",
      video: "https://www.youtube.com/watch?v=gBjH7h22TrI&t=1s",
    },
    {
      img: "assets/prime.webp",
      text: "YG-1 Cutting Tools | [Roscado] Machos de roscar Prime Taps",
      titleSoluciones: "Roscado",
      video: "https://www.youtube.com/watch?v=p6AU1jIXxmw&t=1s",
    },
    {
      img: "assets/4-dream-drill-pro.webp",
      text: "YG-1 Cutting Tools | [Taladrado]  Dream Drill pro para aceros y fundición",
      titleSoluciones: "Fijación mecánica",
      video: "https://www.youtube.com/watch?v=p6AU1jIXxmw&t=5s",
    },
    {
      img: "assets/yg-1-nanocut.webp",
      text: "YG-1 Cutting Tools | [Torneado] Programa de mandrinado NanoCut",
      titleSoluciones: "Sistemas de herramientas",
      video: "https://www.youtube.com/watch?v=-ujx_4spMH8",
    },
  ];
  const colorPlay = ["#FF0000", "#E4FF00", "#00FF27", "#006CFF", "#C500FF"];

  const [count, setCount] = useState(0);
  const [video, setVideo] = useState(false);
  const [numVideo, setNumVideo] = useState(0);

  const slider = () => {
    setCount(count + 1);
    clearInterval(interval);
    count === 4 ? setCount(0) : null;
  };

  const interval = setInterval(() => slider(), 3000);

  return (
    <main id="main" className="mt-24 z-20">
      <div className="w-screen h-48 bg-red-500 flex justify-center items-center ">
        <img
          src={arrayCarousel[count].img}
          alt=""
          className="w-screen  h-48 object-cover brightness-[50%]"
        />
        <h3 className="absolute px-5 text-3xl text-center text-white font-bold ">
          {arrayCarousel[count].text}
        </h3>

        <button
          onClick={() => {
            setVideo(true), setNumVideo(count);
          }}
          className="absolute flex justify-center items-center w-16 h-16 rounded-[100px] mt-48 ml-80 bg-slate-50/[0.5] backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="-3 0 24 24"
            strokeWidth="1.5"
            stroke={colorPlay[count]}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 5v14l12 -7z" />
          </svg>
        </button>
        {video ? (
          <div className="fixed mt-[40vh] h-[150vh] bg-slate-800 backdrop-blur-xl flex flex-col justify-center items-center">
            <button
              onClick={() => setVideo(false)}
              className="ml-80 p-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="rgb(255,255,255)"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <ReactPlayer
              id="md-movie"
              className=" bg-slate-800 backdrop-blur-md "
              url={arrayCarousel[numVideo].video}
              width={400}
              height={300}
              playing={video}
              playsinline={true}
              muted={false}
              volume={1}
              controls={true}
            ></ReactPlayer>
          </div>
        ) : null}
      </div>
    </main>
  );
}
