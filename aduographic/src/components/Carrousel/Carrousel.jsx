import React from "react";


const Carousel = ({ images }) => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <img src={image.src} className="d-block w-100" alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;