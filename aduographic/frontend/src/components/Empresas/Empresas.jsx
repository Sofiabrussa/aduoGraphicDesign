import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaPalette, FaCamera, FaGlobe } from 'react-icons/fa';
import './EmpresasStyles.css';

const partners = [
  { name: 'Empresa 1', icon: FaBriefcase },
  { name: 'Empresa 2', icon: FaGlobe },
  { name: 'Empresa 3', icon: FaPalette },
  { name: 'Empresa 4', icon: FaCamera }
  
];

const Empresas = () => {
  return (
    <div id="empresas" className="section-empresas">
      <Container fluid className="py-5 px-4 px-md-5">
        <Row className="justify-content-center mb-5">
          <Col xs={12} lg={8} className="text-center">
            <p className="section-label">Confiaron en nosotras</p>
            <h2 className="section-title">Empresas con las que trabajamos</h2>
          </Col>
        </Row>

        <Row className="justify-content-center g-5">
          {partners.map((partner) => {
            const IconComponent = partner.icon;
            return (
              <Col key={partner.name} xs={6} md={4} lg={2} className="text-center">
                <div className="icon-wrapper">
                  <IconComponent className="partner-icon" />
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Empresas;
