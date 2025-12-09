import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "./CustomCard";

function SectionCards() {
    const cards = [
        { image: "/imgCards/valu.webp", title: "Valentina Tajchman", text: "Diseñadora gráfica" },
        { image: "/imgCards/jose.webp", title: "Josefina Bas", text: "Diseñadora gráfica" },
        { image: "/imgCards/cat.jpg", title: "Nombre 3", text: "Rol" },
        { image: "/imgCards/cat2.jpg", title: "Nombre 4", text: "Rol" },
        { image: "/imgCards/cat3.jpg", title: "Nombre 5", text: "Rol" },
        { image: "/imgCards/cat4.jpg", title: "Nombre 6", text: "Rol" },
        { image: "/imgCards/cat5.jpg", title: "Nombre 7", text: "Rol" },
        { image: "/imgCards/cat7.jpg", title: "Nombre 8", text: "Rol" },
    ];

    const topRow = cards.slice(0, 5);   // primeras 5
    const bottomRow = cards.slice(5);   // el resto

    return (
        <Container fluid id="SectionCards" className="cards-section">

            {/* ===== FILA 1: 5 CARDS ===== */}
            <Row className="g-4 justify-content-center">
                {topRow.map((card, index) => (
                    <Col 
                        key={index}
                        xs={12} sm={6} md={4} lg={2}  /* Ajuste para ubicar 5 en fila en desktop */
                        className="d-flex justify-content-center"
                    >
                        <CustomCard {...card} />
                    </Col>
                ))}
            </Row>


            {/* ===== FILA 2: LAS QUE QUEDAN CENTRADAS ===== */}
            <Row className="g-4 justify-content-center mt-4">
                {bottomRow.map((card, index) => (
                    <Col 
                        key={index}
                        xs={12} sm={6} md={4} lg={2}
                        className="d-flex justify-content-center"
                    >
                        <CustomCard {...card} />
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default SectionCards;



