import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div class="container-fluid">
                <Link className="navbar-brand lacquer-regular" to="#">
                    <img src="/imgsInicio/recursos-03.png" alt="Logo" style={{ height: '60px' }} />
                </Link>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto nav-underline">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="#">Servicios</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Nosotras</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Portafolio</Link>
                        </li>
                        <li class="nav-item navbar-item ">
                            <Link class="nav-link" to="#">Contacto</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );

}


export default Navbar;