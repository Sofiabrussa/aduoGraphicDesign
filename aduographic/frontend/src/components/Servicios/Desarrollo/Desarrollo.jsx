import "./DesarrolloStyled.css";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
import ScrollCurveVertical from "../../SectionNosotras/ScrollCurveVertical";

function Desarrollo() {
    return (
        <section id="section-desarrollo">
            <div className="desarrollo-curve-right">
                <ScrollCurveVertical />
            </div>
            <div className="desarrollo-wrapper">

                <div className="desarrollo-text">
                    <Card.Title className="mb-3 desarrollo-titulo">
                        Diseño y <br className="d-md-none" />
                        <span className="span-violeta">desarrollo web</span>
                    </Card.Title>

                    <Card.Text className="card-text-servicios mx-auto">
                        Diseñamos y desarrollamos tu página web a tu medida. <br />
                        Ya sea que estés buscando una landing page, una web sencilla o un e-commerce.
                        <br/>
                        <strong>¡Diseñar webs se nos da reee cool!</strong>
                    </Card.Text>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
                            <Button className="button-nosotras">quiero + info</Button>
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

export default Desarrollo;

