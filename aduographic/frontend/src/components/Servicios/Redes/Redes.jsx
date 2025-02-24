import "./RedesStyled.css";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import Button from "../../button/button";

function Redes() {
    return (
        <section className="social-media-section" id="sectionRedes">
            <div className="container">
                <div className="content-wrapper">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-content"
                    >
                        <Card.Title className="title-span">Redes soc.</Card.Title>
                        <Card.Text>
                            Diseñamos y desarrollamos tu página web a tu medida.
                            Ya sea que estés buscando una landing page, una web sencilla o
                            un e-commerce. Diseñar webs se nos da genial!
                        </Card.Text>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
                                <Button >quiero + info </Button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="image-content"
                        style={{ backgroundImage: 'url("/redesSociales/redessociales.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                </div>

            </div>
        </section >

    )
}

export default Redes;