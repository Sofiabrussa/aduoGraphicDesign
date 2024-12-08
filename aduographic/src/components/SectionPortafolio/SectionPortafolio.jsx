import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"
import { Link } from 'react-router-dom';


function SectionPortafolio() {
    return (
        <div className="portfolio-component d-flex flex-column container-fluid">
            {/* Título */}
            <div className="portfolio-titulo row justify-content-center align-items-center text-center" style={{ flex: "3" }}>
                <h1> <span className="portfolio-titulo-color">branding</span> y {" "} <span className="portfolio-titulo-color">diseño</span> pensados para que <br /> <span className="portfolio-titulo-negrita">tu esencia explote</span> en cada detalle. </h1>
            </div>

            {/* Servicios */}
            <div className="portfolio-servicios" style={{ flex: "6" }}>
                <div className="portfolio-servicios-img ">
                </div>
                {/* Lista de servicios */}
                <div className="portfolio-servicios-lista">
                    <ul className="list-group">
                        <li className="list-group-item">01.&nbsp;&nbsp;&nbsp;&nbsp;Branding</li>
                        <li className="list-group-item">02.&nbsp;&nbsp;&nbsp;&nbsp;Contenido</li>
                        <li className="list-group-item">03.&nbsp;&nbsp;&nbsp;&nbsp;Fotografía</li>
                        <li className="list-group-item">04.&nbsp;&nbsp;&nbsp;&nbsp;Diseño Web</li>
                    </ul>
                </div>
            </div>

            {/* Botón */}
            <div className="portfolio-boton row justify-content-center" style={{ flex: "3" }}>
                <Link to="https://www.behance.net/aduographicdesign" target="_blank" className="portfolio-boton-estilo btn btn-outline-dark">
                    Ver Portfolio ↗
                </Link>
            </div>
        </div>



    )
}

export default SectionPortafolio;