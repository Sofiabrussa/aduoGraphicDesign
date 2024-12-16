import "./InicioStyles.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "../Carrousel/Carrousel";




function Inicio() {

    const imagesCarouselInicio = [
        { src: "/imgsInicio/degrade1.png", alt: "IMAGEN1" },
        { src: "/imgsInicio/degrade2.png", alt: "IMAGEN2" },
      ];

    return (
        <div id="carouselExample" className="carousel slide" >
            <div className="carousel-fixed-text">
                <h1 className="carousel-h1">NO <span style={{ color: 'rgb(206, 181, 216)'}}> hay </span> DOS <br /> SIN <span style={{ color: 'rgb(206, 181, 216)' }}>tres</span></h1>
                <p>Hacemos que tu marca <br /> sea lo que siempre soñaste </p>
                <button type="button" class="btn btn-outline-primary buttom-aduo">
                    Contactanos ↗
                </button>
            </div>

            <Carousel images={imagesCarouselInicio} className="h-100 w-100" > </Carousel>

            <div className="carousel-iconos">
                <div className="icono"> 
                    <a href="https://walink.co/9f29a0" target="_blank" rel="noopener noreferrer">
                        <img src="/imgsInicio/recursos_Mesadetrabajo 1.png" alt="..." />
                    </a>
                </div>
                <div>
                    <a href="https://www.instagram.com/aduo_estudio/" target="_blank" rel="noopener noreferrer">
                        <img src="/imgsInicio/recursos-02.png" alt="..." />
                    </a>
                </div>
            </div>
        </div>
    );

}

export default Inicio;