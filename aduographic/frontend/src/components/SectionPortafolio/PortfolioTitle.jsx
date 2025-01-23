const PortfolioTitle = () => {
    return (
      <div className="my-3 d-flex justify-content-center align-items-center sectionPortfolioText">
        <h1 className="text-center">
          <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }}>
            branding{" "}
          </span>{" "}
          y{" "}
          <span className="SpanPortfolioHand" style={{ color: "var(--second-violet)" }}>
            diseño
          </span>{" "}
          pensados para que <br />
          <span style={{ fontWeight: 400 }}>tu esencia explote</span> en cada detalle.
        </h1>
      </div>
    );
  };
  export default PortfolioTitle;