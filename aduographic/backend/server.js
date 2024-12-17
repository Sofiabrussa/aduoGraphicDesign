require('dotenv').config(); 
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000; 

// Middleware
app.use(cors());
app.use(bodyParser.json()); //Convierte los datos de formato JSON en un objeto JavaScript para poder acceder a ellos.

// Ruta para manejar el envío del formulario
app.post('/send-email', (req, res) => {  //req representa lo q envia el cliente y res la rta del servidor.
    const { nombre, email, celular, conociste } = req.body; //Accede a los datos JSON enviados
    console.log(req.body); // Muestra los datos en consola

    // Configuración de Nodemailer usando variables de entorno
    const transporter = nodemailer.createTransport({ //Crea un transporte de correo electrónico, que es el objeto encargado de enviar correos.
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Usuario desde .env
            pass: process.env.EMAIL_PASS, // Contraseña o App Password desde .env
        },
    });

    // Contenido del correo
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO, // A dónde se enviará el correo
        subject: 'Nuevo formulario de contacto recibido',
        text: `
            Nombre y Apellido: ${nombre}
            Email: ${email}
            Celular: ${celular}
            ¿Dónde nos conociste?: ${conociste}
        `,
    };

    // Enviar correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: 'Error al enviar el correo' });
        } else {
            console.log('Correo enviado: ' + info.response);
            res.status(200).json({ message: 'Correo enviado correctamente' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
