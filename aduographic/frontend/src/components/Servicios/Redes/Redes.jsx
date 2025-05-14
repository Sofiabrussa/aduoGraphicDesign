import "./RedesStyled.css";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";

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
                        <Card.Text style={{ maxWidth: "450px" }}>
                            No se trata solo de subir <strong>posteos. </strong>
                            Se trata de crear una <strong>presencia</strong> que te represente, te diferencie y conecte con tu comunidad.
                            <br/>En <strong> A Dúo </strong> gestionamos tus redes con estrategia, diseño y contenido pensado para contar lo que hacés de forma <strong> auténtica </strong> y alineada a tu marca.
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