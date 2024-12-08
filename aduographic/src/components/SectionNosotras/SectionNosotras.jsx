import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionNosotrasStyles.css";
import Button from '../button/button';

function SectionNosotras() {
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
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/imgsInicio/IMG_4228.png" class="d-block w-100" alt="IMAGEN1" />
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="IMAGEN2" />
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="IMAGEN3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SectionNosotras;