import { useEffect, useRef, useState } from "react";

const AutoCarousel = ({ direction }) => {
  const scrollRef = useRef(null);
  const [images] = useState([
    "/CarrouselImgs/1.png",
    "/CarrouselImgs/2.png",
    "/CarrouselImgs/3.png",
    "/CarrouselImgs/4.png",
    "/CarrouselImgs/5.png",
    "/CarrouselImgs/6.png",
    "/CarrouselImgs/7.png",
    "/CarrouselImgs/8.png",
  ]);

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
      className="d-flex flex-nowrap gap-3 py-4"
      style={{ overflowX: "hidden" }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className="img-fluid rounded shadow"
        />
      ))}
    </div>
  );
};

const SectionCarrousel = () => {
  return (
    <div className="container py-4">
      <div className="d-flex flex-column gap-4">
        {/* Carrusel hacia la izquierda */}
        <div className="overflow-hidden ">
          <AutoCarousel direction="left" />
        </div>

        {/* Carrusel hacia la derecha */}
        <div className="overflow-hidden">
          <AutoCarousel direction="right" />
        </div>
      </div>
    </div>
  );
};

export default SectionCarrousel;
