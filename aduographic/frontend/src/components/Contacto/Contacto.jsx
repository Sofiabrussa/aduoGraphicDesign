import Button from '../Button/Button';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert, Card } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './ContactoStyles.css';

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        celular: '',
        conociste: '',
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertVariant, setAlertVariant] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const templateParams = {
            nombre: formData.nombre,
            email: formData.email,
            celular: formData.celular,
            conociste: formData.conociste,
        };

        console.log('Enviando email con:', templateParams);
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then(
            (response) => {
                console.log('Correo enviado:', response.text);
                setAlertVariant('success');
                setAlertMessage('Formulario enviado correctamente');
                setShowAlert(true);
                setFormData({ nombre: '', email: '', celular: '', conociste: '' });
                setIsSubmitting(false);
            },
            (error) => {
                console.error('Error al enviar:', error.text);
                setAlertVariant('danger');
                setAlertMessage('Error al enviar el formulario');
                setShowAlert(true);
                setIsSubmitting(false);
            }
        );
    };

    return (
        <div id='contacto' className="section-contacto" style={{ backgroundImage: "url('/contacto/imagencontacto.webp')" }}>
            <Container fluid className="py-5">
                <Row className="justify-content-start mx-md-4">
                    <Col xs={12} md={8} lg={6} xl={5} className="px-4 py-3">
                        <div className="mb-4">
                            <Card.Title className="text-start">
                                Nos inspiran las <span className="text-accent">historias </span> <br /> Contanos la tuya.
                            </Card.Title>
                        </div>
                        <div className="text-start mb-4">
                            <Card.Text className="text-start lh-sm">
                                Queremos trabajar en conjunto con vos y crear marcas con las que soñamos.
                            </Card.Text>
                        </div>
                        
                        {showAlert && (
                            <Alert 
                                variant={alertVariant} 
                                className="mb-3" 
                                onClose={() => setShowAlert(false)} 
                                dismissible
                            >
                                {alertMessage}
                            </Alert>
                        )}
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 card-text" controlId="nombre">
                                <Form.Label>Nombre y apellido*</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-3 card-text" controlId="email">
                                <Form.Label>Email*</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-3 card-text" controlId="celular">
                                <Form.Label>Celular*</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="celular"
                                    value={formData.celular}
                                    onChange={handleChange}
                                    required
                                    
                                />
                            </Form.Group>
                            
                            <Form.Group className="mb-3 card-text" controlId="conociste">
                                <Form.Label>¿Dónde nos conociste?*</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="conociste"
                                    value={formData.conociste}
                                    onChange={handleChange}
                                    required
                                    
                                />
                            </Form.Group>
                            
                            <Card.Text className="text-start lh-sm">
                                Al enviar este formulario, acepta que almacenemos sus datos para gestionar su consulta.
                            </Card.Text>
                            
                            <div className="mb-4 text-start">
                                <Button 
                                    type="submit" 
                                    className="button-formulario" 
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Contacto;


//Cuando creás tu Template, asegurate de que los nombres de los parámetros coincidan: https://www.emailjs.com/
//Nombre: {{nombre}}
//Email: {{email}}
//Celular: {{celular}}
//¿Dónde nos conociste?: {{conociste}}