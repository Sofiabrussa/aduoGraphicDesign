import { useEffect, useRef, useState } from "react";
import './sectionCarrouselStyles.css';

const AutoCarousel = ({ images, direction }) => {
  const scrollRef = useRef(null);


  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Duplicamos el contenido para crear el efecto infinito
    const content = scrollContainer.innerHTML;
    scrollContainer.innerHTML = content + content;

    const scroll = () => {
      if (!scrollContainer) return;
      
      const maxScroll = scrollContainer.scrollWidth / 2;
      
      if (direction === "left") {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      } else {
        scrollContainer.scrollLeft -= 1;
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = maxScroll;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, [direction]);

  return (
    <div
      ref={scrollRef}
      className="d-flex flex-nowrap gap-3 py-4 auto-carousel"
      style={{ overflowX: "hidden" }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className="img-fluid rounded shadow carousel-img"
        />
      ))}
    </div>
  );
};

const SectionCarrousel = () => {

  const [images] = useState([
    "/CarrouselImgs/1.png",
    "/CarrouselImgs/2.png",
    "/CarrouselImgs/3.png",
    "/CarrouselImgs/4.png",
    "/CarrouselImgs/5.png",
    "/CarrouselImgs/6.png",
    "/CarrouselImgs/7.png",
    "/CarrouselImgs/8.png",
    "/CarrouselImgs/9.png",
    "/CarrouselImgs/10.png",
    "/CarrouselImgs/11.png",
    "/CarrouselImgs/12.png",
    "/CarrouselImgs/13.png",
    "/CarrouselImgs/14.png",
    "/CarrouselImgs/15.png",
    "/CarrouselImgs/16.jpg",
    "/CarrouselImgs/17.jpg",
    "/CarrouselImgs/18.png",
    "/CarrouselImgs/19.jpg",
    "/CarrouselImgs/20.jpg",
  ]);

  const firstCarouselImages = images.slice(0, 10); // Primeras 10 imágenes
  const secondCarouselImages = images.slice(10); // Últimas 10 imágenes

  return (
    <div className="container section-carousel py-4 my-4 ">
      <div className="d-flex flex-column gap-4">
        {/* Carrusel hacia la izquierda */}
        <div className="overflow-hidden ">
          <AutoCarousel images={firstCarouselImages} direction="left" />
        </div>

        {/* Carrusel hacia la derecha */}
        <div className="overflow-hidden">
          <AutoCarousel images={secondCarouselImages}  direction="right" />
        </div>
      </div>
    </div>
  );
};

export default SectionCarrousel;
