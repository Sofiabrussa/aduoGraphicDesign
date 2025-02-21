import { useState } from "react";
import { Card } from "react-bootstrap";
import "./SectionCardsStyles.css";  // Asegúrate de que los estilos estén aquí
import '../../App.css'; 


function CustomCard({ image, title, text }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Card
            className="text-white"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ width: '25rem', border: 'none'  }}
        >
            <Card.Img
                src={image}
                alt="Card image"
            />
            <Card.ImgOverlay
                className="d-flex custom-card flex-column justify-content-end align-items-center"
                style={{
                    opacity: hovered ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            >
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default CustomCard;

