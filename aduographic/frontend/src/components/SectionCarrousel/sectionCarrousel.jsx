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
    "/CarrouselImgs/1.webp",
    "/CarrouselImgs/2.webp",
    "/CarrouselImgs/3.webp",
    "/CarrouselImgs/4.webp",
    "/CarrouselImgs/5.webp",
    "/CarrouselImgs/6.webp",
    "/CarrouselImgs/7.webp",
    "/CarrouselImgs/8.webp",
    "/CarrouselImgs/9.webp",
    "/CarrouselImgs/10.webp",
    "/CarrouselImgs/11.webp",
    "/CarrouselImgs/12.webp",
    "/CarrouselImgs/13.webp",
    "/CarrouselImgs/14.webp",
    "/CarrouselImgs/15.webp",
    "/CarrouselImgs/16.webp",
    "/CarrouselImgs/17.webp",
    "/CarrouselImgs/18.webp",
    "/CarrouselImgs/19.webp",
    "/CarrouselImgs/20.webp",
  ]);

  const firstCarouselImages = images.slice(0, 10); // Primeras 10 imágenes
  const secondCarouselImages = images.slice(10); // Últimas 10 imágenes

  return (
    <div className="container section-carousel py-4 my-4">
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
