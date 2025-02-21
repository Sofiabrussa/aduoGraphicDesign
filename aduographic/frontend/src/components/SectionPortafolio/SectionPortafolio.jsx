import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"
import PortfolioTitle from './PortfolioTitle';
import ServicesList from './ServicesList';
import { Col, Container, Row } from 'react-bootstrap'
import Button from "../button/button";

function SectionPortafolio() {
  return (
    <Container fluid id="portfolio" className="d-flex flex-column m-0 p-0">
      <PortfolioTitle />

      <Row className="img-table-component my-4 p-0">
        <Col
          className="col-12 col-md-6 d-flex justify-content-center align-items-center img-component"
          style={{
            backgroundImage: 'url("/imgPortfolio/imagenservicios.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <ServicesList />
      </Row>
      <Row className="text-center mt-2 mb-5 buttonSectionPortfolio">
        <Col>
          <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
            <Button> Portfolio </Button>
          </a>
        </Col>
      </Row>
    </Container>
  );
}


export default SectionPortafolio;