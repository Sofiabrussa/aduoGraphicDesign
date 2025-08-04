import React, { useEffect, useState, useRef } from "react";
import "./InicioStyles.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../Carrousel/Carrousel";
import Button from "../Button/Button";
import { Card } from 'react-bootstrap'
import { BsArrowUpRight } from "react-icons/bs";

function Inicio() {
  const imagesCarouselInicio = [
    { src: "/imgsInicio/degrade1.webp", alt: "IMAGEN1" },
    { src: "/imgsInicio/degrade2.webp", alt: "IMAGEN2" },
  ];

  const [showIcons, setShowIcons] = useState(true);
  
  // Referencia a la sección Inicio
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
    <div id="carouselExample" className="carousel slide" ref={inicioRef}>
      <div className="carousel-fixed-text">
        <h1 className="carousel-h1">
          NO <span style={{ color: "rgb(206, 181, 216)" }}>hay</span> DOS <br /> SIN{" "}
          <span style={{ color: "rgb(206, 181, 216)" }}>tres</span>
        </h1>
        <Card.Text className="lh-sm">
          Hacemos que tu marca <br /> sea lo que siempre soñaste
        </Card.Text>
        
        {/* Botón */}
        <a href="https://api.whatsapp.com/send/?phone=5493515295012&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
          <Button className="button-inicio"> Contactanos <BsArrowUpRight className="arrow-icon" /> </Button>
        </a>
      </div>

      {/* Carrusel de imágenes */}
      <Carousel images={imagesCarouselInicio} customClass="carousel-home" className="h-100 w-100" />
      </div>

      {/* Iconos */}
      {showIcons && (
        <div className="carousel-iconos">
          <div className="icono">
            <a
              href="https://walink.co/9f29a0"
              target="_blank"
              rel="noopener noreferrer"
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
