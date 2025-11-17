import React from "react";
import { SectionWrapper } from "../hoc";
import Iglesia from "../assets/iglesia1.jpg";
import Salon from "../assets/salon.jpeg";

const Location = () => {
  const locations = [
    {
      title: "Ceremonia",
      subtitle: "Iglesia (ubicación)",
      address: "Tlalnepantla, Estado de México",
      time: "2:00 PM",
      img: Iglesia, 
      maps: "https://maps.app.goo.gl/xH9CAaBxdrBkwptv8?g_st=iw",
    },
    {
      title: "Recepción & Fiesta",
      subtitle: "Salón / Jardín del evento",
      address: "Cdad. López Mateo, Estado de México",
      time: "3:30 PM",
      img: Salon,
      maps: "https://maps.app.goo.gl/DBzQmN7XSXfoa7kw7?g_st=iw",
    },
  ];

  return (
    <section className="w-full py-24 px-6 flex flex-col items-center bg-[#FDEFF3] rounded-[32px]">

      <h2 className="text-[30px] md:text-[38px] font-light text-[#d97aa0] mb-14 text-center">
        Ubicaciones del Evento ✨
      </h2>

      <div className="w-full max-w-5xl flex flex-wrap justify-center gap-10">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="
              w-[340px] sm:w-[320px] md:w-[360px]
              bg-white
              border border-[#f3cfe0]
              rounded-3xl
              shadow-[0_4px_14px_rgba(0,0,0,0.06)]
              hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
              transition-all duration-300
              overflow-hidden
            "
          >
            <div className="overflow-hidden">
              <img
                src={loc.img}
                alt={loc.title}
                className="w-full h-56 object-cover"
              />
            </div>

            <div className="p-7 text-center">
              <h3 className="text-[24px] font-light text-[#d97aa0]">
                {loc.title}
              </h3>

              <p className="text-[15px] text-[#7b7b7b] mt-2 leading-tight">
                {loc.subtitle}
              </p>

              <p className="text-[14px] text-[#9a9a9a] mt-1">
                {loc.address}
              </p>

              <p className="text-[15px] text-[#d97aa0] mt-2 font-semibold">
                {loc.time}
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={loc.maps}
                  target="_blank"
                  className="
                    w-full bg-[#d97aa0] text-white py-2 rounded-xl font-medium 
                    hover:bg-[#c86a93] transition
                  "
                >
                  Ver en Google Maps
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default SectionWrapper(Location, "location");
