// src/components/RSVP.jsx
import React, { useState } from "react";
import { SectionWrapper } from "../hoc";

const RSVP = () => {
  const WHATSAPP_NUMBER = "5215527325099";

  const [form, setForm] = useState({
    name: "",
    attendance: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = () => {
    if (!form.name || !form.attendance) {
      alert("Por favor completa tu nombre y si podrás acompañarnos ✨");
      return;
    }

    const message = `*Confirmación de asistencia – Presentación de Elena*\n\n*Nombre:* ${form.name}\n*Asistencia:* ${form.attendance}\n*Notas:* ${form.notes || "Ninguna"}\n\n¡Gracias por tu respuesta!`;

    const url =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);

    window.open(url, "_blank");
  };

  return (
    <section className="w-full py-20 px-6 flex flex-col items-center">
      {/* Título */}
      <h2 className="text-[30px] md:text-[38px] font-light text-[#d97aa0] text-center">
        Confirmar Asistencia ✨
      </h2>

      {/* Contenedor */}
      <div
        className="
          mt-10
          bg-white
          border border-[#f3cfe0]
          rounded-3xl
          shadow-[0_4px_14px_rgba(0,0,0,0.06)]
          hover:shadow-[0_8px_22px_rgba(0,0,0,0.10)]
          backdrop-blur-xl
          p-10 w-full max-w-xl
          transition-all duration-300
        "
      >
        {/* Nombre */}
        <label className="flex flex-col mb-6">
          <span className="text-[#d97aa0] font-medium mb-2">Tu nombre</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
            className="
              bg-[#FDEFF3]
              py-3 px-4
              rounded-xl
              border border-[#f3cfe0]
              shadow-inner
              focus:border-[#d97aa0]
              outline-none
              text-[#4d4d4d]
              transition
            "
          />
        </label>

        {/* Asistencia */}
        <label className="flex flex-col mb-6">
          <span className="text-[#d97aa0] font-medium mb-2">¿Podrás asistir?</span>

          <select
            name="attendance"
            value={form.attendance}
            onChange={handleChange}
            className="
              bg-[#FDEFF3]
              py-3 px-4
              rounded-xl
              border border-[#f3cfe0]
              text-[#4d4d4d]
              outline-none
            "
          >
            <option value="">Selecciona una opción</option>
            <option value="Sí, asistiré">Sí, asistiré 💗</option>
            <option value="No podré asistir">No podré asistir</option>
          </select>
        </label>

        {/* Notas */}
        <label className="flex flex-col mb-6">
          <span className="text-[#d97aa0] font-medium mb-2">
            ¿Mensaje para los papás o algo que debamos saber?
          </span>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Escribe cualquier nota especial"
            rows="4"
            className="
              bg-[#FDEFF3]
              py-3 px-4
              rounded-xl
              border border-[#f3cfe0]
              text-[#4d4d4d]
              outline-none
            "
          ></textarea>
        </label>

        {/* Botón */}
        <button
          onClick={sendToWhatsApp}
          className="
            w-full bg-[#d97aa0] text-white py-3 rounded-xl 
            font-medium shadow-md hover:bg-[#c86a93] transition-all
          "
        >
          Enviar confirmación 💗
        </button>
      </div>
    </section>
  );
};

export default SectionWrapper(RSVP, "confirmation");
