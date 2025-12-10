import { useState } from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./SectionCardsStyles.css";

function CustomCard({ image, title, text, linkedin }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div 
            className="card-wrapper"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.25 }}
        >
            <Card
                className="custom-card-container"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Card.Img 
                    src={image} 
                    alt={title}
                    className="card-img-custom"
                />

                <Card.ImgOverlay 
                    className="card-overlay"
                    style={{ opacity: hovered ? 1 : 0 }}
                >
                    <div className="card-text-wrapper">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{text}</Card.Text>

                        {linkedin && (
                            <Card.Text 
                                as="a"
                                href={linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkedin-text"
                            >
                                LinkedIn
                            </Card.Text>
                        )}
                    </div>
                </Card.ImgOverlay>
            </Card>
        </motion.div>
    );
}

export default CustomCard;


