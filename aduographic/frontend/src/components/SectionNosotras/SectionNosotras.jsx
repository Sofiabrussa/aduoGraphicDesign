import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionNosotrasStyles.css";
import Carousel from '../Carrousel/Carrousel';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Button from '../Button/Button';
import '../../App.css';

function SectionNosotras() {
  const imagesCarouselSectionNosotras = [
    { src: "/imgsNosotras/pedidos-06.png", alt: "IMAGEN1", text: "DISEÑAR con PASIÓN = <br> CONECTAR con el MUNDO</br>" },
    { src: "/imgsNosotras/pedidos-07.png", alt: "IMAGEN2", text: "CREEMOS que la MEJOR IDEA <br/> siempre NACE desde el DISFRUTE" },
    { src: "/imgsNosotras/pedidos-08.png", alt: "IMAGEN3", text: "No HAY dos sin TRES <br/> Somos tu mejor TEAM!" },
  ];

  // Referencia a la sección Nosotras
  const nosotrasRef = useRef(null);
  const isInView = useInView(nosotrasRef, { triggerOnce: false, threshold: 0.3 });

  return (
    <Container id="nosotras" className="p-0" ref={nosotrasRef}>
      <Row className="mx-0" style={{ height: '80vh' }}>
        {/* Text Content */}
        <Col md={6} xs={6} className="d-flex flex-column justify-content-center align-items-center text-center px-4">
          <Card.Title className="m-2">
            Somos un estudio gráfico que nació para{" "}
            <span className="text-violet">romper esquemas.</span>
          </Card.Title>

          <Card.Text className="mb-3 mx-4">
            En A Dúo, somos dos amigas apasionadas por transformar ideas en experiencias visuales únicas.
          </Card.Text>

          <Card.Text className="mb-4 mx-4">
            Nos mueve la creatividad, la conexión con nuestros clientes y el desafío de crear marcas que sean tan auténticas como vos.
          </Card.Text>

          {/* Botón con animación */}
          <motion.a
            href="https://walink.co/9f29a0"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Button>Trabajemos juntos</Button>
          </motion.a>
        </Col>

        {/* Image Section */}
        <Col md={6} xs={6} className="p-0">
          <div
            className="h-100 w-100 overflow-hidden rounded"
            style={{
              backgroundImage: 'url("/imgsNosotras/imagennosotras.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
          </div>
        </Col>
      </Row>

      {/* Carousel Section */}
      <Row className="mx-0" >
        <Col className="p-0">
          <Carousel images={imagesCarouselSectionNosotras} />
        </Col>
      </Row>
    </Container>
  );
}

export default SectionNosotras;
