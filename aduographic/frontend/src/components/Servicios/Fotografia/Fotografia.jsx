import "./FotografiaStyled.css";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";

const Fotografia = () => {
    
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
          
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="image-wrapper">
                <img
                  src="/servicios/servicio3.jpg"
                  alt="Servicio de fotografía"
                  className="img-fluid rounded"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Fotografia;