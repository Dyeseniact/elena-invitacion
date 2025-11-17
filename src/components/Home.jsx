import { motion } from "framer-motion";
import React from "react";
import Portada from "../assets/portada.png"

const Home = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* IMAGEN FULLSCREEN */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Portada}
          alt="Presentación de Helena"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* CAPA OSCURA */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXTO CENTRAL */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">

        {/* TITULO */}
        <h3
          className="
            text-[#ffffffd9]
            tracking-[0.45em]
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            font-[Cinzel]
            mb-5
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]
          "
        >
          MI PRESENTACIÓN
        </h3>

        {/* NOMBRE DE LA NIÑA */}
        <h1
          className="
            text-white
            font-[Cormorant Garamond]
            font-light
            text-6xl sm:text-7xl md:text-8xl lg:text-9xl
            leading-tight
          "
        >
          Helena
        </h1>

        {/* FECHA */}
        <p
          className="
            text-white 
            font-[Cinzel]
            text-base sm:text-lg md:text-xl
            tracking-[0.3em]
            mt-6 opacity-90
          "
        >
          07 · 03 · 2026
        </p>

      </div>

      {/* INDICADOR DE SCROLL */}
      <div className="absolute z-10 xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  );
};

export default Home;
