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
        <div className='section-nosotras'>
            <div className="sectionSin-Carrousel-nosotras ">
                <div className="section-texto-nosotras">
                    <h2 className='section-texto-nosotras-titulo '> Somos un estudio <br /> gráfico que nació <br /> para  <span className='span-nosotras'> romper esquemas. </span> </h2>
                    <p className='section-texto-nosotras-texto'> En A Dúo, somos dos amigas <br />
                        apasionadas por transformar ideas  <br />
                        en experiencias visuales únicas.  <br />

                        Nos mueve la creatividad, la  <br />
                        conexión con nuestros clientes y el  <br />
                        desafío de crear marcas que sean  <br />
                        tan auténticas como vos.</p> <br />
                    <div className="section-texto-nosotras-button-container">
                        <Button> Trabajemos juntos↗ </Button>
                    </div>
                </div>
                <div className="section-img-nosotras">
                    <img src="/imgsInicio/IMG_4228.png" class="d-block w-100" alt="IMAGEN1" />
                </div>
            </div>
            <div class="sectionCon-Carrousel-nosotras">
                <Carousel images={imagesCarouselSectionNosotras} > </Carousel>
            </div>
        </div>
    )
}


export default SectionNosotras;