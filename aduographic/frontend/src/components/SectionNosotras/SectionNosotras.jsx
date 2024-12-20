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
        <div id='nosotras' className="d-flex flex-column" >
            <div className="container-fluid d-flex flex-row m-0 p-0 flex-grow-1" style={{ maxHeight: "75%" }}>
                <div className="sectionNosotrasText container-fluid" >
                    <h1 className=""> Somos un estudio gráfico que nació para <span> romper esquemas. </span></h1>
                    <p className="mt-3">En A Dúo, somos dos amigas apasionadas por transformar ideas en experiencias visuales únicas.</p>
                    <p className="mt-4 ">Nos mueve la creatividad, la conexión con nuestros clientes y el desafío de crear marcas que sean tan auténticas como vos.</p>
                    <div className="container-fluid mt-4 p-0">
                        <a href='https://walink.co/9f29a0' className="buttom-aduo button-Nosotras">Trabajemos juntos </a>
                    </div>
                </div>
                <div className="imagen-nosotras container-fluid " alt="100%"  style={{ backgroundImage: 'url("/imgsNosotras/imagennosotras.png")'}}>
                    
                </div>
            </div>
            <div className="carousel-nosotras container-fluid m-0 p-0" style={{ maxHeight: "100vh" }}>
                <div className="h-100 w-100  p-0" style={{ maxHeight: "20vh", overflow: "hidden" }}>
                    <Carousel images={imagesCarouselSectionNosotras} />
                </div>
            </div>
        </div>

    );
}


export default SectionNosotras;