import "./RedesStyled.css";
import { motion } from "framer-motion";

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
                        <h1>Redes soc.</h1>
                        <p>
                            Diseñamos y desarrollamos tu página web a tu medida.
                            Ya sea que estés buscando una landing page, una web sencilla o
                            un e-commerce. Diseñar webs se nos da genial!
                        </p>
                        <button className="btn-custom">
                            quiero + info
                        </button>
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
        </section>

    )
}

export default Redes;