import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./InicioStyles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../Carrousel/Carrousel";

function Inicio() {
  const imagesCarouselInicio = [
    { src: "/imgsInicio/degrade1.png", alt: "IMAGEN1" },
    { src: "/imgsInicio/degrade2.png", alt: "IMAGEN2" },
  ];

  const [showIcons, setShowIcons] = useState(true);
  
  // Referencia a la sección Inicio
  const inicioRef = useRef(null);
  const isInView = useInView(inicioRef, { triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    let observer;
    const checkFooter = () => {
      const footer = document.getElementById("Footer");
      if (footer) {
        observer = new IntersectionObserver(
          (entries) => {
            setShowIcons(!entries[0].isIntersecting);
          },
          { threshold: 0.1 }
        );
        observer.observe(footer);
      } else {
        setTimeout(checkFooter, 500);
      }
    };

    checkFooter();

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div id="carouselExample" className="carousel slide" ref={inicioRef}>
      {/* Texto fijo */}
      <div className="carousel-fixed-text">
        <h1 className="carousel-h1">
          NO <span style={{ color: "rgb(206, 181, 216)" }}>hay</span> DOS <br /> SIN{" "}
          <span style={{ color: "rgb(206, 181, 216)" }}>tres</span>
        </h1>
        <p>
          Hacemos que tu marca <br /> sea lo que siempre soñaste
        </p>
        
        {/* Botón con animación al volver a la sección */}
        <motion.a
          href="#contacto"
          className="btn btn-outline-primary buttom-aduo"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Contactanos ↗
        </motion.a>
      </div>

      {/* Carrusel de imágenes */}
      <Carousel images={imagesCarouselInicio} className="h-100 w-100" />

      {/* Iconos con visibilidad controlada */}
      {showIcons && (
        <div className="carousel-iconos">
          <div className="icono">
            <a
              href="https://walink.co/9f29a0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/imgsInicio/recursos_Mesadetrabajo 1.png"
                alt="WhatsApp"
              />
            </a>
          </div>
          <div className="icono">
            <a
              href="https://www.instagram.com/aduo_estudio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgsInicio/recursos-02.png" alt="Instagram" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inicio;
