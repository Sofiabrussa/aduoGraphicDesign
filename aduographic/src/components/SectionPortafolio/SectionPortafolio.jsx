import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"

function SectionPortafolio() {
    return (
        <div className="container-fluid vh-100 d-flex flex-column m-0 p-0" style={{ maxHeight: '100vh' }}>
            {/* Componente texto */}
            <div className="d-flex justify-content-center align-items-center sectionPortfolioText flex-shrink-1 flex-grow-0" style={{ minHeight: "150px" }}>
                <h1 style={{ fontSize: "clamp(1rem, 4vw, 2rem)" }}>
                    <span style={{ color: "var(--second-violet)" }}>branding </span> y {" "}
                    <span style={{ color: "var(--second-violet)" }} >diseño</span> pensados para que <br />
                    <span style={{ fontWeight: 400 }}>tu esencia explote</span> en cada detalle.
                </h1>
            </div>

            {/* Componente img y lista */}
            <div className="d-flex justify-content-center align-items-center flex-row" style={{ overflow: "hidden" }}>
                <div className='w-50' style={{ height: "100%" }}>
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
            <div className="flex-shrink-1 flex-grow-0 d-flex justify-content-center align-items-center" style={{ minHeight: "200px", maxHeight: "250px" }}>
                <button class="btn btn-outline-dark  buttonSectionPortfolio rounded-4 " style={{fontSize: "clamp(1rem, 4vw, 1.5rem)", padding: "0.5rem 1.5rem"}}>
                    Portfolio↗
                </button>
            </div>
        </div>
    );
}


export default SectionPortafolio;