import React, { useEffect, useMemo, useState, useRef } from "react";
import "./InicioStyles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../Carrousel/Carrousel";
import Button from "../Button/Button";
import { Card } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";

const desktopCarouselImages = [
  {
    src: "https://res.cloudinary.com/dbbyng05e/image/upload/v1780065562/ada-01_o82fat.jpg",
    alt: "IMAGEN1",
  },
  {
    src: "https://res.cloudinary.com/dbbyng05e/image/upload/v1780065369/Sin_t%C3%ADtulo-1-01_tsuius.jpg",
    alt: "IMAGEN2",
  },
];

const mobileCarouselImages = [
  {
    src: "https://res.cloudinary.com/dbbyng05e/image/upload/v1777306698/DSC04724_ord29y.jpg",
    alt: "IMAGEN1",
  },
  {
    src: "https://res.cloudinary.com/dbbyng05e/image/upload/v1777306947/DSC04648_ulsluz.jpg",
    alt: "IMAGEN2",
  },
];

function Inicio() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 768;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const imagesCarouselInicio = useMemo(
    () => (isMobile ? mobileCarouselImages : desktopCarouselImages),
    [isMobile]
  );

  const [showIcons, setShowIcons] = useState(true);
  const inicioRef = useRef(null);

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
    <>
      <div id="carouselExample" className="inicio-wrapper" ref={inicioRef}>
        <div className="carousel-fixed-text">
          <h1 className="carousel-h1">
            NO <span style={{ color: "rgb(206, 181, 216)" }}>hay</span> DOS{" "}
            <br />
            SIN <span style={{ color: "rgb(206, 181, 216)" }}>tres</span>
          </h1>

          <Card.Text className="carousel-subtitle lh-sm">
            Hacemos que tu marca <br /> sea lo que siempre soñaste
          </Card.Text>

          <a
            href="https://api.whatsapp.com/send/?phone=5493515295012&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="button-inicio">
              Contactanos <BsArrowUpRight className="arrow-icon" />
            </Button>
          </a>
        </div>
        <Carousel
          images={imagesCarouselInicio}
          customClass="carousel-home"
          interval={5000}
        />
      </div>
      {showIcons && (
        <div className="carousel-iconos" aria-label="Redes sociales">
          <div className="icono">
            <a
              href="https://walink.co/9f29a0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img
                src="/imgsInicio/recursos_Mesadetrabajo-1.webp"
                alt="WhatsApp"
              />
            </a>
          </div>
          <div className="icono">
            <a
              href="https://www.instagram.com/aduo_estudio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="/imgsInicio/recursos-02.webp" alt="Instagram" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Inicio;