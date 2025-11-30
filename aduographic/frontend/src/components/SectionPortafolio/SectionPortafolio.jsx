import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css";
import PortfolioTitle from './PortfolioTitle';
import ServicesList from './ServicesList';
import { Col, Container, Row } from 'react-bootstrap';
import Button from "../Button/Button";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function SectionPortafolio() {

  // Animación al entrar en pantalla
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <Container ref={ref} fluid id="portfolio" className="d-flex flex-column m-0 p-0">

      <PortfolioTitle animateControls={controls} />

      <Row className="img-table-container p-0">

        {/* FOTO ANIMADA */}
        <Col md={6} className="p-0 img-wrapper">
          <motion.div
            className="img-component"
            style={{
              backgroundImage: 'url("/imgPortfolio/imagenservicios.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
            initial="hidden"
            animate={controls}
          />
        </Col>

        {/* LISTA DE SERVICIOS */}
        <ServicesList animateControls={controls} />

      </Row>

      <Row className="text-center buttonSectionPortfolio align-items-center" style={{ height: '100px' }}>
        <Col>
          <a
            href="https://www.behance.net/aduoestudiocreativo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className='button-portfolio'>
              Portfolio <BsArrowUpRight className="arrow-icon" style={{ color: "black" }} />
            </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionPortafolio;
