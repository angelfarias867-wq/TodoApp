# 📝 TodoApp

TodoApp es una aplicación web fullstack diseñada para la gestión eficiente y segura de tareas en tiempo real. A diferencia de las aplicaciones de tareas comunes, este sistema implementa un entorno robusto de producción que incluye **arquitectura de base de datos relacional NoSQL** optimizada para el rendimiento del lado del cliente.

---

## 📐 Arquitectura del Sistema y Flujo de Datos

La aplicación sigue el patrón de arquitectura cliente-servidor desacoplado, comunicándose a través de una API RESTful corporativa.

### 🔄 Flujo del Ciclo de Autenticación y Persistencia
1. **Registro:** El cliente envía los datos de registro $\rightarrow$ El servidor valida la existencia real del buzón vía un tercero (*Abstract API*) $\rightarrow$ Si es válido, se procesa el hash con *Bcrypt* y se almacena el documento en *MongoDB*.
2. **Autenticación (Login):** El usuario provee sus credenciales $\rightarrow$ Se verifica la existencia y estado verificado en base de datos $\rightarrow$ Se genera un *JSON Web Token (JWT)* firmado criptográficamente con validez de 24 horas.
3. **Persistencia Segura:** El token no se expone al almacenamiento local del navegador (`localStorage`), sino que se inyecta en una cookie con banderas de aislamiento de entorno.
4. **Operación de Tareas (CRUD):** Cada petición subsiguiente lee la sesión desde la cookie entrante, garantizando que el usuario solo opere sobre los documentos que le pertenecen por ID.

---

## 🛠️ Stack Tecnológico

### Capa de Presentación (Frontend)
* **HTML5 Semantic Markup:** Estructura limpia y accesible.
* **Tailwind CSS:** Framework utilitario para interfaces responsivas, optimizado en producción mediante remoción de clases muertas (*Purge CSS*).
* **Vanilla JavaScript (ES6+ Asíncrono):** Manipulación avanzada del DOM mediante patrones de rendimiento como la **Delegación de Eventos** (un solo *listener* en el nodo raíz de la lista maneja los eventos de eliminar y completar).
* **Axios:** Cliente HTTP configurado para transferencias seguras globales (`withCredentials: true`).

### Capa de Negocio y Datos (Backend & DB)
* **Node.js & Express.js:** Motor de ejecución del lado del servidor utilizando enrutadores modulares y middlewares.
* **Mongoose ODM:** Modelado estricto de objetos de MongoDB para validación de tipos y relaciones de esquemas en tiempo de ejecución.
* **MongoDB Atlas:** Base de datos NoSQL basada en la nube.
---

## 📦 Arquitectura de Dependencias (Ecosistema del Backend)

El backend fue construido utilizando un conjunto de librerías modernas y eficientes, garantizando seguridad, modularidad y monitoreo en tiempo real. A continuación se detalla cada dependencia utilizada y su rol específico dentro del sistema:

* **`Express` (^5.2.1):** El núcleo del servidor web. Utiliza la versión más reciente de Express para gestionar el enrutamiento HTTP, los controladores de la API y el ciclo de petición-respuesta de forma asíncrona.
* **`Mongoose` (^9.6.2):** Object Data Modeling (ODM) para MongoDB. Define la estructura estricta de los esquemas de datos (`User` y `Todo`), maneja las conexiones con la base de datos y gestiona las relaciones mediante referencias de IDs.
* **`Jsonwebtoken` (^9.0.3):** Responsable de la emisión y verificación de los tokens de acceso (JWT). Transmite de forma cifrada la identidad del usuario autenticado entre el cliente y el servidor.
* **`Bcrypt` (^6.0.0):** Librería de hashing criptográfico. Se utiliza para enmascarar las contraseñas de los usuarios con un algoritmo de factor de costo seguro antes de guardarlas en la base de datos, protegiendo el sistema contra filtraciones.
* **`Cookie-parser` (^1.4.7):** Middleware esencial que decodifica las cabeceras de cookies HTTP enviadas por el navegador, transformándolas en el objeto legible `request.cookies` utilizado en los enrutadores de autenticación y cierre de sesión.
* **`Cors` (^2.8.6):** Mecanismo de seguridad (Cross-Origin Resource Sharing). Está configurado para permitir que tu frontend (incluso si corre en una puerta o dominio diferente) haga peticiones al backend de forma legítima y envíe cookies de sesión de manera segura.
* **`Dotenv` (^17.4.2):** Gestor de variables de entorno. Carga las configuraciones críticas y secretos (como claves de API y cadenas de conexión de la base de datos) a partir del archivo `.env`, impidiendo la exposición de datos sensibles en el código fuente.
* **`Morgan` (^1.11.0):** Middleware de registro (logger) de peticiones HTTP para la consola. Facilita el monitoreo en tiempo de desarrollo, mostrando el método, la ruta, el código de estado y el tiempo de respuesta de cada llamada recibida por el servidor.

---

## 🗄️ Modelado de Datos (Esquemas de Mongoose)

El sistema optimiza el almacenamiento estructurando relaciones mediante referencias directas de documentos.

```javascript
const todoSchema = new mongoose.Schema({
    text: { type: String, required: true },
    checked: { type: Boolean, default: false },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});