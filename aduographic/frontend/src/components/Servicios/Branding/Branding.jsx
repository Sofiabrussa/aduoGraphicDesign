import { motion } from "framer-motion";
import "./BrandingStyled.css";
import { Card } from "react-bootstrap";
import '../../../App.css';
import Button from "../../Button/Button";


const Branding = () => {
  return (
    <section  className="branding-section py-5" id="branding">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column h-100 gap-4">
              <motion.div
                className="content-card p-2 flex-grow-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card.Title className=" mt-2 title-span" >Branding</Card.Title>
                <Card.Text className="p-2 card-text-servicios" style={{ maxWidth: "450px" }}>
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
                    <Button >quiero + info </Button>
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                className="image-card"
                style={{
                  backgroundImage: 'url("/brading/23.jpg")',
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.03 }}
              />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <motion.div
              className="right-image-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/brading/24.jpg"
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