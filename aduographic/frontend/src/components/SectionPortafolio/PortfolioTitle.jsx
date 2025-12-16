import { Card } from 'react-bootstrap';
import { motion } from "framer-motion";
import "./SectionPortafolioStyles.css";

const PortfolioTitle = ({ animateControls }) => { // Recibe animateControls
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: "easeOut" }
        }
      }}
      initial="hidden"
      animate={animateControls} 
    >
      <Card className='sectionPortfolioText text-center border-0 shadow-0'>
        <Card.Title className='sectionportfoliotitle'>
          <span className="span-violeta">branding</span> y{" "}
          <span className="span-violeta">diseño</span> para <br />
          que tu esencia explote en cada detalle.
        </Card.Title>
      </Card>
    </motion.div>
  );
};

export default PortfolioTitle;



