import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "./CustomCard";

function SectionCards() {
    return (
        <Container fluid id="SectionCards" className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="d-flex justify-content-center gap-4">
                <Col md="auto">
                    <CustomCard image="/imgCards/valu.png" title="Valentina Tajchman" text="Diseñadora gráfica" />
                </Col>
                <Col md="auto">
                    <CustomCard image="/imgCards/jose.png" title="Josefina Bas" text="Diseñadora gráfica" />
                </Col>
            </Row>
        </Container>
    );
}

export default SectionCards;




