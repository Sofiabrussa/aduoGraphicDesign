import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./SectionPortafolioStyles.css";

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
      "Estrategia de contenido y diseño para que tu presencia digital sea consistente.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Fotografía",
    content:
      "Imágenes con estilo propio y composición estratégica para potenciar tu narrativa visual.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Diseño Web",
    content:
      "Experiencias digitales modernas, funcionales y orientadas a conversión.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

function StickyServices() {
  const [active, setActive] = useState(0);
  const markersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActive(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    markersRef.current.forEach((marker) => {
      if (marker) observer.observe(marker);
    });

    return () => {
      markersRef.current.forEach((marker) => {
        if (marker) observer.unobserve(marker);
      });
    };
  }, []);

  return (
    <section className="sticky-services-section">

      <div className="sticky-services-wrapper">

        {/* IZQUIERDA */}
        <div className="services-left">

        {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`service-item ${
                active === index ? "active-service" : "inactive-service"
              }`}
              initial={false}
              animate={{
                height: active === index ? "auto" : 0,
                opacity: active === index ? 1 : 0,
              }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              style={{ overflow: "hidden", pointerEvents: active === index ? "auto" : "none" }}
            >
            
              <h2>{service.title}</h2>
              <p>{service.content}</p>

        </motion.div>               
        ))}
        </div>

        {/* DERECHA */}
        <div className="services-right">

          <motion.img
            key={services[active].image}
            src={services[active].image}
            alt={services[active].title}
            className="service-image"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

        </div>

      </div>

      {services.map((service, index) => (
        <div
          key={`marker-${service.id}`}
          ref={(el) => (markersRef.current[index] = el)}
          data-index={index}
          className="service-marker"
        />
      ))}

    </section>
    );
}
export default StickyServices;