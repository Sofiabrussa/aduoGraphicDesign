import "./FotografiaStyled.css";

function Fotografia() {
    return (

        <div id="section-fotografia">
            <div className="m-5 d-flex text-center justify-content-center flex-column align-items-center">
                <h1>Contenido <br /> <span> y fotografía </span> </h1>
                <p> Todo pensado con una estrategia visual que no solo
                    se ve bien, sino que tiene propósito. Lo adaptamos a
                    cualquier plataforma que necesites, ¡sin vueltas!
                    ¿Lo hacemos realidad?</p>
                <button> lo necesito </button>
            </div>
            <div className="container-img-fotografia" >
            <div className="image-container-fotografia" >
                        <img
                            src={`/servicios/servicio3.jpg`}
                            alt="Descripción de la imagen"
                            className="responsive-image-fotografia"
                        />
                    </div>
            </div>
        </div>
    )
}


export default Fotografia;