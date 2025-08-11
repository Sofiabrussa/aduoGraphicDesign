import "./DesarrolloStyled.css";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";

function Desarrollo() {
    return (
        <div id="section-desarrollo" className="container-fluid p-0">
            
            {/* Imagen de cabecera */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="desarrollo-header"
            >
                <img 
                    src={`/redesSociales/imagen.webp`} 
                    alt="Diseño y desarrollo web"
                    className="desarrollo-img"
                />
            </motion.div>

            {/* Texto y botón */}
            <div className="d-flex flex-column align-items-center justify-content-center text-center text-section">
                <div className="row w-100 d-flex justify-content-center">
                    <div className="col-12 col-md-8 mb-5">
                        <Card.Title className="mb-3">
                            Diseño y <br className="d-md-none" />
                            <span className="span-violeta">desarrollo web</span>
                        </Card.Title>
                        <Card.Text className="card-text-servicios mx-auto">
                            Diseñamos y desarrollamos tu página web a tu medida. 
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
            </div>
        </div>
    )
}

export default Desarrollo;
