import { Card } from 'react-bootstrap'

const PortfolioTitle = () => {
    return (
      <Card className="my-3 d-flex justify-content-center align-items-center sectionPortfolioText" style={{ border: "1px solid white" }}>
        <Card.Title className="text-center">
          <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }}>
            branding{" "}
          </span>{" "}
          y{" "}
          <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }}>
            diseño
          </span>{" "}
          pensados para que <br />
          <span style={{ fontWeight: 500 }} >tu esencia explote </span> en cada detalle.
        </Card.Title>
      </Card>
    );
  };
  export default PortfolioTitle;