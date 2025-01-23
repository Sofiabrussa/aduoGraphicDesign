import "./RedesStyled.css";


function Redes() {
    return (
        <div id="sectionRedes">
            <div className="container d-flex justify-content-center align-items-stretch">
                <div className="text-redes col-6 m-5 justify-content-center d-flex flex-column align-items-center">
                    <h1> Redes soc. </h1>
                    <p> Diseñamos y desarrollamos tu
                        página web a tu medida.
                        Ya sea que estés buscando una
                        landing page, una web sencilla o
                        un e-commerce.
                        Diseñar webs se nos da genial!</p>
                    <button className="btn-custom">quiero + info</button>
                </div>
                <div className="text-redes col-6 m-5 justify-content-center d-flex flex-column align-items-center" style={{backgroundImage: 'url("/redesSociales/redessociales.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}} >
                </div>
                
            </div>
            <div className="image-container-web" >
                <img
                    src={`/redesSociales/desa.png`}
                    alt="Descripción de la imagen"
                    className="responsive-image-web"
                />
            </div>
        </div>
    )
}

export default Redes;