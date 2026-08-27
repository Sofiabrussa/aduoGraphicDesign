import { useEffect, useRef } from "react";
import "./RedesStyled.css";
import { motion, useAnimation } from "framer-motion";
import { Card } from "react-bootstrap";
import Button from "../../Button/Button";
import ScrollCurveVertical from "../../SectionNosotras/ScrollCurveVertical";

const textVariants = {
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.92,
    transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: 120,
    scale: 0.92,
    transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

function Redes() {
  const sectionRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        controls.start(entry.isIntersecting ? "visible" : "hidden");
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section ref={sectionRef} className="social-media-section" id="sectionRedes">
      <ScrollCurveVertical />
      <div className="container">
        <div className="content-wrapper">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
            className="text-content"
          >
            <Card.Title className="title-span mb-3">Redes soc.</Card.Title>
            <Card.Text style={{ maxWidth: "450px" }} className="card-text-servicios">
              <p>
                No se trata solo de subir <strong>posteos. </strong> Se trata de
                crear una <strong>presencia</strong> que te represente, te
                diferencie y conecte con tu comunidad.
              </p>
              <p className="mb-1">
                En <strong> A Dúo </strong> gestionamos tus redes con estrategia,
                diseño y contenido pensado para contar lo que hacés de forma{" "}
                <strong> auténtica </strong> y alineada a tu marca.
              </p>
            </Card.Text>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://walink.co/9f29a0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="button-nosotras">quiero + info</Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="image-content"
            style={{
              backgroundImage: 'url("/redesSociales/redessociales.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Redes;
