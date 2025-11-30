import { Card } from 'react-bootstrap'
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./SectionPortafolioStyles.css";

const PortfolioTitle = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
        else controls.start("hidden");
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: "easeOut" }
        }
      }}
      initial="hidden"
      animate={controls}
    >
      <Card className='sectionPortfolioText text-center'>
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


