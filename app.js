var nodemailer = require("nodemailer");

var transporte = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "cabenitez83@gmail.com",
            pass: "abcde12345"
        }
    });

var opcionesMail = {
        from: "Carlos Alberto Benitez - <cabenitez83@gmail.com>",
        to: "cabenitez83@gmail.com",
        subject: "Prueba de Nodemailer",
        text: "Prueba de Nodemailer",
        html: "<b>Esto es una Prueba ✔</b> ",
        attachments:[
            // Archivo de texto adjunto
            {
                fileName: 'adjunto.txt',
                contents: 'Contenido del archivo de texto Adjunto.',
                contentType: 'text/plain'
            },
            // Archivo binario adjunto
            {
                fileName: 'Check.png',
                contents: new Buffer('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD/' +
                                     '//+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4U' +
                                     'g9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC', 'base64'),
                cid: 'check@node'
            },
            // Archivo físico adjunto
            {
                fileName: 'logo-node.png',
                filePath: __dirname+"/logo-node.png",
                cid: 'logo-node@node'
            }
        ]
    };

transporte.sendMail(opcionesMail, function(error, response){
    if(error)
        console.log(error);
    else
        console.log("Mensaje enviado: " + response.message);
    // Descomentar la siguiente línea si no se necesitan enviar mas mensajes.
    //transporte.close();
});