import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "./CustomCard";

function SectionCards() {
    const cards = [
        { image: "/imgCards/jopi.webp", title: "JOSEFINA BAS", text: "Co-creadora & <br/> Diseñadora Gráfica", linkedin: "https://www.linkedin.com/in/ad%C3%BAo/" },
        { image: "/imgCards/valu.webp", title: "VALENTINA TAJCHMAN", text: "Co-creadora & <br/> Diseñadora Gráfica", linkedin: "https://www.linkedin.com/in/valentina-tajchman-057011238/ " },
        { image: "/imgCards/zoe.webp", title: "ZOE MALVAREZ", text: "Estratega & <br/> Marketing Digital", linkedin: "https://www.linkedin.com/in/zoe-malvarez-48069921a/ " },
        { image: "/imgCards/jo.webp", title: "JOSEFINA GRAGLIA", text: "Estratega & <br/> Marketing Digital", linkedin: "https://www.linkedin.com/in/josefinagraglia/ " },
        { image: "/imgCards/chica.webp", title: "JOAQUINA GONZALEZ ", text: "Diseñadora Gráfica & <br/> Diseño de Social Media", linkedin: "https://www.linkedin.com/in/joaquina-gonz%C3%A1lez/ " },
        { image: "/imgCards/guada.webp", title: "GUADALUPE AYARZA", text: "Diseñadora Gráfica & <br/> Diseño de Social Media", linkedin: " https://www.linkedin.com/in/guadalupe-ayarza-romero-8bbb02233/  " },
        { image: "/imgCards/maria.webp", title: "MARIA FERRONI", text: "Creadora de Contenido & <br/> Storytelling", linkedin: "https://www.linkedin.com/in/maria-ferroni-270877252/" },
        { image: "/imgCards/caro.webp", title: "CAROLINA HERRERA", text: "Creadora de Contenido & <br/> Storytelling", linkedin: "https://www.linkedin.com/in/josefina" },
    ];

    const topRow = cards.slice(0, 5);  
    const bottomRow = cards.slice(5);   

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



