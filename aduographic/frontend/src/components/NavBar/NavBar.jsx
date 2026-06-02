import { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBarStyles.css';
import Button from "../Button/Button";
import { HashLink } from 'react-router-hash-link';
import { BsArrowUpRight } from "react-icons/bs";

function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleMenu = () => {
        setIsCollapsed(!isCollapsed);
    };

    const closeMenu = () => {
        setIsCollapsed(true);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid px-4 px-lg-5">
                <Link
                    className="navbar-brand m-0 p-0"
                    to="/"
                    onClick={closeMenu}
                >
                    <img
                        src="/imgsInicio/recursos-03.svg"
                        alt="Logo de mi empresa"
                        className="navbar-logo"
                    />
                </Link>
                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse navbar-menu-animated ${!isCollapsed ? 'show' : ''}`}
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav ms-auto align-items-center navbar-nav-custom">

                        <NavItem>
                            <HashLink
                                className="nav-link navbar-card-text"
                                to="/servicios"
                                onClick={closeMenu}
                            >
                                Servicios
                            </HashLink>
                        </NavItem>

                        <NavItem>
                            <HashLink
                                smooth
                                to="/#nosotras"
                                className="nav-link navbar-card-text"
                                onClick={closeMenu}
                            >
                                Nosotras
                            </HashLink>
                        </NavItem>

                        <NavItem>
                            <HashLink
                                className="nav-link navbar-card-text"
                                to="/portfolio"
                                onClick={closeMenu}
                            >
                                Portfolio
                            </HashLink>
                        </NavItem>

                        <NavItem>
                            <HashLink
                                smooth
                                to="/#contacto"
                                className="nav-link navbar-card-text"
                                onClick={closeMenu}
                            >
                                Contacto
                            </HashLink>
                        </NavItem>
                        <li className="nav-item nav-item-cta">
                            <a
                                href="https://walink.co/9f29a0"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMenu}
                            >
                                <Button className="button-navBar">
                                    Trabajemos juntos{' '}
                                    <BsArrowUpRight
                                        className="arrow-icon"
                                        style={{ color: 'black' }}
                                    />
                                </Button>
                            </a>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

const NavItem = ({ children }) => (
    <li className="nav-item nav-item-link">
        {children}
    </li>
);

export default Navbar;