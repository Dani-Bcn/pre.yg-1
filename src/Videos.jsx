import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Videos() {
  const [autoPlay, setAutoPlay] = useState(false);
 

  return (
    <main className="mt-20">
      <button className="p-20" onClick={() => setAutoPlay(true)}>
        Play
      </button>
      {autoPlay ? ( 
        <ReactPlayer
          id="md-movie"
          className="absolute bg-slate-800 backdrop-blur-md w-screen x-[150]  h-96 border-2 m-auto border-orange-300 z-40 shadow-xl shadow-slate-950"
          url="https://www.youtube.com/watch?v=-ujx_4spMH8&t=0s"
         playing={autoPlay}
          playsinline={true}
          muted={false}
          volume={1}
          controls={true}
        ></ReactPlayer>
      ) : null}
    </main>
  );
}
