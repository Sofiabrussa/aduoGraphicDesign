import "./SectionBarraStyled.css";
import Branding from '../Branding/Branding';
import Fotografia from "../Fotografia/Fotografia";
import Redes from "../Redes/Redes";
import Contacto from "../../Contacto/Contacto.jsx"
import Desarrollo from "../Desarrollo/Desarrollo.jsx";


function SectionBarra() { 
    return (
    <>
    <div id="sectionBarra" className="container-fluid d-flex flex-column justify-content-between align-items-center" >
        <h1> Branding </h1>
        <h1> Gestión de Redes </h1>
        <h1> Contenido y Fotografía </h1>
        <h1> Diseño y Desarrollo Web </h1>
    </div>
    <Branding/>
    <Fotografia/>
    <Redes/>
    <Desarrollo/>
    <Contacto/>
    </>
    )
}


export default SectionBarra