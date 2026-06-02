import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SectionPortafolioStyles.css";
import PortfolioTitle from "./PortfolioTitle";

const services = [
  {
    id: "01",
    title: "Branding",
    content:
      "Creamos identidades visuales sólidas con sistemas coherentes que potencian el reconocimiento de tu marca en el mercado.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Redes Sociales",
    content:
      "Estrategia de contenido y diseño para que tu presencia digital sea consistente, atractiva y generadora de conexiones reales.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Creación de Contenido",
    content:
      "Imágenes con estilo propio y composición estratégica, pensadas para potenciar tu narrativa visual y diferenciarte.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Paid Media",
    content:
      "Experiencias digitales modernas, funcionales y orientadas a conversión. UX/UI pensado para que cada pixel cuente.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
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

      const { scrollTop, scrollHeight, clientHeight } = container;
      const atTop = scrollTop <= 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      const goingUp = e.deltaY < 0;
      const goingDown = e.deltaY > 0;

      if ((atTop && goingUp) || (atBottom && goingDown)) return;

      e.preventDefault();
      e.stopPropagation();
      container.scrollBy({ top: e.deltaY, behavior: "auto" });
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
                className={`service-item ${active === index ? "active-service" : ""}`}
              >
                <h2>{service.title}</h2>
                <AnimatePresence initial={false}>
                  {active === index && (
                    <motion.p
                      key={`p-${service.id}`}
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