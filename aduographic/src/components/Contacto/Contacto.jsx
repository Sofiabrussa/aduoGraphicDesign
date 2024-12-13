import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ContactoStyles.css";

function Contacto() {
    return (
        <div id='Contacto' className="container-fluid vh-100 SectionContacto d-flex justify-content-center flex-column">
            <div className="container-fluid ">
                <h1> Nos inspiran las historias <br/> Contanos la tuya.</h1>
            </div>
            <div className="container-fluid ">
                <p>Queremos trabajar contigo y crear marcas con las que soñamos. </p>
            </div>
            <div>
                <form>
                    <div className="mb-3 col-4 	">
                        <label for="exampleNombreapellido" class="form-label">Nombre y apellido*</label>
                        <input type="text" class="form-control" id="exampleNombreapellido" aria-describedby="NombreHelp" />
                    </div>
                    <div className="mb-3 col-4 	">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-4 ">
                        <label for="exampleCelular" class="form-label">Celular*</label>
                        <input type="tel" class="form-control" id="exampleCelular" aria-describedby="CelularHelp" />
                    </div>
                    <div className="mb-3 col-4 ">
                        <label for="exampleconociste" class="form-label">¿Donde nos conociste?*</label>
                        <input type="text" class="form-control" id="exampleconociste" aria-describedby="conocisteHelp" />
                    </div>
                    <p className='ms-5'>Al enviar este formulario, acepta que almacenemos
                    sus datos para gestionar su consulta. </p>
                    <button type="submit" className="btn btn-primary ">Submit</button>
                </form>

            </div>
        </div>

    );
};

export default Contacto