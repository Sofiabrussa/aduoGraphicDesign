import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";

function SectionCards() {
    return (
        <div id='SectionCards' className="container-fluid ">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-12 col-md-5 col-lg-3 mb-4">
                    <div className="card card-animate rounded-5 position-relative overflow-hidden">
                        <img
                            src="/imgCards/valu.png"
                            className="card-img-top w-100"
                            alt="Valentina Tajchman"
                            loading="lazy"
                        />
                        <div className="overlay d-flex justify-content-end align-items-center flex-column p-4">
                            <h5 className="card-title mb-2"><b>Valentina Tajchman</b></h5>
                            <p className="card-text">Diseñadora gráfica</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 col-lg-3 mb-4">
                    <div className="card card-animate rounded-5 position-relative overflow-hidden">
                        <img
                            src="/imgCards/jose.png"
                            className="card-img-top w-100"
                            alt="María Josefina Bas"
                            loading="lazy"
                        />
                        <div className="overlay d-flex justify-content-end align-items-center flex-column p-4">
                            <h5 className="card-title mb-2"><b>María Josefina Bas</b></h5>
                            <p className="card-text">Diseñadora gráfica</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SectionCards;



