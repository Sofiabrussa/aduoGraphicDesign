import "./FotografiaStyled.css";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const Fotografia = () => {
  const images = useMemo(
    () => [
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
      "/fotografia/DSC08496.webp",
      "/fotografia/DSC9804.webp",
      "/fotografia/DSC9819.webp",
      "/fotografia/DSC08503.webp",
      "/fotografia/DSC9885-Enhanced-NR.webp"
    ],
    []
  );

  /* ===== Detectar mobile correctamente ===== */
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 768;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* ===== Desktop coverflow ===== */
  const doubled = useMemo(() => [...images, ...images], [images]);
  const total = doubled.length;
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 2200);

    return () => clearInterval(interval);
  }, [isMobile, total]);

  const layout = {
    translateX: 230,
    translateZ: 90,
    rotate: 28
  };

  return (
    <section id="section-fotografia">
      <div className="fotografia-content">

        {/* ===== TÍTULO ===== */}
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
            <a
              href="https://walink.co/9f29a0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>lo necesito!</Button>
            </a>
          </motion.div>
        </div>

        {/* ===== DESKTOP: COVERFLOW 3D ===== */}
        {!isMobile && (
          <div className="coverflow">
            {doubled.map((img, i) => {
              let offset = i - active;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              const abs = Math.abs(offset);

              return (
                <div
                  key={i}
                  className="coverflow-item"
                  style={{
                    transform: `
                      translateX(${offset * layout.translateX}px)
                      translateZ(${-abs * layout.translateZ}px)
                      rotateY(${offset * -layout.rotate}deg)
                    `,
                    zIndex: 100 - abs,
                    opacity: abs > 6 ? 0 : 1
                  }}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* ===== MOBILE: CAROUSEL SIMPLE ===== */}
        {isMobile && (
          <div className="fotografia-mobile">
            <div className="fotografia-mobile-track">
              {[...images, ...images].map((img, i) => (
                <div key={i} className="fotografia-mobile-item">
                  <img src={img} alt="" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Fotografia;
