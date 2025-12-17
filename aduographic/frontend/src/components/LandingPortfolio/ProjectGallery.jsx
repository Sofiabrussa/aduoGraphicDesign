import { motion } from "framer-motion";
import "./ProjectGallery.css";

export default function ProjectGallery({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="project-gallery">
      {images.map((src, i) => (
        <motion.div
          key={i}
          className="gallery-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <img src={src} alt="" loading="lazy" />
        </motion.div>
      ))}
    </div>
  );
}
