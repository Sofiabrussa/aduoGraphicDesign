import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"


function SectionPortafolio() {
    return (
        <div className="container-fluid vh-100 d-flex flex-column m-0 p-0" style={{ maxHeight: '100vh' }}>
            {/* Componente texto */}
            <div className="d-flex justify-content-center align-items-center sectionPortfolioText" style={{ flex: "1 1 35%" }}>
                <h1 style={{ fontSize: "clamp(1rem, 4vw, 2rem)" }}> <span style={{ color: "var(--second-violet)" }}>branding </span> y {" "} <span style={{ color: "var(--second-violet)" }} >diseño</span> pensados para que <br /> <span style={{ fontWeight: 400 }}>tu esencia explote</span> en cada detalle. </h1>
            </div>

            {/* Componente img y lista */}
            <div className="d-flex justify-content-center align-items-center flex-row" style={{ flex: "1 1 35%" }}>
                <div className='w-50' style={{ height: "100%" , overflow: "hidden"}}>
                    <img
                        src="/imgPortfolio/imagenservicios.png"
                        alt="Imagen de fondo"
                        className="img-fluid"
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <div className='bg-primary w-50'>
                    {/* Contenido del segundo div */}
                </div>
            </div>

            {/* Componente boton */}
            <div className="d-flex justify-content-center align-items-center bg-success" style={{ flex: "1 1 30%" }}>
                <h1 className="text-white">Componente 3 (25%)</h1>
            </div>
        </div>
    );
};

export default SectionPortafolio;