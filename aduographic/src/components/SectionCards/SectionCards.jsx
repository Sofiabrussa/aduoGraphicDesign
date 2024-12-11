import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SectionCardsStyles.css";


function SectionNosotras() {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center text-center gap-5">
            <div className="card position-relative overflow-hidden" style={{ width: "100%", maxWidth: "23rem" }}>
                <img
                    src="/imgCards/0ba1b57d50a98b9287eebd68b93882b0.jpg"
                    className="card-img-top w-100 h-auto"
                    alt="Imagen 1"
                    style={{ objectFit: "cover" }}
                />
                <div className="overlay d-flex justify-content-end align-items-center flex-column p-5">
                    <h5 className="card-title fs-5 fs-sm-5 fs-md-6">Valentina Tachman</h5>
                    <p className="card-text fs-5">Diseñadora gráfica</p>
                </div>
            </div>
            <div className="card position-relative overflow-hidden" style={{ width: "100%", maxWidth: "23rem" }}>
                <img
                    src="/imgCards/8952e74f5cef2b0ee312d671b86e6b12.jpg"
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

export default SectionNosotras;


