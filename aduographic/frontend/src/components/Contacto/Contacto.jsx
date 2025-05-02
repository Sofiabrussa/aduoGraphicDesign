import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactoStyles.css';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        celular: '',
        conociste: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            nombre: formData.nombre,
            email: formData.email,
            celular: formData.celular,
            conociste: formData.conociste,
        };

        emailjs.send(
            'TU_SERVICE_ID',       // 🔁 Reemplazá con tu Service ID
            'TU_TEMPLATE_ID',      // 🔁 Reemplazá con tu Template ID
            templateParams,
            'TU_PUBLIC_KEY'        // 🔁 Reemplazá con tu Public Key (User ID)
        ).then(
            (response) => {
                console.log('Correo enviado:', response.text);
                alert('Formulario enviado correctamente');
                setFormData({ nombre: '', email: '', celular: '', conociste: '' });
            },
            (error) => {
                console.error('Error al enviar:', error.text);
                alert('Error al enviar el formulario');
            }
        );
    };

    return (
        <div id='contacto' className="container-fluid SectionContacto d-flex justify-content-center flex-column" style={{ backgroundImage: "url('/contacto/imagencontacto.jpg')" }}>
            <div className='m-4 p-5 '>
                <div className="text-start">
                    <h1>Nos inspiran las <span>historias</span> <br /> Contanos la tuya.</h1>
                </div>
                <div className="text-start mt-4">
                    <p>Queremos trabajar en conjunto con vos y crear marcas <br />con las que soñamos.</p>
                </div>
                <form className='mt-4' onSubmit={handleSubmit}>
                    <div className="mb-3 col-4 container-form-label">
                        <label htmlFor="nombre" className="form-label">Nombre y apellido*</label>
                        <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-4 container-form-label">
                        <label htmlFor="email" className="form-label">Email*</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-4 container-form-label">
                        <label htmlFor="celular" className="form-label">Celular*</label>
                        <input type="tel" className="form-control" id="celular" name="celular" value={formData.celular} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 col-4 container-form-label">
                        <label htmlFor="conociste" className="form-label">¿Dónde nos conociste?*</label>
                        <input type="text" className="form-control" id="conociste" name="conociste" value={formData.conociste} onChange={handleChange} required />
                    </div>
                    <p className="text-start">Al enviar este formulario, acepta que almacenemos sus datos para gestionar su consulta.</p>
                    <div className='mb-2 pb-2'>
                        <button type="submit" className="btn">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacto;


//Cuando creás tu Template, asegurate de que los nombres de los parámetros coincidan: https://www.emailjs.com/
//Nombre: {{nombre}}
//Email: {{email}}
//Celular: {{celular}}
//¿Dónde nos conociste?: {{conociste}}