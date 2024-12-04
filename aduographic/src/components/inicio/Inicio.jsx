import "./InicioStyles.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function Inicio() {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/imgsInicio/IMG_4228.png" className="d-block w-100" alt="..." style={{ height: '100%', objectFit: 'contain' }}  />
                </div>
                <div className="carousel-item">
                    <img src="/imgsInicio/IMG_4253(1).png" className="d-block w-100" alt="..."  style={{ height: '100%', objectFit: 'contain' }}/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );

}


export default Inicio;