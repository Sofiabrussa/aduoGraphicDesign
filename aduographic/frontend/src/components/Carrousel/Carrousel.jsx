import React from "react";
import PropTypes from "prop-types";
import "./CarrouselStyles.css";

function highlightUppercaseWords(text) {
  // Asegura que se mantengan los <br> pero se procesen las palabras
  return text
    .split(/(<br\s*\/?>)/gi)
    .map((segment, index) => {
      if (segment.match(/<br\s*\/?>/gi)) return <br key={index} />;
      return segment.split(/\s+/).map((word, idx) => {
        const cleanWord = word.replace(/[^\wÁÉÍÓÚÜÑ]/gi, ""); 
        const isUppercase = cleanWord === cleanWord.toUpperCase() && /[A-ZÁÉÍÓÚÜÑ]/.test(cleanWord);

        return (
          <React.Fragment key={`${index}-${idx}`}>
            {isUppercase ? <strong>{word}</strong> : word}{" "}
          </React.Fragment>
        );
      });
    });
}

const Carousel = ({ images, customClass }) => {
  if (!images || images.length === 0) return null;

  return (
    <div
      id="carouselExampleSlidesOnly"
      className={`carousel slide ${customClass || ''}`}
      data-bs-ride="carousel"
      data-bs-interval="2000"
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
                  <p className="carousel-text">
                    {highlightUppercaseWords(image.text)}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

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
