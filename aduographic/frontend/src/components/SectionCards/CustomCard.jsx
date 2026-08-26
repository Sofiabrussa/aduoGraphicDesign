import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./SectionCardsStyles.css";

function CustomCard({ image, title, text, linkedin, index = 0 }) {
    return (
    <motion.div
      className="card-wrapper"

      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut", delay: index * 0.2 },
      }}
      viewport={{ once: false, amount: 0.3 }}

      whileHover={{ scale: 1.03, transition: { duration: 0.25, ease: "easeOut" } }}
    >
      <Card className="custom-card-container">
        <Card.Img
          src={image}
          alt={title}
          className="card-img-custom"
        />

        <Card.ImgOverlay className="card-overlay">
          <div className="card-text-wrapper">
            <Card.Title>{title}</Card.Title>
            <Card.Text dangerouslySetInnerHTML={{ __html: text }} />

            {linkedin && (
              <Card.Text 
                as="a"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-text"
              >
                LinkedIn
              </Card.Text>
            )}
          </div>
        </Card.ImgOverlay>
      </Card>
    </motion.div>
  );
}

export default CustomCard;



