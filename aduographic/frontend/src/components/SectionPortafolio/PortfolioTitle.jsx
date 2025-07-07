import { Card } from 'react-bootstrap'
import "./SectionPortafolioStyles.css"

const PortfolioTitle = () => {
  return (
    <Card className='sectionPortfolioText text-center'>
      <Card.Title>
        <span className="span-violeta">branding</span> y {" "}
        <span className="span-violeta">diseño</span> pensados para que <br />
        tu esencia explote en cada detalle.
      </Card.Title>
    </Card>
  );
};

export default PortfolioTitle;
