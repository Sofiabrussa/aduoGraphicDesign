import React, { useState } from 'react';
import axios from 'axios';
import './ContactoStyles.css';


function Contacto() {
    const [formData, setFormData] = useState({  //formData contiene los campos del formulario
        nombre: '',
        email: '',
        celular: '',
        conociste: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {  //se ejecutará cuando el usuario envíe el formulario.
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/send-email', formData); //URL de la ruta en tu backend donde se recibe la solicitud para enviar el correo.
            alert('Formulario enviado correctamente');
            console.log(response.data);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            alert('Error al enviar el formulario');
        }
    };

    return (
        <div id='contacto' className="container-fluid vh-100 SectionContacto d-flex justify-content-center flex-column">
            <div className='m-5 p-5 '>
                <div className="container-fluid m-0 p-0">
                    <h1>Nos inspiran las <span>historias</span><br /> Contanos la tuya.</h1>
                </div>
                <div className="container-fluid m-0 p-0 mt-4">
                    <p>Queremos trabajar contigo y crear marcas<br />con las que soñamos.</p>
                </div>
                <div>
                    <form className='mt-4' onSubmit={handleSubmit}>
                        <div className="mb-3 col-4">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre} //guardo variable nombre 
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="email" className="form-label">Email*</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="celular" className="form-label">Celular*</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="celular"
                                name="celular"
                                value={formData.celular}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 col-4">
                            <label htmlFor="conociste" className="form-label">¿Dónde nos conociste?*</label>
                            <input
                                type="text"
                                className="form-control"
                                id="conociste"
                                name="conociste"
                                value={formData.conociste}
                                onChange={handleChange}
                            />
                        </div>
                        <p>Al enviar este formulario, acepta que almacenemos sus datos para gestionar su consulta.</p>
                        <button type="submit" className="btn">Enviar</button> {/* El tipo submit en el botón indica que este botón está relacionado con el envío del formulario. */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
