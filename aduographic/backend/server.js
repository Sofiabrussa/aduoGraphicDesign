
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Ruta para manejar el envío de correos
app.post("/send-email", async (req, res) => {
    const { nombre, email, celular, donde } = req.body;

    try {
        // Configurar el transporte de correo
        const transporter = nodemailer.createTransport({
            service: "gmail", // Puedes usar otros servicios como Outlook o configurar un servidor SMTP
            auth: {
                user: process.env.EMAIL_USER, // Email desde el que enviarás
                pass: process.env.EMAIL_PASS, // Contraseña o clave de aplicación
            },
        });

        // Opciones del correo
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER, // A quién envías el correo
            subject: "Nuevo formulario recibido",
            text: `
                Nombre: ${nombre}
                Email: ${email}
                Celular: ${celular}
                ¿Dónde nos conociste?: ${donde}
            `,
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        res.status(200).send("Correo enviado exitosamente.");
    } catch (error) {
        console.error(error);
        res.status(500).send("Hubo un error al enviar el correo.");
    }
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});