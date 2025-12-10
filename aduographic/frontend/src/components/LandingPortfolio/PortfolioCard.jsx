import "./PortfolioCard.css";

export default function PortfolioCard({ img, title, orientation = "horizontal" }) {
  return (
    <div className={`portfolio-card ${orientation}`}>
      <img src={img} alt={title} className="portfolio-img" />
      <span className="portfolio-label">{title}</span>
    </div>
  );
}
