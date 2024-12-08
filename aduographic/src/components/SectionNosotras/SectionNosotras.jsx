import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionNosotrasStyles.css";
import Button from '../button/button';
import Carousel from '../Carrousel/Carrousel';

function SectionNosotras() {

    const imagesCarouselSectionNosotras = [
        { src: "/imgsInicio/IMG_4228.png", alt: "IMAGEN1" },
        { src: "/imgsInicio/IMG_4253(1).png", alt: "IMAGEN2" },
      ];

    return (
        <div className='section-nosotras'>
            <div className="sectionSin-Carrousel-nosotras">
                <div className="section-texto-nosotras">
                    <h2> Somos un estudio <br /> gráfico que nació <br /> para romper esquemas. </h2>
                    <p> En A Dúo, somos dos amigas
                        apasionadas por transformar ideas 
                        en experiencias visuales únicas. 

                        Nos mueve la creatividad, la 
                        conexión con nuestros clientes y el 
                        desafío de crear marcas que sean 
                        tan auténticas como vos.</p>
                    <Button> Trabajemos juntos↗ </Button>
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