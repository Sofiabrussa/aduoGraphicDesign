import "./BrandingStyled.css";


function Branding() {
    return (
        <div id="sectionBranding">
            <div className="container-fluid d-flex justify-content-center align-items-center">
                {/* Columna izquierda */}
                <div className="section-izq d-flex flex-column">
                    <div className="component-branding-text">
                        <h1> Branding </h1>
                        <p>
                            En A Dúo no creamos solo un logo lindo, diseñamos marcas completas
                            que cuentan historias, inspiran y conectan con su audiencia. Lo mejor
                            que sabemos hacer.
                            Mirá todo lo que incluye:
                        </p>
                        <button> quiero + info </button>
                    </div>
    
                    {/* Contenedor de la imagen de la izquierda */}
                    <div className="component-img-branding" style={{ backgroundImage: 'url("/imgsNosotras/imagennosotras.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                        {/* La imagen de fondo se ajustará al tamaño del contenedor */}
                    </div>
                </div>
    
                {/* Columna derecha */}
                <div className="section-der">
                    <div className="component-img-branding-der" style={{ backgroundImage: 'url("/imgsNosotras/imagennosotras.png")', backgroundSize: 'cover', backgroundPosition: 'center', height: '300px' }}>
                        {/* La imagen de fondo se ajustará al tamaño del contenedor */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Branding