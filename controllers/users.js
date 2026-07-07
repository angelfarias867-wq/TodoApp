const usersRouter = require('express').Router();// Importar el modelo de usuario
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const nodemailer = require('nodemailer');
const axios = require('axios');
const { PAGE_URL } = require('../config'); // Importar la URL de la página desde el archivo de configuración

//se valida que los campos no estén vacíos y se hace desestructuracion de objetos
usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;
  // console.log(name, email, password);

  if (!name || !email || !password) {
    return response
      .status(400)
      .json({ error: 'Todos los espacios son requeridos' });
  }

  //se verifica si el email ya existe
  const userExists = await User.findOne({ email });

  //Si el usuario ya existe, retornar un error
  if (userExists) {
    return response
      .status(400)
      .json({ error: 'El email ya se encuentra en uso' });
  }


//---------LA API--------------
  try {
    const apiKey = process.env.API_KEY;
    const url = `https://emailreputation.abstractapi.com/v1/?api_key=${apiKey}&email=${email}`;
    
    const abstractResponse = await axios.get(url);

    const status = abstractResponse.data?.email_deliverability?.status;

    if (status === 'undeliverable') {
      return response
        .status(400)
        .json({ error: 'El correo electrónico proporcionado no existe o no es válido.' });
    }
  } catch (apiError) {
    console.error('Error al conectar con Abstract API:', apiError.message);
  }
  //--------------------------------------
  
  //Se define el numero de rondas y luego y se usa la función .hash para encriptar la contraseña
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  //Se crea un nuevo usuario tomando como referencia el esquema de los modelos
  const newUser = new User({
    name,
    email,
    passwordHash,
    verified: true,
  });

  // Se guarda el usuario en la base de datos
  await newUser.save();
  
return response
    .status(201)
.json('Usuario creado exitosamente');
})

  // //Se genera un token de acceso con la libreria jwt y el metodo .sign se usa para generar la firma
  // const token = jwt.sign(
  //   { id: savedUser.id },
  //   process.env.ACCESS_TOKEN_SECRET,
  //   {
  //     expiresIn: '1d',
  //   }
  // );
  // //Se configura el transportador para enviar el correo electronico con el metodo de nodenailer createTransport 
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });
  // //se envia un correo de verificacion con el metodo de nodemailer sendMail
  // await transporter.sendMail({
  //   from: process.env.EMAIL_USER,
  //   to: savedUser.email,
  //   subject: 'Verificacion de usuario',
  //   html: `<a href="${PAGE_URL}/verify/${savedUser.id}/${token}">Verificar correo</a>`, //Crea el enlace con el id y el token
  // });
  //Retornar una respuesta al cliente
//   return response
//     .status(201)
//     .json('Usuario creado. por favor verifica tu correo');
// });


// Ruta para verificar el usuario mediante un token que se envia al correo electronico
// usersRouter.patch('/:id/:token', async (request, response) => {
//   // Verificar el token y actualizar el usuario
//   try {
//     const token = request.params.token;
//     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//     const id = decodedToken.id;
//     //Se busca por el id y se le agrega el verificado
//     await User.findByIdAndUpdate(id, { verified: true });
//     return response.sendStatus(200);

//   } catch (error) {
//     const id = request.params.id;
//     const { email } = await User.findById(id);

//     //Se crea un nuevo token
//         const token = jwt.sign({ id: id }, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: '1d'
//         });
    
//     //Se envia el email de nuevo
//     const transporter = nodemailer.createTransport({
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
//     //Enviar el email de verificacion
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Verificacion de usuario',
//       html: `<a href="${PAGE_URL}/verify/${id}/${token}">Verificar correo</a>`,
//     });
    
//     //Retornar un error al cliente
// return response.status(400).json({ error: 'El link ya expiro. Se ha enviado un nuevo link de verificacion' });
//   }
// });

// Ruta para obtener todos los usuarios
module.exports = usersRouter;