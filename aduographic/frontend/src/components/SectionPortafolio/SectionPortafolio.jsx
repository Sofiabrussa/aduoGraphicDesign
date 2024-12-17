import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"

function SectionPortafolio() {
    return (
        <div id="servicios" className="container-fluid d-flex flex-column m-0 p-0">
            {/* Componente texto */}
            <div className="d-flex justify-content-center align-items-center sectionPortfolioText" >
                <h1>
                    <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }}>branding </span> y {" "}
                    <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }} >diseño</span> pensados para que <br />
                    <span style={{ fontWeight: 400 }}>tu esencia explote</span> en cada detalle.
                </h1>
            </div>

            {/* Componente img y lista */}
            <div className="d-flex justify-content-center align-items-center flex-row" style={{ overflow: "hidden" }}>
                <div className='w-50 mx-auto d-block' style={{maxWidth:"1000px", minWidth:"100px" }}>
                    <img
                        src="/imgPortfolio/imagenservicios.png"
                        alt="Imagen de fondo"
                        className="img-fluid"
                        style={{
                            objectFit: "contain",
                            maxHeight: "100%", 
                            width: "100%", 
                        }}
                    />
                </div>
                <div className="w-50 h-100">
                    <table className="table table-bordered portfolio-servicios-lista h-100 " style={{ borderWidth: '0.5px', borderColor: 'black', borderStyle: 'solid' }}>
                        <tbody className="d-flex flex-column h-100 ">
                            <tr className="flex-grow-1 d-flex ">
                                <td className="d-flex align-items-center border-0" >01. Branding</td>
                            </tr>
                            <tr className="flex-grow-1 d-flex">
                                <td className="d-flex align-items-center border-0" >02. Contenido</td>
                            </tr>
                            <tr className="flex-grow-1 d-flex">
                                <td className="d-flex align-items-center border-0">03. Fotografía</td>
                            </tr>
                            <tr className="flex-grow-1 d-flex">
                                <td className="d-flex align-items-center border-0">04. Diseño Web</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Componente boton */}
            <div className="d-flex justify-content-center align-items-center sectionButtonPortoflio" style={{ height: "20%"}}>
            <a href="https://www.behance.net/aduographicdesign" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-outline-dark buttonSectionPortfolio rounded-4 ">
                    Ver Portfolio↗
                </button>
                </a>
            </div>
        </div>
    );
}


export default SectionPortafolio;