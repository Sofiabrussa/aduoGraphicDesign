import "./RedesStyled.css";


function Redes() {
    return (
        <div id="sectionRedes">
            <div className="container-fluid d-flex row justify-content-center align-items-stretch w-100 ">
                <div className="text-redes col m-5 justify-content-center d-flex flex-column align-items-center">
                    <h1> Redes soc. </h1>
                    <p> Diseñamos y desarrollamos tu
                        página web a tu medida.
                        Ya sea que estés buscando una
                        landing page, una web sencilla o
                        un e-commerce.
                        Diseñar webs se nos da genial!</p>
                    <button> quiero + info  </button>
                </div>
                <div className="img-redes col m-5">
                    <div className="image-container-redes" style={{ backgroundImage: 'url("/servicios/servicio2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} >
                    </div>
                </div>
            </div>
            <div className="image-container-web" >
                <img
                    src={`/servicios/servicio3.jpg`}
                    alt="Descripción de la imagen"
                    className="responsive-image-web"
                />
            </div>
        </div>
    )
}

export default Redes;