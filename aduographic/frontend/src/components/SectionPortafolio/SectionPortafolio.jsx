import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"

function SectionPortafolio() {
    return (
        <div id="portfolio" className="container-fluid d-flex flex-column m-0 p-0 w-100">
            {/* Componente texto */}
            <div className="d-flex justify-content-center align-items-center sectionPortfolioText">
                <h1 className="text-center">
                    <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }}>branding </span> y {" "}
                    <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }} >diseño</span> pensados para que <br />
                    <span style={{ fontWeight: 400 }}>tu esencia explote</span> en cada detalle.
                </h1>
            </div>

            {/* Componente img y lista */}
            <div className="row img-table-component row img-table-component m-0 p-0 d-flex flex-wrap">
                {/* Componente de imagen */}
                <div className="col-6 d-flex justify-content-center align-items-center img-component"
                    style={{ backgroundImage: 'url("/imgPortfolio/imagenservicios.png")', backgroundSize: 'cover',  backgroundPosition: 'center' }}>
                </div>

                {/* Componente de tabla */}
                <div className="col-6 d-flex justify-content-center align-items-center m-0 p-0">
                    <div className="w-100 h-100">
                        <table className="table table-bordered portfolio-servicios-lista w-100 p-0 m-0" style={{ borderWidth: '0.5px', borderColor: 'black', borderStyle: 'solid', height: '100%' }}>
                            <tbody className="d-flex flex-column h-100 p-0 m-0">
                                <tr className="d-flex flex-grow-1 w-100">
                                    <td className="d-flex align-items-center border-0 w-100">01. Branding</td>
                                </tr>
                                <tr className="d-flex flex-grow-1 w-100">
                                    <td className="d-flex align-items-center border-0 w-100">02. Contenido</td>
                                </tr>
                                <tr className="d-flex flex-grow-1 w-100">
                                    <td className="d-flex align-items-center border-0 w-100">03. Fotografía</td>
                                </tr>
                                <tr className="d-flex flex-grow-1 w-100">
                                    <td className="d-flex align-items-center border-0 w-100">04. Diseño Web</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            {/* Componente boton */}
            <div className="d-flex justify-content-center align-items-center sectionButtonPortoflio">
                <a href="https://www.behance.net/aduographicdesign" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-dark buttonSectionPortfolio rounded-4">
                        Ver Portfolio↗
                    </button>
                </a>
            </div>
        </div>
    );
}


export default SectionPortafolio;