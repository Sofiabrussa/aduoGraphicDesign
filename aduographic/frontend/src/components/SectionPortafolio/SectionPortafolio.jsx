import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"
import PortfolioTitle from './PortfolioTitle';
import ServicesList from './ServicesList';

function SectionPortafolio() {
    return (
      <div id="portfolio" className="container-fluid d-flex flex-column m-0 p-0 w-100">
        <PortfolioTitle />
        
        <div className="row img-table-component my-4 p-0">
          <div 
            className="col-12 col-md-6 d-flex justify-content-center align-items-center img-component"
            style={{ 
              backgroundImage: 'url("/imgPortfolio/imagenservicios.png")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center' 
            }}
          />
          <ServicesList />
        </div>
        {/* Componente boton */}
        <div className="d-flex justify-content-center align-items-center sectionButtonPortoflio m-4 p-4">
                <a href="https://www.behance.net/aduographicdesign" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-dark buttonSectionPortfolio rounded-4">
                        Ver Portfolio↗
                    </button>
                </a>
            </div>
      </div>
    );
  }
 

export default SectionPortafolio;