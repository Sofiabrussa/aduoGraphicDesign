import "./DesarrolloStyled.css";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";

function Desarrollo() {
    return (
        <section id="section-desarrollo">
            <div className="desarrollo-wrapper">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="desarrollo-header"
                >
                    <img 
                        src="/redesSociales/imagen.webp"
                        alt="Diseño y desarrollo web"
                        className="desarrollo-img"
                    />
                </motion.div>

                <div className="desarrollo-text">
                    <Card.Title className="mb-3">
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
                            <Button>quiero + info</Button>
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}

export default Desarrollo;

