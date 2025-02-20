import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";
import { Container} from 'react-bootstrap';
import CustomCard from './CustomCard';

function SectionCards() {
    return (
        <Container fluid id="SectionCards" className="container-fluid">
            <Container className="row justify-content-center align-items-center min-vh-100">
                <CustomCard image="/imgCards/valu.png" title="Valentina Tajchman" text="Diseñadora gráfica" />
                <CustomCard image="/imgCards/jose.png" title="Josefina Bas" text="Diseñadora gráfica" />
            </Container>
        </Container>
    );
}

export default SectionCards;



