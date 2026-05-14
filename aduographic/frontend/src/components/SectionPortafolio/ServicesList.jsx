import { motion } from "framer-motion";
import { Col } from 'react-bootstrap';
import { Accordion } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';

const services = [
  { id: "01",
    title: "Branding",
    content: "Creamos identidades visuales sólidas con sistemas coherentes que potencian el reconocimiento de tu marca en el mercado."
  },
  {
    id: "02",
    title: "Redes Sociales",
    content: "Estrategia de contenido y diseño para que tu presencia digital sea consistente, atractiva y generadora de conexiones reales."
  },
  {
    id: "03",
    title: "Fotografía",
    content: "Imágenes con estilo propio y composición estratégica, pensadas para potenciar tu narrativa visual y diferenciarte."
  },
  {
    id: "04",
    title: "Diseño Web",
    content: "Experiencias digitales modernas, funcionales y orientadas a conversión. UX/UI pensado para que cada pixel cuente."
  }
];

function ServicesList() {
return (
  <Col md={6} className="services-list-column p-0">
      
    <motion.div className="accordion-container w-100 h-100">
      <Accordion defaultActiveKey="0" flush className="custom-accordion">
        {services.map((service, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className="accordion-item-custom"
          >
            <Accordion.Header>
              {service.title}
            </Accordion.Header>

            <Accordion.Body>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                <p>
                  {service.content}
                </p>
                <HashLink
                  smooth
                  to={`/servicios${service.anchor}`}
                  className="accordion-link"
                >
                  Ver más
                </HashLink>
              </motion.div>

            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </motion.div>

  </Col>
);
}

export default ServicesList;
