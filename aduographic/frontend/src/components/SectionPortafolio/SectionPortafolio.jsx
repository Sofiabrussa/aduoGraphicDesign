import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"
import PortfolioTitle from './PortfolioTitle';
import ServicesList from './ServicesList';
import { Col, Container, Row } from 'react-bootstrap'
import Button from "../Button/Button";
import { BsArrowUpRight } from "react-icons/bs";

function SectionPortafolio() {
  return (
    <Container fluid id="portfolio" className="d-flex flex-column m-0 p-0">
      <PortfolioTitle />
      <Row className="img-table-container p-0">
        <Col
          md={6}
          className="p-0 img-wrapper"
        >
          <div 
            className="img-component"
            style={{
              backgroundImage: 'url("/imgPortfolio/imagenservicios.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Col>
        <ServicesList />
      </Row>
      <Row className="text-center buttonSectionPortfolio align-items-center" style={{ height: '100px' }}>
        <Col>
          <a href="https://www.behance.net/aduoestudiocreativo" target="_blank" rel="noopener noreferrer">
            <Button className='button-portfolio' > Portfolio <BsArrowUpRight className="arrow-icon"  style={{ color: "black" }} /> </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionPortafolio;