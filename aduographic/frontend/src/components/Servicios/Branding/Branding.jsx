import "./BrandingStyled.css";


function Branding() {
    return (
        <div id="sectionBranding">
            <div className="container d-flex justify-content-center align-items-stretch">
                {/* Columna izquierda */}
                <div className="container-fluid d-flex flex-column align-items-center w-100 m-5 ">
                    <div className="rectangle d-flex flex-column mb-3 text-center justify-content-center flex-grow-0 flex-shrink-0" style={{ flexBasis: "60%" }}>
                        <h1> Branding </h1>
                        <p className="p-4" >
                            En A Dúo no creamos solo un logo lindo, diseñamos marcas completas
                            que cuentan historias, inspiran y conectan con su audiencia. Lo mejor
                            que sabemos hacer.
                            <br/> Mirá todo lo que incluye:
                        </p>
                        <button> quiero + info </button>
                    </div>

                    {/* Contenedor de la imagen de la izquierda */}
                    <div className="rectangle flex-grow-0" style={{ flexBasis: "40%", backgroundImage: 'url("/servicios/servicio2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>

                    </div>
                </div>

                {/* Columna derecha */}
                <div className="d-flex justify-content-center align-items-center w-100">
                    <div className="image-container m-5" >
                        <img
                            src={`/servicios/servicio1.jpg`}
                            alt="Descripción de la imagen"
                            className="responsive-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Branding