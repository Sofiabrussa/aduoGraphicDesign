import React from "react";

const Carousel = ({ images }) => {

  const fontFamily = getComputedStyle(document.documentElement).getPropertyValue('--font-title');
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <img src={image.src} className="d-block w-100" alt={image.alt} />
            {/* Verificamos si hay texto antes de mostrar la sección */}
            {image.text && (
              <div
                className="carousel-caption"
                style={{
                  top: "18%",
                  fontFamily: fontFamily,
                  fontWeight: "300",
                  fontSize: "2rem",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
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
