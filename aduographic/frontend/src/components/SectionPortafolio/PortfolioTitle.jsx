import { Card } from 'react-bootstrap'
import "./SectionPortafolioStyles.css"

const PortfolioTitle = () => {
  return (
    <Card className="my-3 d-flex justify-content-center align-items-center sectionPortfolioText" style={{ border: "1px solid white" }}>
      <Card.Title className="text-center">
        <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }}>
          branding
        </span>{" "}
        <span className="OtherText">y</span>{" "}
        <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }}>
          diseño
        </span>{" "}
        <span className="OtherText">
          pensados para que <br />
          <span style={{ fontWeight: 500 }}>tu esencia explote</span> en cada detalle.
        </span>
      </Card.Title>
    </Card>
  );
};

export default PortfolioTitle;
