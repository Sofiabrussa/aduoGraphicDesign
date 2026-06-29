import { Container, Row, Col } from 'react-bootstrap';
import './EmpresasStyles.css';

const partners = [
  { name: 'Empresa 1', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608048/Sin_t%C3%ADtulo-3-01_ihakmo.png' },
  { name: 'Empresa 2', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608048/Sin_t%C3%ADtulo-3-02_ghwejp.png' },
  { name: 'Empresa 3', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608048/Sin_t%C3%ADtulo-3-07_gm2mbd.png' },
  { name: 'Empresa 4', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608048/Sin_t%C3%ADtulo-3-09_eispwp.png' },
  { name: 'Empresa 5', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608048/Sin_t%C3%ADtulo-3-10_maavy6.png' },
  { name: 'Empresa 6', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608048/Sin_t%C3%ADtulo-3-04_nolhjv.png' },
  { name: 'Empresa 7', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608048/Sin_t%C3%ADtulo-3-06_jfenpj.png' },
  { name: 'Empresa 8', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608048/Sin_t%C3%ADtulo-3-08_hnygqi.png' },
  { name: 'Empresa 9', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608047/Sin_t%C3%ADtulo-3-03_rk5hdd.png' },
  { name: 'Empresa 10', icon: 'https://res.cloudinary.com/dbbyng05e/image/upload/v1778608047/Sin_t%C3%ADtulo-3-05_s3t5tg.png' },
  
];

const Empresas = () => {
  return (
    <div id="empresas" className="section-empresas">
      <Container fluid className="py-5 px-4 px-md-5">
        <Row className="justify-content-center mb-5">
          <Col xs={12} lg={8} className="text-center">
            <p className="section-label card-text">Confiaron en nosotras</p>
            <h2 className="section-title card-title">Empresas con las que trabajamos</h2>
          </Col>
        </Row>

        <Row className="justify-content-center g-5">
          {partners.map((partner) => (
            <Col key={partner.name} xs={6} md={4} lg={2} className="text-center">
              <div className="icon-wrapper">
                <img src={partner.icon} alt={partner.name} className="partner-icon" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Empresas;
