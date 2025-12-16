import { useRef } from "react";
import "./PortfolioCard.css";

export default function PortfolioCard({
  img,
  title,
  orientation = "horizontal",
  onClick
}) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    card.classList.add("is-active");

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const nx = x / rect.width - 0.5;
    const ny = y / rect.height - 0.5;
    const intensity = Math.sqrt(nx * nx + ny * ny);

    const moveX = nx * 25 * intensity;
    const moveY = ny * 25 * intensity;
    const rotate = nx * 6;
    const skew = ny * 4;

    img.style.transform = `
      translate(${moveX}px, ${moveY}px)
      rotate(${rotate}deg)
      skew(${skew}deg)
      scale(1.08)
    `;
  };

  const handleMouseLeave = () => {
    cardRef.current.classList.remove("is-active");
    imgRef.current.style.transform = "translate(0,0) scale(1)";
  };

  return (
    <div
      ref={cardRef}
      className={`portfolio-card ${orientation}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img ref={imgRef} src={img} alt={title} className="portfolio-img" />
      <span className="portfolio-label">{title}</span>
    </div>
  );
}
