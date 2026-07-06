require("dotenv").config();  // Carga las variables ocultas del archivo .env
const express = require("express"); //El framework para crear el servidor
const mongoose = require("mongoose"); // La librería para conectarnos y hablar con MongoDB
const path = require("path") //para manejar y resolver rutas de carpetas de forma segura
const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const todosRouter = require('./controllers/todos')
const logoutRouter = require('./controllers/logout')
const cors = require("cors") //Middleware para permitir/bloquear peticiones desde otros puertos o dominios
const cookieParser = require("cookie-parser") //Middleware para leer y manipular las cookies que envía el navegador
const morgan = require("morgan"); //Middleware para ver en la consola las peticiones HTTP que van llegando (Logs)
const { userExtractor } = require("./middleware/auth");

const app = express();
exports.app = app;
const { MONGO_URI } = require("./config");

(async() => {

try {
    //Se conecta a la base de datos
await mongoose.connect(MONGO_URI)
// console.log("Conectado a Mongo DB");

} catch (error) {
console.log(error);
}
})()

app.use(cors())
app.use(cookieParser())
app.use(express.json()) // Permite que el servidor entienda los datos que le llegan en formato JSON

//Rutas frontend
app.use("/", express.static(path.resolve("views", "home")))
app.use("/styles", express.static(path.resolve("views", "styles")));
app.use('/signup', express.static(path.resolve('views','signup')))
app.use('/components', express.static(path.resolve('views','components')));
app.use('/img', express.static(path.resolve('img')));
app.use('/todos', express.static(path.resolve('views', 'todos')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/verify', express.static(path.resolve('views', 'verify')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));

//Morgan permite elegir qué tan detallada es la informacio en la consolaa
app.use(morgan("tiny"))

//Rutas backend
app.use("/api/users", usersRouter)
app.use("/api/login", loginRouter)
app.use("/api/todos", userExtractor, todosRouter)
app.use("/api/logout", logoutRouter)

module.exports = app;