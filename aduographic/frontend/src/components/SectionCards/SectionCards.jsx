import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import CustomCard from "./CustomCard";

function SectionCards() {
    return (
        <Container fluid id="SectionCards" className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="d-flex justify-content-center gap-4">
                <Col md="auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <CustomCard image="/imgCards/valu.webp" title="Valentina Tajchman" text="Diseñadora gráfica" />
                    </motion.div>
                </Col>
                <Col md="auto">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <CustomCard image="/imgCards/jose.webp" title="Josefina Bas" text="Diseñadora gráfica" />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
}

export default SectionCards;




