import { motion } from "framer-motion";
import { Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const ServicesList = ({ animateControls }) => {

  const services = [
    { label: "01. Branding", anchor: "#branding" },
    { label: "02. Redes", anchor: "#sectionRedes" },
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
              <motion.tr
                key={index}
                className="d-flex flex-grow-1 w-100 service-item"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2 + index * 0.15, duration: 0.5 }
                  }
                }}
                initial="hidden"
                animate={animateControls}
              >
                <HashLink
                  smooth
                  to={`/servicios${service.anchor}`}
                  className="d-flex align-items-center border-0 w-100 card-text text-decoration-none"
                  style={{ color: "inherit" }}
                >
                  <td className="w-100 d-flex align-items-center">
                    {service.label}
                  </td>
                </HashLink>
              </motion.tr>
            ))}

          </tbody>
        </table>
      </div>
    </Col>
  );
};

export default ServicesList;
