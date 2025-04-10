import "./DesarrolloStyled.css";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import { motion } from "framer-motion";
function Desarrollo() {
    return (
        <div
            id="section-desarrollo"
            className="container-fluid d-flex flex-column align-items-center justify-content-center text-center min-vh-60"
        >
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-12 col-md-8 mb-5">
                    <Card.Title className="mb-3 tm-titulo">
                        Diseño y <br className="d-md-none" />
                        <span className="title-span">desarrollo web</span>
                    </Card.Title>
                    <Card.Text className="mb-4">
                        Diseñamos y desarrollamos tu página web a tu medida.
                        Ya sea que estés buscando una landing page, una web sencilla o un e-commerce.
                        ¡Diseñar webs se nos da reee cool!
                    </Card.Text>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
                            <Button>quiero + info</Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}
export default Desarrollo;