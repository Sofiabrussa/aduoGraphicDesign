import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link className="navbar-brand">Navbar</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" href="#">Servicios</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Nosotras</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Portafolio</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="#">Contacto</Link>
                        </li>
                        <nav class="navbar bg-body-tertiary">
                            <form class="container-fluid justify-content-start">
                                <button class="btn btn-sm btn-outline-secondary" type="button">Trabajemos juntos↗</button>
                            </form>
                        </nav>
                    </ul>
                </div>
            </div>
        </nav>


    );

}


export default Navbar;