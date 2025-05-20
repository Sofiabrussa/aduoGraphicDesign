import "./FotografiaStyled.css";
import { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";

const Fotografia = () => {
  
  const scrollRef = useRef(null);
  const [images] = useState([
    "/fotografia/_CIT6759.jpg",
    "/fotografia/_CIT6933.jpg",
    "/fotografia/_DSC9874-Enhanced-NR.jpg",
    "/fotografia/_CIT7464.jpg",
    "/fotografia/_DSC0430-Enhanced-NR.jpg",
    "/fotografia/_CIT6759.jpg",
    "/fotografia/_DSC0313-Enhanced-NR (1).jpg",
    "/fotografia/manu rojas-54.jpg",
    "/fotografia/_DSC0394.jpg",
    "/fotografia/_CIT6664.jpg",
    "/fotografia/_DSC0465-Enhanced-NR.webp",
    "/fotografia/_CIT7582.jpg",
    "/fotografia/_DSC9901-Enhanced-NR.jpg",
    "/fotografia/_CIT6512.jpg",
    "/fotografia/_DSC9979-Enhanced-NR.jpg",
    "/fotografia/_CIT6502.jpg",
  ]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML = content + content;

    const scroll = () => {
      if (!scrollContainer) return;
      const maxScroll = scrollContainer.scrollWidth / 2;
      scrollContainer.scrollLeft -= 1;
      if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = maxScroll;
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, []);
    
    return (
      <section id="section-fotografia" className="py-5">
        <div className="container-fluid m-0 p-0">
          <div className="row justify-content-center w-100">
            <div className="col-12 col-md-8 text-center">
              <Card.Title className="mb-3 tm-titulo">
                Contenido <span > y fotografía</span>
              </Card.Title>
              <Card.Text className="mb-4">
                Todo pensado con una estrategia visual que no solo
                se ve bien, sino que tiene propósito. <br></br>Lo adaptamos a
                cualquier plataforma que necesites, ¡sin vueltas!
                <br></br>
                <strong>¿Lo hacemos realidad? </strong>
              </Card.Text>
              <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
                    <Button >lo necesito! </Button>
                  </a>
                </motion.div>
            </div>
          </div>

      <div className="w-100 mt-5">
        <div
          ref={scrollRef}
          className="d-flex flex-nowrap gap-3 auto-carousel"
          style={{
            overflowX: "hidden",
            width: "100vw",
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="img-fluid rounded shadow carousel-img"
              style={{
                height: "200px",
                objectFit: "cover",
                flex: "0 0 auto",
              }}
            />
          ))}
        </div>
      </div>
        </div>
      </section>
    );
  };
  export default Fotografia;