import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";


function SectionCards() {
    return (
        <div id='SectionCards' className="container-fluid vh-100 d-flex justify-content-center align-items-center text-center gap-5">
            <div className="card rounded-5 position-relative overflow-hidden" style={{ width: "100%", maxWidth: "23rem" }}>
                <img
                    src="/imgCards/valu.png"
                    className="card-img-top w-100 h-auto"
                    alt="Imagen 1"
                    style={{ objectFit: "cover" }}
                />
                <div className="overlay d-flex justify-content-end align-items-center flex-column p-5">
                    <h5 className="card-title fs-5 fs-sm-5 fs-md-6">Valentina Tajchman</h5>
                    <p className="card-text fs-5">Diseñadora gráfica</p>
                </div>
            </div>
            <div className="card rounded-5 position-relative overflow-hidden" style={{ width: "100%", maxWidth: "23rem" }}>
                <img
                    src="/imgCards/jose.png"
                    className="card-img-top w-100 h-auto"
                    alt="Imagen 2"
                    style={{ objectFit: "cover" }}
                />
                <div className="overlay d-flex justify-content-end align-items-center flex-column p-5">
                    <h5 className="card-title fs-5 fs-sm-5 fs-md-6">María Josefina Bas</h5>
                    <p className="card-text fs-5">Diseñadora gráfica</p>
                </div>
            </div>
        </div>
    );
}

export default SectionCards;


