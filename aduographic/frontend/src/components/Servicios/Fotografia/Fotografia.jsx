import "./FotografiaStyled.css";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";

const Fotografia = () => {
  const [images] = useState([
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
  ]);

  return (
    <section id="section-fotografia">
      <div className="container-fluid m-0 p-0">
        
        {/* ===== TÍTULO ===== */}
        <div className="row w-100 m-0">
          <div className="col-12 text-center px-0">
            <Card.Title className="tm-titulo">
              Contenido <span className="span-violeta"> y fotografía</span>
            </Card.Title>

            <Card.Text className="mb-4 px-3 card-text-servicios mx-auto">
              Todo pensado con una estrategia visual que no solo se ve bien, sino que tiene propósito.
              <br />
              Lo adaptamos a cualquier plataforma que necesites, ¡sin vueltas!
              <br />
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
        </div>

        {/* ===== CARRUSEL CURVO NUEVO */}
        <div className="carousel-curve-container mt-4">
          <div className="carousel-curve-track">
            {images.map((image, index) => (
              <div className="carousel-curve-item" key={index} style={{ "--i": index }}>
                <img src={image} className="carousel-curve-img" alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Fotografia;

