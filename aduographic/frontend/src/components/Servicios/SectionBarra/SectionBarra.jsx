import "./SectionBarraStyled.css";
import Branding from '../Branding/Branding';
import Fotografia from "../Fotografia/Fotografia";
import Redes from "../Redes/Redes";
import Contacto from "../../Contacto/Contacto.jsx"
import Desarrollo from "../Desarrollo/Desarrollo.jsx";
import { Card } from "react-bootstrap";

function SectionBarra() {
    return (
        <>
            <div id="sectionBarra" className="container-fluid">
                <div className="row justify-content-center w-100">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <Card.Title className="mb-3 mb-md-4">
                                <a href="/servicios#branding" className="section-link">
                                    Branding
                                </a>
                            </Card.Title>
                            <Card.Title className="mb-3 mb-md-4">
                                <a href="/servicios#sectionRedes" className="section-link">
                                    Gestión de Redes
                                </a>
                            </Card.Title>
                            <Card.Title className="mb-3 mb-md-4">
                                <a href="/servicios#section-fotografia" className="section-link">
                                    Contenido y Fotografía
                                </a>
                            </Card.Title>
                            <Card.Title className="mb-3 mb-md-4">
                                <a href="/servicios#section-desarrollo" className="section-link">
                                    Diseño y Desarrollo Web
                                </a>
                            </Card.Title>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Branding />
            <Redes />
            <Fotografia />
            <Desarrollo /> */}
            <Contacto />
        </>
    );
}

export default SectionBarra;
