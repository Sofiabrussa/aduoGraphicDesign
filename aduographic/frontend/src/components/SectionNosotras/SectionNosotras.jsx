import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Button from '../Button/Button';
import Carousel from '../Carrousel/Carrousel';
import './SectionNosotrasStyles.css';
import '../../App.css';

function SectionNosotras() {
  const imagesCarouselSectionNosotras = [
    { 
      src: "/imgsNosotras/pedidos-06.png", 
      alt: "IMAGEN1", 
      text: "DISEÑAR con PASIÓN = <br> CONECTAR con el MUNDO</br>" 
    },
    { 
      src: "/imgsNosotras/pedidos-07.png", 
      alt: "IMAGEN2", 
      text: "CREEMOS que la MEJOR IDEA <br/> siempre NACE desde el DISFRUTE" 
    },
    { 
      src: "/imgsNosotras/pedidos-08.png", 
      alt: "IMAGEN3", 
      text: "No HAY dos sin TRES <br/> Somos tu mejor TEAM!" 
    },
  ];

  // Referencia a la sección Nosotras para animación
  const nosotrasRef = useRef(null);
  const isInView = useInView(nosotrasRef, { triggerOnce: false, threshold: 0.3 });

  return (
    <Container fluid id="nosotras" className="p-0" ref={nosotrasRef}>
      <Row className="mx-0 section-row">
        {/* Text Content */}
        <Col lg={6} md={12} className="content-column d-flex flex-column justify-content-center align-items-center text-center px-md-5 px-3 py-4">
          <Card.Title className="title-text mb-4">
            Somos un estudio gráfico que nació para{" "}
            <span className="text-violet">romper esquemas.</span>
          </Card.Title>

          <Card.Text className="description-text mb-3">
            En A Dúo, somos dos amigas apasionadas por transformar ideas en experiencias visuales únicas.
          </Card.Text>

          <Card.Text className="description-text mb-4">
            Nos mueve la creatividad, la conexión con nuestros clientes y el desafío de crear marcas que sean tan auténticas como vos.
          </Card.Text>

          {/* Botón con animación */}
          <motion.div
            className="button-container"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <a
              href="https://walink.co/9f29a0"
              target="_blank"
              rel="noopener noreferrer"
              className="button-link"
            >
              <Button>Trabajemos juntos</Button>
            </a>
          </motion.div>
        </Col>

        {/* Image Section */}
        <Col lg={6} md={12} className="image-column p-0">
          <div className="image-container">
            <img 
              src="/imgsNosotras/imagennosotras.webp" 
              alt="Nosotras" 
              className="nosotras-image" 
              loading="lazy"
            />
          </div>
        </Col>
      </Row>

      {/* Carousel Section */}
      <Row className="mx-0 carousel-row">
        <Col className="p-0">
          <Carousel images={imagesCarouselSectionNosotras} customClass="carousel-nosotras" />
        </Col>
      </Row>
    </Container>
  );
}

export default SectionNosotras;