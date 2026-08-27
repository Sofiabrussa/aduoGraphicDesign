import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./BrandingStyled.css";
import { Card } from "react-bootstrap";
import '../../../App.css';
import Button from "../../Button/Button";

// Rotación de "reposo" de cada tarjeta, como fotos tiradas sobre una mesa
const REST_ROTATION = {
  text: -3,
  small: 2,
  big: -1,
};

const CARD_TRANSITION = { type: "spring", stiffness: 240, damping: 15, mass: 0.9 };

const Branding = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [hovered, setHovered] = useState(null); // 'text' | 'small' | 'big' | null

  const cardState = (key, delay = 0) => {
    const isHovered = hovered === key;
    const isDimmed = hovered !== null && !isHovered;
    const rest = REST_ROTATION[key];

    return {
      initial: { opacity: 0, y: -60, rotate: rest * 2.5 },
      animate: inView
        ? {
            opacity: isDimmed ? 0.85 : 1,
            y: 0,
            rotate: isHovered ? 0 : rest,
            scale: isHovered ? 1.03 : 1,
          }
        : { opacity: 0, y: -60, rotate: rest * 2.5, scale: 1 },
      transition: { ...CARD_TRANSITION, delay: inView ? delay : 0 },
    };
  };

  return (
    <section ref={sectionRef} className="branding-section py-5" id="branding">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column h-100 gap-4">
              <motion.div
                className="content-card p-2 flex-grow-1"
                onMouseEnter={() => setHovered("text")}
                onMouseLeave={() => setHovered(null)}
                {...cardState("text", 0)}
              >
                <Card.Title className=" mt-2 title-span" >Branding</Card.Title>
                <Card.Text className="p-2 card-text-servicios" style={{ maxWidth: "330px" }}>
                  En A Dúo no creamos solo un logo lindo, diseñamos marcas completas
                  que cuentan historias. Lo mejor
                  que sabemos hacer.
                  <br />
                  <strong>Mirá todo lo que incluye:</strong>
                </Card.Text>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pb-4"
                >
                  <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
                    <Button className="button-nosotras">quiero + info </Button>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                className="image-card"
                style={{
                  backgroundImage: 'url("/brading/23.webp")',
                }}
                onMouseEnter={() => setHovered("small")}
                onMouseLeave={() => setHovered(null)}
                {...cardState("small", 0.12)}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <motion.div
              className="right-image-container"
              onMouseEnter={() => setHovered("big")}
              onMouseLeave={() => setHovered(null)}
              {...cardState("big", 0.24)}
            >
              <img
                src="/brading/24.webp"
                alt="Branding showcase"
                className="img-fluid rounded-custom"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Branding;
