import "./FotografiaStyled.css";

const Fotografia = () => {
    
    return (
      <section id="section-fotografia" className="py-5">
        <div className="container-fluid m-0 p-0">
          <div className="row justify-content-center w-100">
            <div className="col-12 col-md-8 text-center mb-5">
              <h1 className="mb-3">
                Contenido <span className="d-block"> y fotografía</span>
              </h1>
              <p className="mb-4">
                Todo pensado con una estrategia visual que no solo
                se ve bien, sino que tiene propósito. Lo adaptamos a
                cualquier plataforma que necesites, ¡sin vueltas!
                ¿Lo hacemos realidad?
              </p>
              <button className="btn-custom">lo necesito</button>
            </div>
          </div>
          
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="image-wrapper">
                <img
                  src="/servicios/servicio3.jpg"
                  alt="Servicio de fotografía"
                  className="img-fluid rounded"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  export default Fotografia;