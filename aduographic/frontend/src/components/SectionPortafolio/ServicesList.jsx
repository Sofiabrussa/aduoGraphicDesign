import { motion } from "framer-motion";
import { Col } from 'react-bootstrap';

const ServicesList = () => {
  const services = [
    "01. Branding",
    "02. Contenido",
    "03. Fotografía",
    "04. Diseño Web"
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
                <motion.td
                  className="d-flex align-items-center border-0 w-100 card-text"
                  whileHover={{ rotate: 3, fontStyle: "italic" }}
                  transition={{ duration: 0.3 }}
                >
                  {service}
                </motion.td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Col>
  );
};

export default ServicesList;