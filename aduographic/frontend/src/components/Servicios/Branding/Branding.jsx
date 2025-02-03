import { motion } from "framer-motion";
import "./BrandingStyled.css";
const Branding = () => {
  return (
    <section className="branding-section py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Left Column */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column h-100 gap-4">
              {/* Text Content */}
              <motion.div 
                className="content-card p-4 flex-grow-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h1 className="mb-4">Branding</h1>
                <p className="mb-4">
                  En A Dúo no creamos solo un logo lindo, diseñamos marcas completas
                  que cuentan historias, inspiran y conectan con su audiencia. Lo mejor
                  que sabemos hacer.
                  <br />
                  Mirá todo lo que incluye:
                </p>
                <motion.button 
                  className="btn-custom"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  quiero + info
                </motion.button>
              </motion.div>
              
              {/* Image Card */}
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
          {/* Right Column */}
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