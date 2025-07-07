import "./SectionBarraStyled.css";
import Branding from '../Branding/Branding';
import Fotografia from "../Fotografia/Fotografia";
import Redes from "../Redes/Redes";
import Contacto from "../../Contacto/Contacto.jsx"
import Desarrollo from "../Desarrollo/Desarrollo.jsx";
import Imgdesa from "../ImgDesa/Imgdesa.jsx";
import NavBar from "../../NavBar/NavBar.jsx"
import { Link } from "react-scroll";
import { Card } from "react-bootstrap";

function SectionBarra() {
    return (
        <>
            <NavBar />
            <div id="sectionBarra" className="container-fluid">
                <div className="row justify-content-center w-100">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <Card.Title className="mb-3 mb-md-4">
                                <Link
                                    to="branding"
                                    smooth={true}
                                    duration={500}
                                    className="section-link"
                                >
                                    Branding
                                </Link>
                            </Card.Title>
                            <Card.Title className="mb-3 mb-md-4">
                                <Link
                                    to="sectionRedes"
                                    smooth={true}
                                    duration={500}
                                    className="section-link"
                                >
                                    Gestión de Redes
                                </Link>
                            </Card.Title>
                            <Card.Title className="mb-3 mb-md-4">
                                <Link
                                    to="section-fotografia"
                                    smooth={true}
                                    duration={500}
                                    className="section-link"
                                >
                                    Contenido y Fotografía
                                </Link>
                            </Card.Title>
                            <Card.Title className="mb-3 mb-md-4">
                                <Link
                                    to="section-desarrollo"
                                    smooth={true}
                                    duration={500}
                                    className="section-link"
                                >
                                    Diseño y Desarrollo Web
                                </Link>
                            </Card.Title>
                        </div>
                    </div>
                </div>
            </div>
            <Branding />
            <Redes />
            <Fotografia />
            <Imgdesa />
            <Desarrollo />
            <Contacto />
        </>
    );
}

export default SectionBarra;
