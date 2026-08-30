import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterStyles.css';

function Footer() {
    return (
        <Container fluid className="bg-dark p-0" id="Footer">
            <Row className="g-1 align-items-center py-2 mx-0">
                <Col xs={12} sm={6} md={2} className="d-flex align-items-center justify-content-center logo-col">
                    <Image src="/footer/Identidad2024-footer.png" alt="Logo de mi empresa" className="footer-logo" />
                </Col>
                <Col xs={4} sm={2} md={1} className="d-flex align-items-center justify-content-center py-1">
                    <i className="fab fa-instagram text-white" style={{ fontSize: '3rem' }}></i>
                </Col>
                <Col xs={4} sm={2} md={1} className="d-flex align-items-center justify-content-center py-1">
                    <i className="fab fa-behance text-white" style={{ fontSize: '3rem' }}></i>
                </Col>
                <Col xs={4} sm={2} md={1} className="d-flex align-items-center justify-content-center py-1">
                    <i className="fab fa-whatsapp text-white" style={{ fontSize: '3rem' }}></i>
                </Col>
                <Col xs={6} sm={6} md={3} className="py-1">
                    <ListGroup variant="flush" className="footer-links align-items-center">
                        <ListGroup.Item as={HashLink} smooth to="/#inicio" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Inicio</ListGroup.Item>
                        <ListGroup.Item as={HashLink} smooth to="/#portfolio" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Servicios</ListGroup.Item>
                        <ListGroup.Item as={HashLink} smooth to="/#nosotras" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Nosotras</ListGroup.Item>
                        <ListGroup.Item as={HashLink} to="/portfolio" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Portfolio</ListGroup.Item>
                        <ListGroup.Item as={HashLink} smooth to="/#contacto" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Contacto</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={6} sm={6} md={3} className="py-1">
                    <ListGroup variant="flush" className="footer-links align-items-center">
                        <ListGroup.Item as={HashLink} smooth to="/servicios#branding" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Branding</ListGroup.Item>
                        <ListGroup.Item as={HashLink} smooth to="/servicios#sectionRedes" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Contenido</ListGroup.Item>
                        <ListGroup.Item as={HashLink} smooth to="/servicios#section-fotografia" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Fotografía</ListGroup.Item>
                        <ListGroup.Item as={HashLink} smooth to="/servicios#section-desarrollo" className="bg-transparent text-white border-0 p-0 pb-1 text-decoration-none d-block">Diseño Web</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            <div className="marquee mb-0">
                <div className="track">
                    <div className="content text-white">
                        <span>A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO</span>
                        <span> A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO</span>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Footer;