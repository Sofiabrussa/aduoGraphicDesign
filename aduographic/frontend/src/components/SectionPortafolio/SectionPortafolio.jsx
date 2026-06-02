import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css";
import { Col, Container, Row } from 'react-bootstrap';
import Button from "../Button/Button";
import { BsArrowUpRight } from "react-icons/bs";
import { useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import StickyServices from "./StickyServices";

function SectionPortafolio() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <Container ref={ref} fluid id="portfolio" className="m-0 p-0">
      <StickyServices animateControls={controls} />

      <Row className="text-center buttonSectionPortfolio align-items-center py-5">
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
            />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionPortafolio;