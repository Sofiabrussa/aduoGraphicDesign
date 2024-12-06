import "./InicioStyles.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Carousel } from 'bootstrap';



function Inicio() {

    useEffect(() => {
        // Verifica si ya está inicializado
        const carouselElement = document.getElementById('carouselExample');
        if (carouselElement && !carouselElement.classList.contains('carousel-initialized')) {
            new Carousel(carouselElement, {
                interval: 5000, // Intervalo de 5 segundos
                ride: 'carousel', // Comienza automáticamente
            });
            carouselElement.classList.add('carousel-initialized'); // Marca como inicializado
        }
    }, []);

    return (
        <div id="carouselExample" className="carousel slide position-relative">
            <div className="carousel-fixed-text">
                <h1 className="carousel-h1">NO <span style={{ color: 'rgb(206, 181, 216)' }}> hay </span> DOS <br /> SIN <span style={{ color: 'rgb(206, 181, 216)' }}>tres</span></h1>
                <p>Hacemos que tu marca <br /> sea lo que siempre soñaste </p>
                <button type="button" class="btn btn-outline-primary buttom-aduo">
                    Contactanos ↗
                </button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/imgsInicio/IMG_4228.png" className="d-block w-100" alt="..." style={{ height: '100%', objectFit: 'contain' }} />
                </div>
                <div className="carousel-item">
                    <img src="/imgsInicio/IMG_4253(1).png" className="d-block w-100" alt="..." style={{ height: '100%', objectFit: 'contain' }} />
                </div>
            </div>
            <div className="carousel-iconos">
                <div>
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