import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import Slider from "react-slick";
import { motion } from "framer-motion";

// ====================================
//   IMPORTA 14 FOTOS DE /assets
// ====================================
import foto1 from "../assets/14.png";
import foto2 from "../assets/13.jpeg";
import foto3 from "../assets/12.jpeg";
import foto4 from "../assets/11.jpeg";
import foto5 from "../assets/10.jpeg";
import foto6 from "../assets/9.jpeg";
import foto7 from "../assets/8.jpeg";
import foto8 from "../assets/7.jpeg";
import foto9 from "../assets/6.jpeg";
import foto10 from "../assets/5.jpeg";
import foto11 from "../assets/4.jpeg";
import foto12 from "../assets/3.jpeg";
import foto13 from "../assets/2.jpeg";
import foto14 from "../assets/1.jpeg";

const photos = [
  foto1, foto2, foto3, foto4, foto5, foto6, foto7,
  foto8, foto9, foto10, foto11, foto12, foto13, foto14
];

// CONFIGURACIÓN DEL CARRUSEL
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
};

// COUNTDOWN
const Countdown = () => {
  const eventDate = new Date("2026-03-07T14:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center gap-6 sm:gap-10">
      {[
        ["DÍAS", timeLeft.days],
        ["HORAS", timeLeft.hours],
        ["MINUTOS", timeLeft.minutes],
        ["SEGUNDOS", timeLeft.seconds],
      ].map(([label, value], i) => (
        <div key={i} className="flex flex-col justify-center items-center min-w-[45px]">
          <p className="text-[22px] sm:text-[26px] font-light text-[#d97aa0] leading-none">
            {value}
          </p>
          <p className="text-[9px] tracking-[2px] text-[#e8b7cd] mt-1 uppercase">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

// ABOUT SECTION
const About = () => {
  return (
    <section className="w-full py-20 px-6 flex flex-col items-center bg-[#FDEFF3] rounded-[32px]">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">

        {/* CAROUSEL */}
        <motion.div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full md:w-[90%]">
            <Slider {...carouselSettings}>
              {photos.map((src, index) => (
                <div key={index}>
                  <img
                    src={src}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-[650px] object-cover rounded-3xl shadow-lg"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* TEXTO DERECHA */}
        <div className="w-full md:w-1/2 text-center md:text-left">

          {/* TÍTULO */}
          <h2 className="text-[32px] md:text-[40px] font-light text-[#d97aa0] leading-tight mb-4">
            Te invitamos a la Presentación de Helena ✨
          </h2>

          <p className="mt-3 text-[16px] md:text-[17px] leading-[28px] text-[#636363]">
            Con muchísimo amor y alegría, te invitamos a celebrar la presentación
            de nuestra hija. Será un día lleno de cariño, unión y bendiciones.
            <br /><br />
            Nos encantará que nos acompañes y seas parte de este momento tan especial.
          </p>

          <p className="italic mt-6 text-[16px] md:text-[17px] text-[#a05d7e]">
            “Helena, eres nuestra luz y nuestro mayor regalo. Celebramos tu vida y la
            alegría que has traído a nuestro hogar. Te amamos profundamente.”
          </p>

          <p className="mt-5 text-[#d97aa0] font-semibold text-[16px] md:text-[18px]">
            — Papás: Hugo Franco & Belén Alarcón
          </p>

          <p className="mt-1 text-[#a05d7e]  font-semibold text-[16px] md:text-[18px]">
            — Padrinos: Moisés Franco Rangel & Luisa Valdovinos
          </p>

        </div>
      </div>

      {/* CARDS */}
      <div className="w-full max-w-5xl mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD FECHA */}
        <div className="bg-white border border-[#f3cfe0] shadow-lg rounded-3xl p-8">
          <h3 className="text-[20px] text-[#d97aa0] font-semibold mb-1">Fecha del evento</h3>
          <p className="text-[#6f6f6f] text-[16px]">
            07 de marzo de 2026
          </p>
          <span className="text-[#d97aa0] text-[14px]">2:00 PM</span>
        </div>

        {/* CARD COUNTDOWN */}
        <div className="bg-white border border-[#f3cfe0] shadow-lg rounded-3xl p-8 flex flex-col items-center">
          <h3 className="text-[20px] text-[#d97aa0] font-semibold mb-4">
            Falta muy poco…
          </h3>
          <Countdown />
        </div>

      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
