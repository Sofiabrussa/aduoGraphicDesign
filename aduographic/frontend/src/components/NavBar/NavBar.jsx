import { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarStyles.css';
import Button from "../Button/Button";
import { HashLink } from 'react-router-hash-link';
import { BsArrowUpRight } from "react-icons/bs";

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleLinkClick = () => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
        
        if (!isCollapsed) {
            setIsCollapsed(true);
        }
    };

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand lacquer-regular m-0" to="/">
                    <img src="/imgsInicio/recursos-03.svg" alt="Logo de mi empresa" className={`navbar-logo ${!isCollapsed ? 'hide-logo' : ''}`} />
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
            </div>
            <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto align-items-center pe-4">
                    <NavItem>
                        <Link className="nav-link" to="/servicios" onClick={handleLinkClick}>
                            Servicios
                        </Link>
                    </NavItem>
                    <NavItem>
                        <HashLink smooth to="/#nosotras" className="nav-link">
                            Nosotras
                        </HashLink>
                    </NavItem>
                    <NavItem>
                        <Link 
                            className="nav-link" 
                            to="/portfolio"
                        >
                            Portfolio
                        </Link>
                    </NavItem>
                    <NavItem>
                        <HashLink smooth to="/#contacto" className="nav-link">
                            Contacto
                        </HashLink>
                    </NavItem>
                    <li className="nav-item align-self-center">
                        <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
                            <Button className='button-navBar'>Trabajemos juntos <BsArrowUpRight className="arrow-icon" style={{ color: "black" }}/> </Button>
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