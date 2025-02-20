import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import "./SectionCardsStyles.css";  // Asegúrate de que los estilos estén aquí


function CustomCard({ image, title, text }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Col xs={12} md={4} lg={5} className="d-flex justify-content-center">
            <Card 
                className="text-white position-relative custom-card"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Card.Img
                    src={image}
                    alt="Card image"
                    className="card-img-custom"
                />
                <Card.ImgOverlay 
                    className="d-flex flex-column justify-content-end align-items-center"
                    style={{
                        opacity: hovered ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
}

export default CustomCard;

