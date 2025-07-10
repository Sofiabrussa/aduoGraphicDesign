import { Card } from 'react-bootstrap'
import "./SectionPortafolioStyles.css"

const PortfolioTitle = () => {
  return (
    <Card className='sectionPortfolioText text-center'>
      <Card.Title className="lh-sm">
        <span className="span-violeta">branding</span> y {" "}
        <span className="span-violeta">diseño</span> para <br /> que 
        tu esencia explote en cada detalle.
      </Card.Title>
    </Card>
  );
};

export default PortfolioTitle;
