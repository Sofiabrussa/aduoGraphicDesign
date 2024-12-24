import React from "react";
import "./CarrouselStyles.css";

const Carousel = ({ images }) => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <img src={image.src} className="d-block w-100" alt={image.alt} />
            {/* Verificamos si hay texto antes de mostrar la sección */}
            {image.text && (
              <div 
                className="carousel-caption"
              >
                <p
                  className="m-0"
                  dangerouslySetInnerHTML={{ __html: image.text }} >
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
