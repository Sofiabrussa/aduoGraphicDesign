import "./SectionBarraStyled.css";
import Branding from '../Branding/Branding';
import Fotografia from "../Fotografia/Fotografia";
import Redes from "../Redes/Redes";
import Contacto from "../../Contacto/Contacto.jsx"
import Desarrollo from "../Desarrollo/Desarrollo.jsx";
import Imgdesa from "../ImgDesa/Imgdesa.jsx";
import NavBar from "../../NavBar/NavBar.jsx"

function SectionBarra() { 
    return (
    <>
        <NavBar/>
        <div id="sectionBarra" className="container-fluid">
            <div className="row justify-content-center w-100">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 className="section-title mb-3 mb-md-4"> Branding </h1>
                        <h1 className="section-title mb-3 mb-md-4"> Gestión de Redes </h1>
                        <h1 className="section-title mb-3 mb-md-4"> Contenido y Fotografía </h1>
                        <h1 className="section-title mb-3 mb-md-4"> Diseño y Desarrollo Web </h1>
                    </div>
                </div>
            </div>
        </div>
        <Branding/>
        <Fotografia/>
        <Redes/>
        <Imgdesa/>
        <Desarrollo/>
        <Contacto/>
    </>
    )
}
export default SectionBarra