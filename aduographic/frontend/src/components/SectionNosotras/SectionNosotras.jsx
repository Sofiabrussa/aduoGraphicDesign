import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { motion, useAnimation } from 'framer-motion';
import Button from '../Button/Button';
import Carousel from '../Carrousel/Carrousel';
import ScrollCurveVertical from './ScrollCurveVertical';
import './SectionNosotrasStyles.css';
import '../../App.css';

const textVariants = {
  hidden: {
    opacity: 0,
    x: -80,
    transition: { duration: 0.5, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const videoVariants = {
  hidden: {
    opacity: 0,
    x: 80,
    transition: { duration: 0.5, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

function SectionNosotras() {
  const imagesCarouselSectionNosotras = [
    { 
      src: "/imgsNosotras/pedidos-06.png", 
      alt: "IMAGEN1", 
      text: "DISEÑAR con PASIÓN = <br> CONECTAR con el MUNDO" 
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
  
  const nosotrasRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        controls.start(entry.isIntersecting ? "visible" : "hidden");
      },
      { threshold: 0.2 }
    );
    if (nosotrasRef.current) observer.observe(nosotrasRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <Container fluid id="nosotras" className="p-0" ref={nosotrasRef}>
      <Row className="mx-0 section-row align-items-stretch">
        {/* Text Content */}
        <Col lg={6} md={12} className="content-column d-flex flex-column justify-content-center align-items-center">
          <ScrollCurveVertical />
          <motion.div
            className="narrow-text"
            initial="hidden"
            animate={controls}
            variants={textVariants}
          >
            <Card.Title className="title-text mb-4">
              Somos un estudio gráfico que nació para <br></br> <span className="text-violet">romper esquemas.</span>
            </Card.Title>
            <Card.Text>En A Dúo, somos dos amigas apasionadas por transformar ideas en experiencias visuales únicas.</Card.Text>
            <Card.Text>Nos mueve la creatividad, la conexión con nuestros clientes y el desafío de crear marcas que sean tan auténticas como vos.</Card.Text>

            <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer" className="button-link">
              <Button className="button-nosotras">Trabajemos juntos</Button>
            </a>
          </motion.div>
        </Col>
        {/* video Section */}
        <Col lg={6} md={12} className="image-column p-0">
          <motion.div
            className="video-container"
            initial="hidden"
            animate={controls}
            variants={videoVariants}
          >
            <video width="550" autoPlay muted loop playsInline className="video-bg"
              src="https://res.cloudinary.com/dbbyng05e/video/upload/f_mp4,q_auto/IMG_0586_etssfa.mov"  type="video/mp4"
            />
          </motion.div>
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