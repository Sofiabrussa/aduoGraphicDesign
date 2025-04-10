import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarStyles.css';
import Button from "../Button/Button";

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleLinkClick = () => {
        // Esperar a que la navegación se complete antes de hacer scroll
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
        
        // Cerrar el menú en móvil después de hacer clic
        if (!isCollapsed) {
            setIsCollapsed(true);
        }
    };

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Link className="navbar-brand lacquer-regular" to="/">
                <img src="/imgsInicio/recursos-03.png" alt="Logo de mi empresa" className="navbar-logo" />
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded={!isCollapsed} 
                aria-label="Toggle navigation"
                onClick={toggleMenu}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                        <Link className="nav-link" to="/servicios" onClick={handleLinkClick}>
                            Servicios
                        </Link>
                    </NavItem>
                    <NavItem>
                        <ScrollLink className="nav-link" to="nosotras" smooth={true} duration={600} onClick={handleLinkClick}>
                            Nosotras
                        </ScrollLink>
                    </NavItem>
                    <NavItem>
                        <a 
                            className="nav-link" 
                            href="https://www.behance.net/aduoestudiocreativo" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Portfolio
                        </a>
                    </NavItem>
                    <NavItem>
                        <ScrollLink className="nav-link" to="contacto" smooth={true} duration={600} onClick={handleLinkClick}>
                            Contacto
                        </ScrollLink>
                    </NavItem>
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

// Componente NavItem para evitar repetición de código
const NavItem = ({ children }) => (
    <li className="nav-item me-4">
        {children}
    </li>
);

export default Navbar;