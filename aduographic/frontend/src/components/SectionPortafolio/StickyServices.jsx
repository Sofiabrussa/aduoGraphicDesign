import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SectionPortafolioStyles.css";
import PortfolioTitle from "./PortfolioTitle";
import ScrollCurve from "./ScrollCurve";

const services = [
  {
    id: "01",
    title: "Branding",
    content:
      "Creamos identidades visuales sólidas con sistemas coherentes que potencian el reconocimiento de tu marca en el mercado.",
    image:
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069738/3fdc6964-fded-4b4a-ac44-aa2766ad3a94_gi7drd.png",
  },
  {
    id: "02",
    title: "Redes Sociales",
    content:
      "Estrategia de contenido y diseño para que tu presencia digital sea consistente, atractiva y generadora de conexiones reales.",
    image:
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1780068447/Copia_de_Redes_bhwvy4.jpg",
  },
  {
    id: "03",
    title: "Creación de Contenido",
    content:
      "Imágenes con estilo propio y composición estratégica, pensadas para potenciar tu narrativa visual y diferenciarte.",
    image:
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1780070556/cartel_1_tdliy9.png",
  },
  {
    id: "04",
    title: "Paid Media",
    content:
      "Experiencias digitales modernas, funcionales y orientadas a conversión. UX/UI pensado para que cada pixel cuente.",
    image:
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1782743466/web_c1gzbn.png",
  },
];

function StickyServices({ animateControls }) {
  const [active, setActive] = useState(0);
  const listRef = useRef(null);
  const itemRefs = useRef([]);

  const updateActive = useCallback(() => {
    const container = listRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const triggerY = containerRect.top + containerRect.height * 0.35;

    let bestIndex = 0;
    let bestDist = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const dist = Math.abs(rect.top - triggerY);
      if (dist < bestDist) {
        bestDist = dist;
        bestIndex = i;
      }
    });

    setActive(bestIndex);
  }, []);

  const handleWheel = useCallback(
    (e) => {
      const container = listRef.current;
      if (!container) return;

      e.preventDefault();
      e.stopPropagation();
      container.scrollBy({ top: e.deltaY * 0.4, behavior: "auto" });
    },
    []
  );

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("scroll", updateActive, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("scroll", updateActive);
    };
  }, [handleWheel, updateActive]);

  return (
    <section className="sticky-services-section">
      <div className="sticky-services-wrapper">
        <ScrollCurve />

        <div className="sticky-services-header">
          <PortfolioTitle animateControls={animateControls} />
        </div>

        <div className="sticky-services-body">

          {/* ── IZQUIERDA ── */}
          <div className="services-left" ref={listRef}>
            <div className="scroll-spacer" aria-hidden="true" />

            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                onMouseEnter={() => setActive(index)}
                className={`service-item ${active === index ? "active-service" : ""}`}
              >
                <h2>{service.title}</h2>
                <AnimatePresence initial={false}>
                  {active === index && (
                    <motion.p
                      key={`p-${service.id}`}
                      className="card-text"
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: "0.75rem" }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.32, ease: "easeInOut" }}
                      style={{ overflow: "hidden", marginBottom: 0 }}
                    >
                      {service.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="scroll-spacer" aria-hidden="true" />

          </div>

          {/* ── DERECHA ── */}
          <div className="services-right">
            <AnimatePresence mode="wait">
              <motion.img
                key={services[active].image}
                src={services[active].image}
                alt={services[active].title}
                className="service-image"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.48, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StickyServices;