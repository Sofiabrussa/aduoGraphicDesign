import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionNosotrasStyles.css";
import Carousel from '../Carrousel/Carrousel';

function SectionNosotras() {

    const imagesCarouselSectionNosotras = [
        { src: "/imgsNosotras/pedidos-06.png", alt: "IMAGEN1", text: "DISEÑAR con PASIÓN = <br> CONECTAR con el MUNDO</br>" },
        { src: "/imgsNosotras/pedidos-07.png", alt: "IMAGEN2", text: "CREEMOS que la MEJOR IDEA <br/> siempre NACE desde el DISFRUTE" },
        { src: "/imgsNosotras/pedidos-08.png", alt: "IMAGEN3", text: "No HAY dos sin TRES <br/> Somos tu mejor TEAM!" },
    ];

    return (
        <section id="nosotras" className="d-flex flex-column min-vh-100">
        <div className="d-flex flex-column flex-md-row flex-grow-1">
          {/* Text Content */}
          <div className="w-100 w-md-50 p-4 p-md-5 d-flex flex-column justify-content-center">
            <h1 className="fw-light fs-2 fs-md-1 mb-4">
              Somos un estudio gráfico que nació para{" "}
              <span className="text-violet">romper esquemas.</span>
            </h1>
            
            <p className="fs-5 mb-4">
              En A Dúo, somos dos amigas apasionadas por transformar ideas en experiencias visuales únicas.
            </p>
            
            <p className="fs-5 mb-4">
              Nos mueve la creatividad, la conexión con nuestros clientes y el desafío de crear marcas que sean tan auténticas como vos.
            </p>
            
            <div className="text-center text-md-start">
              <a 
                href="https://walink.co/9f29a0"
                className="btn btn-primary btn-lg px-3"
                style={{ backgroundColor: "white", borderColor: "var(--second-violet)", color: "black" }}
              >
                Trabajemos juntos
              </a>
            </div>
          </div>
  
          {/* Image Section */}
          <div 
            className="w-100 w-md-50 min-vh-40 bg-image rounded"
            style={{ 
              backgroundImage: 'url("/imgsNosotras/imagennosotras.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '40vh'
            }}
          />
        </div>
  
        {/* Carousel Section */}
        <div className="w-100" style={{ height: '20vh', overflow: 'hidden' }}>
          <Carousel images={imagesCarouselSectionNosotras} />
        </div>
      </section>
    );
}


export default SectionNosotras;