import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";


function SectionCards() {
    return (
        <div id='SectionCards' className="container-fluid d-flex justify-content-center align-items-center text-center">
            <div className="card rounded-5 position-relative overflow-hidden">
                <img
                    src="/imgCards/valu.png"
                    className="card-img-top w-100 h-auto"
                    alt="Imagen 1"
                    style={{ objectFit: "cover" }}
                />
                <div className="overlay d-flex justify-content-end align-items-center flex-column p-5">
                    <h5 className="card-title"><b>Valentina Tajchman</b></h5>
                    <p className="card-text">Diseñadora gráfica</p>
                </div>
            </div>
            <div className="card rounded-5 position-relative overflow-hidden">
                <img
                    src="/imgCards/jose.png"
                    className="card-img-top w-100 h-auto"
                    alt="Imagen 2"
                    style={{ objectFit: "cover" }}
                />
                <div className="overlay d-flex justify-content-end align-items-center flex-column p-5">
                    <h5 className="card-title"><b>María Josefina Bas</b></h5>
                    <p className="card-text">Diseñadora gráfica</p>
                </div>
            </div>
        </div>
    );
}

export default SectionCards;


