import { useState } from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./SectionCardsStyles.css";
import '../../App.css';

function CustomCard({ image, title, text }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="card-wrapper">
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="motion-card"
            >
                <Card
                    className="text-white"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{ width: '25rem', border: 'none' }}
                >
                    <Card.Img
                        src={image}
                        alt="Card image"
                        className="card-img-custom"
                    />
                    <Card.ImgOverlay
                        className="d-flex custom-card flex-column justify-content-end align-items-center"
                        style={{
                            opacity: hovered ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                            boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)"
                        }}
                    >
                        <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: hovered ? 0 : 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card.Title className="text-center">{title}</Card.Title>
                            <Card.Text className="text-center">{text}</Card.Text>
                        </motion.div>
                    </Card.ImgOverlay>
                </Card>
            </motion.div>
        </div>
    );
}

export default CustomCard;
