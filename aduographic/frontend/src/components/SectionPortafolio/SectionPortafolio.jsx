import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css";
import PortfolioTitle from './PortfolioTitle';
import { Col, Container, Row } from 'react-bootstrap';
import Button from "../Button/Button";
import { BsArrowUpRight } from "react-icons/bs";
import { useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import StickyServices from "./StickyServices";

function SectionPortafolio() {
  const navigate = useNavigate();
  // Un solo controls para todos los componentes
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        controls.start(entry.isIntersecting ? "visible" : "hidden");
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <Container ref={ref} fluid id="portfolio" className="d-flex flex-column m-0 p-0">
      {/* Pasa el mismo controls al hijo */}
      <PortfolioTitle animateControls={controls} />

      <Row className="img-table-container p-0">
        {/* FOTO ANIMADA */}

        {/* LISTA DE SERVICIOS */}
        <StickyServices animateControls={controls} />
      </Row>

      <Row
        className="text-center buttonSectionPortfolio align-items-center"
        style={{ height: "100px" }}
      >
        <Col>
          <Button
              className="button-portfolio"
              onClick={() => navigate("/portfolio")}
              aria-label="Ir a la página Portfolio"
            >
              Portfolio
              <BsArrowUpRight
                className="arrow-icon"
                aria-hidden="true"
                style={{ color: "black" }}
              />
            </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionPortafolio;
