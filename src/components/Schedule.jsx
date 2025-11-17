import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// =========================
//   ITINERARIO DE ELENA 💗
// =========================
const schedule = [
  {
    title: "Misa de Presentación",
    hour: "2:00 PM",
    icon: () => <span style={{ fontSize: "24px" }}>⛪</span>,
  },
  {
    title: "Recepción",
    hour: "3:00 – 3:30 PM",
    icon: () => <span style={{ fontSize: "24px" }}>🎀</span>,
  },
  {
    title: "Fiesta",
    hour: "3:30 – 10:30 PM",
    icon: () => <span style={{ fontSize: "24px" }}>🎉</span>,
  },
  {
    title: "Salida",
    hour: "10:30 – 11:00 PM",
    icon: () => <span style={{ fontSize: "24px" }}>✨</span>,
  },
];

// =========================
//   ESTILOS MOBILE ROSA
// =========================
const mobileFixStyles = `
  @media (max-width: 640px) {
    .vertical-timeline-element-icon {
      width: 40px !important;
      height: 40px !important;
      background: #d97aa0 !important;
    }

    .vertical-timeline::before {
      width: 2px !important;
      background: #f2bfd5 !important;
      left: 20px !important;
    }

    .vertical-timeline-element-content {
      margin-left: 60px !important;
      padding: 16px 18px !important;
      border-radius: 18px !important;
      border: 1px solid #f5d9e7 !important;
    }

    .vertical-timeline-element-title {
      font-size: 18px !important;
    }

    .vertical-timeline-element-date {
      font-size: 13px !important;
      opacity: 0.75;
    }

    .vertical-timeline-element {
      margin: 38px 0 !important;
    }
  }
`;

// =========================
//   CARD DEL TIMELINE
// =========================
const ScheduleCard = ({ activity }) => {
  const Icon = activity.icon;

  return (
    <VerticalTimelineElement
      date={activity.hour}
      dateClassName="text-[#d97aa0] font-semibold text-[15px]"
      contentStyle={{
        background: "#ffffff",
        borderRadius: "22px",
        padding: "22px 26px",
        border: "1px solid #f3cfe0",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.05)",
      }}
      contentArrowStyle={{ borderRight: "7px solid #ffffff" }}
      iconStyle={{
        background: "#d97aa0",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "22px",
      }}
      icon={<Icon />}
    >
      <h3 className="vertical-timeline-element-title text-[#a45373] text-[20px] font-semibold tracking-wide">
        {activity.title}
      </h3>
    </VerticalTimelineElement>
  );
};

// =========================
//   COMPONENTE PRINCIPAL
// =========================
const Schedule = () => {
  return (
    <>
      {/* Estilos mobile rosa */}
      <style>{mobileFixStyles}</style>

      <motion.div variants={textVariant()}>
        <h2 className="text-[28px] md:text-[34px] font-light text-[#d97aa0] mt-2 text-center">
          Programa del Evento ✨
        </h2>
      </motion.div>

      <div className="mt-14 flex flex-col">
        <VerticalTimeline lineColor="#f3cfe0">
          {schedule.map((activity, index) => (
            <ScheduleCard key={index} activity={activity} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Schedule, "schedule");
