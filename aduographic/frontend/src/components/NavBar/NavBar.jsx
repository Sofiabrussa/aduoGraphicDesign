import { Link } from 'react-router-dom'; // Cambiar esto para navegación
import { Link as ScrollLink } from 'react-scroll'; // Usar ScrollLink para desplazamiento suave
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarStyles.css';
import Button from "../button/button";


function Navbar() {

    const handleLinkClick = () => {
        // Esperar a que la navegación se complete antes de hacer scroll
        setTimeout(() => {
          window.scrollTo(0, 0); // Esto hace un scroll a la parte superior
        }, 100); // Retraso para permitir que la navegación ocurra primero
      };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <Link className="navbar-brand lacquer-regular" to="#">
                    <img src="/imgsInicio/recursos-03.png" alt="Logo de mi empresa" className="navbar-logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="/servicios" onClick={handleLinkClick} >Servicios</Link>
                        </li>
                        <li className="nav-item me-4">
                            <ScrollLink  className="nav-link" to="nosotras" smooth={true} duration={600}>Nosotras</ScrollLink>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="https://www.behance.net/aduoestudiocreativo" target="_blank" rel="noopener noreferrer"> Portfolio </a>
                        </li>
                        <li className="nav-item me-4">
                            <ScrollLink className="nav-link" to="contacto" smooth={true} duration={600}>Contacto </ScrollLink>
                        </li>
                        <li className="nav-item align-self-center button-navBar">
                            <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
                                <Button>Trabajemos juntos↗</Button>
                            </a>
                        </li>
                    </ul>
                </div>
            
        </nav>
    );
}

export default Navbar;
