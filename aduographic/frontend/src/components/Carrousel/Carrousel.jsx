import React from "react";
import "./CarrouselStyles.css";

const Carousel = ({ images }) => {
  return (
    <div 
      id="carouselExampleSlidesOnly" 
      className="carousel slide" 
      data-bs-ride="carousel" 
      data-bs-interval="3000"
    >
      <div className="carousel-inner h-100">
        {images.map((image, index) => (
          <div 
            className={`carousel-item h-100 ${index === 0 ? "active" : ""}`} 
            key={index}
          >
            <img 
              src={image.src} 
              className="d-block w-100 h-100 object-fit-cover" 
              alt={image.alt} 
            />
            {image.text && (
              <div className="carousel-caption d-flex align-items-center justify-content-center">
                <div className="text-container">
                  <p
                    className="carousel-text m-0"
                    dangerouslySetInnerHTML={{ __html: image.text }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
