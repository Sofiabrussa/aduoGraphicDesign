import "./FooterStyles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
    return (
        <div id='Footer' className="container-fluid w-100 bg-dark d-flex flex-column">
            <div className="row g-2 d-flex align-items-center mb-4 mt-3 ">
                <div className="col">
                    <img src="/imgsInicio/recursos-03.png" alt="Logo de mi empresa" className="navbar-logo" />
                </div>
                <div className="col">
                    <i className="fab fa-instagram text-white" style={{ fontSize: '3rem' }}></i>
                </div>
                <div className="col">
                    <i className="fab fa-behance" style={{ fontSize: '3rem', color: 'white' }}></i>
                </div>
                <div className="col">
                    <i className="fab fa-whatsapp" style={{ fontSize: '3rem', color: 'white' }}></i>
                </div>
                <div className="col">
                    <ul className="list-unstyled text-white">
                        <li>Inicio</li>
                        <li>Servicios</li>
                        <li>Nosotras</li>
                        <li>Portfilio</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className="col">
                    <ul className="list-unstyled text-white">
                        <li>Branding</li>
                        <li>Contenido</li>
                        <li>Fotografía</li>
                        <li>Diseño Web</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="marquee mb-3">
                    <div className="track">
                        <div className="content text-white">
                            <span>A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO</span>
                            <span> A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO A DÚO ESTUDIO CREATIVO</span>                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
