import { Link } from 'react-scroll';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarStyles.css';
import Button from "../button/button";


function Navbar() {
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
                            <Link className="nav-link" to="servicios" smooth={true} duration={600}>Servicios</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="nosotras" smooth={true} duration={600}>Nosotras</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="portfolio" smooth={true} duration={600}>Portfolio</Link>
                        </li>
                        <li className="nav-item me-4">
                            <Link className="nav-link" to="contacto" smooth={true} duration={600}>Contacto</Link>
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
