import "./FotografiaStyled.css";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

const Fotografia = () => {
  const images = useMemo(
    () => [
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1782824154/05_1_z6fndz.png",
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746441/15_utl5xz.png",
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746277/7_uokxzz.jpg",
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1782746277/3_yletal.jpg",
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1782743466/uniforme_ppb2pj.png",
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069740/stickers_2_ztasie.png",
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1780069739/bolsa_nkhq46.png",
      "https://res.cloudinary.com/dbbyng05e/image/upload/v1780070558/Botella_1_oql4u0.png"
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
        <div className="text-center px-0 fotografia-header">
          <Card.Title className="tm-titulo">
            Contenido <span className="span-violeta"> y fotografía</span>
          </Card.Title>

          <Card.Text className="mb-4 px-3 card-text-servicios mx-auto">
            Todo pensado con una estrategia visual que no solo se ve bien, sino que tiene propósito. <br />
            Lo adaptamos a cualquier plataforma que necesites, ¡sin vueltas! <br />
            <strong>¿Lo hacemos realidad?</strong>
          </Card.Text>

          <motion.div
            className="fotografia-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://walink.co/9f29a0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="button-nosotras">lo necesito!</Button>
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
