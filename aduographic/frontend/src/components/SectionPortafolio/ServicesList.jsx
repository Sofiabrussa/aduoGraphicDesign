import { motion } from "framer-motion";

const ServicesList = () => {
  const services = [
    "01. Branding",
    "02. Contenido",
    "03. Fotografía",
    "04. Diseño Web"
  ];

  return (
    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-0">
      <div className="w-100 h-100">
        <table
          className="table table-bordered portfolio-servicios-lista w-100 p-0 m-0"
          style={{ borderWidth: "0.5px", borderColor: "black", borderStyle: "solid", height: "100%" }}
        >
          <tbody className="d-flex flex-column h-100 p-0 m-0">
            {services.map((service, index) => (
              <tr key={index} className="d-flex flex-grow-1 w-100 service-item">
                <motion.td
                  className="d-flex align-items-center border-0 w-100"
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
    </div>
  );
};

export default ServicesList;