import React from "react";
import PropTypes from "prop-types";
import "./CarrouselStyles.css";

const Carousel = ({ images, customClass }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div 
      id="carouselExampleSlidesOnly" 
      className={`carousel slide ${customClass || ''}`} 
      data-bs-ride="carousel" 
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div 
            className={`carousel-item ${index === 0 ? "active" : ""}`} 
            key={index}
          >
            <img 
              src={image.src} 
              className="carousel-image" 
              alt={image.alt || `Slide ${index + 1}`}
              loading="lazy"
            />
            {image.text && (
              <div className="carousel-caption">
                <div className="text-container">
                  <p
                    className="carousel-text"
                    dangerouslySetInnerHTML={{ __html: image.text }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Indicadores de navegación */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={`indicator-${index}`}
            type="button"
            data-bs-target="#carouselExampleSlidesOnly"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      text: PropTypes.string
    })
  ).isRequired,
  customClass: PropTypes.string
};

export default Carousel;