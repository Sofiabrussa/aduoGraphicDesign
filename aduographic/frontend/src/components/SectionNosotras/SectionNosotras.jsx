import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionNosotrasStyles.css";
import Button from '../button/button';
import Carousel from '../Carrousel/Carrousel';

function SectionNosotras() {

    const imagesCarouselSectionNosotras = [
        { src: "/imgsNosotras/CARRUSEL1.jpg", alt: "IMAGEN1" },
        { src: "/imgsNosotras/CARRUSEL2.jpg", alt: "IMAGEN2" },
        { src: "/imgsNosotras/CARRUSEL3.jpg", alt: "IMAGEN2" },
    ];

    return (
        <div id='nosotras' className="container-fluid vh-100 d-flex flex-column m-0 p-0" style= {{maxHeight: "100vh"}} >
            <div className="container-fluid d-flex flex-row m-0 p-0 flex-grow-1" style={{ height: "75%" }}>
                <div className="sectionNosotrasText container-fluid m-0 p-0 d-flex flex-column justify-content-center align-items-center" >
                    <h1 className="m-3 p-0 w-50"> Somos un estudio gráfico que nació para <span> romper esquemas. </span></h1>
                    <p className="m-3 p-0 w-50  ">En A Dúo, somos dos amigas apasionadas por transformar ideas en experiencias visuales únicas.</p>
                    <p className="m-3 p-0 w-50 ">Nos mueve la creatividad, la conexión con nuestros clientes y el desafío de crear marcas que sean tan auténticas como vos.</p>
                    <div className="container-fluid m-5 p-0 w-50 d-flex align-items-center">
                        <Button>Trabajemos juntos </Button>
                    </div>
                </div>
                <div className="container-fluid m-0 p-0 d-flex justify-content-center img-container">
                    <img
                        src="/imgsNosotras/imagennosotras.png"
                        alt="Imagen de fondo"
                        className="featured-image "
                    />
                </div>
            </div>
            <div className="container-fluid m-0 p-0" style={{ height: "25%" }}>
                <div className=" h-100 w-100" style={{ overflow: "hidden" }}>
                    <Carousel images={imagesCarouselSectionNosotras}/>
                </div>
            </div>
        </div>

    );
}


export default SectionNosotras;