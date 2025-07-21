import { motion } from "framer-motion";
import { Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const ServicesList = () => {
  const services = [
    { label: "01. Branding", anchor: "#branding" },
    { label: "02. Contenido", anchor: "#sectionRedes" },
    { label: "03. Fotografía", anchor: "#section-fotografia" },
    { label: "04. Diseño Web", anchor: "#section-desarrollo" }
  ];

  return (
    <Col md={6} className="services-list-column p-0">
      <div className="table-container h-100">
        <table
          className="table table-bordered portfolio-servicios-lista w-100 m-0"
          style={{ borderWidth: "0.5px", borderColor: "black", borderStyle: "solid", height: "100%" }}
        >
          <tbody className="d-flex flex-column h-100 p-0 m-0">
            {services.map((service, index) => (
              <tr key={index} className="d-flex flex-grow-1 w-100 service-item">
                <HashLink
                  smooth
                  to={`/servicios${service.anchor}`}
                  className="d-flex align-items-center border-0 w-100 card-text text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <motion.td
                    whileHover={{ rotate: 3, fontStyle: "italic" }}
                    transition={{ duration: 0.3 }}
                    className="w-100 d-flex align-items-center"
                  >
                    {service.label}
                  </motion.td>
                </HashLink>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Col>
  );
};

export default ServicesList;
