import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionPortafolioStyles.css"
import { Link } from 'react-router-dom';


function SectionPortafolio() {
    return (
        <div className='portfolio-component'>
            <div className='portfolio-titulo'>
                <h1> <span className='portfolio-titulo-color'> branding </span> y <span className='portfolio-titulo-color'> diseño </span> pensados para que <br /> <span className='portfolio-titulo-negrita '> tu esencia explote </span> en cada detalle. </h1>
            </div>
            <div className='portolio-servicios'>
                <div className='portolio-servicios-img'>
                    <img src="/imgsInicio/IMG_4228.png" alt="Descripción de la imagen" />
                </div>
                <div className='portolio-servicios-lista'>
                    <ul class="list-group">
                        <li class="list-group-item">01.&nbsp;&nbsp;&nbsp;&nbsp;Branding</li>
                        <li class="list-group-item">02.&nbsp;&nbsp;&nbsp;&nbsp;Contenido</li>
                        <li class="list-group-item">03.&nbsp;&nbsp;&nbsp;&nbsp;Fotografía</li>
                        <li class="list-group-item">04.&nbsp;&nbsp;&nbsp;&nbsp;Diseño Web</li>
                    </ul>

                </div>

            </div>
            <div className='portfolio-boton'>
                <Link to="https://www.behance.net/aduographicdesign" target="_blank" className="portfolio-boton-estilo">
                    Ver Portfolio ↗
                </Link>
            </div>
        </div>



    )


}

export default SectionPortafolio;