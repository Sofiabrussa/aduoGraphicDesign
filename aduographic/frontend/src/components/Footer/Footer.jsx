import "./FooterStyles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
        <div id='Footer' className="container-fluid w-100 bg-dark">
            <div className="row g-1">
                <div className="col">
                    <img src="/imgsInicio/recursos-03.png" alt="Logo de mi empresa" className="navbar-logo" />
                </div>
                <div className="col">
                    <i className="fab fa-instagram text-white" style={{ fontSize: '30px' }}></i>
                </div>
                <div className="col">
                    <i className="fab fa-behance" style={{ fontSize: '30px', color: 'white' }}></i>
                </div>
                <div className="col">
                    <i className="fab fa-whatsapp" style={{ fontSize: '30px', color: 'white' }}></i>
                </div>
                <div className="col">
                    <ul className="list-unstyled">
                        <li>Inicio</li>
                        <li>Servicios</li>
                        <li>Nosotras</li>
                        <li>Portfilio</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
