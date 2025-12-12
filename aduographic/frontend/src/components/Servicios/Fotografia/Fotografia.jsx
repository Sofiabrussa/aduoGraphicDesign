import "./FotografiaStyled.css";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Fotografia = () => {
  const images = [
    "/fotografia/_DSC9874-Enhanced-NR.webp",
    "/fotografia/_CIT6933.webp",
    "/fotografia/DSC0313.webp",
    "/fotografia/_CIT7429.webp",
    "/fotografia/_CIT7464.webp",
    "/fotografia/_DSC0430-Enhanced-NR.webp",
    "/fotografia/_CIT7693.webp",
    "/fotografia/CIT6759.webp",
    "/fotografia/manu rojas-54.webp",
    "/fotografia/_DSC0394.webp",
    "/fotografia/CIT6664.webp",
    "/fotografia/_DSC0465-Enhanced-NR.webp",
    "/fotografia/_CIT7582.webp",
    "/fotografia/_DSC9901-Enhanced-NR.webp",
    "/fotografia/CIT7689.webp",
    "/fotografia/CIT6512.webp",
    "/fotografia/_DSC9979-Enhanced-NR.webp",
    "/fotografia/_CIT7671.webp",
    "/fotografia/CIT6502.webp",
    "/fotografia/_DSC9805-Enhanced-NR.webp",
  ];

  /* === DUPLICAMOS PARA LOOP PERFECTO === */
  const doubled = [...images, ...images];
  const total = doubled.length;

  /* === ESTADO PARA TRACKEAR LA TARJETA ACTIVA === */
  const [active, setActive] = useState(0);

  /* === AUTO ROTACIÓN CADA 2.2s === */
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 2200);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <section id="section-fotografia">

      {/* === TITULO === */}
      <div className="text-center px-0">
        <Card.Title className="tm-titulo">
          Contenido <span className="span-violeta"> y fotografía</span>
        </Card.Title>

        <Card.Text className="mb-4 px-3 card-text-servicios mx-auto">
          Todo pensado con una estrategia visual que no solo se ve bien, sino que tiene propósito. <br />
          Lo adaptamos a cualquier plataforma que necesites, ¡sin vueltas! <br />
          <strong>¿Lo hacemos realidad?</strong>
        </Card.Text>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
            <Button>lo necesito!</Button>
          </a>
        </motion.div>
      </div>

      {/* === COVERFLOW === */}
      <div className="coverflow">
        {doubled.map((img, i) => {
          const offset = i - active;
          const abs = Math.abs(offset);

          // === Breakpoints RESPONSIVE ===
          let translateXBase = 230;
          let translateZBase = 90;
          let rotateBase = 28;

          if (window.innerWidth <= 1024) {
            translateXBase = 170;
            translateZBase = 70;
            rotateBase = 24;
          }
          if (window.innerWidth <= 768) {
            translateXBase = 130;
            translateZBase = 55;
            rotateBase = 20;
          }
          if (window.innerWidth <= 480) {
            translateXBase = 100;
            translateZBase = 40;
            rotateBase = 18;
          }

          const translateX = offset * translateXBase;
          const translateZ = -abs * translateZBase;
          const rotateY = offset * -rotateBase;

          return (
            <div
              key={i}
              className="coverflow-item"
              style={{
                transform: `
                  translateX(${translateX}px)
                  translateZ(${translateZ}px)
                  rotateY(${rotateY}deg)
                `,
                zIndex: 100 - abs,
                opacity: abs > 4 ? 0 : 1
              }}
            >
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Fotografia;
