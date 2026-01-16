Task Manager API 🗂️

API REST desarrollada con Node.js, Express y MongoDB para la gestión de usuarios y tareas, con autenticación segura mediante JWT.
Este proyecto está enfocado en buenas prácticas de backend, separación de responsabilidades y seguridad básica para aplicaciones reales.

🚀 Descripción del proyecto

Task Manager API permite:

Registrar y autenticar usuarios

Proteger rutas mediante JSON Web Tokens

Crear y listar tareas asociadas a cada usuario autenticado

Mantener los datos aislados por usuario

Trabajar con MongoDB Atlas como base de datos en la nube

El objetivo del proyecto es servir como base sólida para aplicaciones backend que requieran autenticación y manejo de recursos privados.

🛠️ Tecnologías utilizadas

Node.js

Express

MongoDB Atlas

Mongoose

JWT (jsonwebtoken)

bcryptjs

dotenv

nodemon (desarrollo)


📁 Estructura del proyecto

src/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Task.js
│
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
│
└── index.js


📌 Endpoints principales
Autenticación

Registrar usuario

POST /auth/register


Body:

{
  "name": "Juan",
  "username": "juan123",
  "email": "juan@mail.com",
  "password": "123456"
}


Login

POST /auth/login


Body:

{
  "email": "juan@mail.com",
  "password": "123456"
}

Tareas (rutas protegidas)

Crear tarea

POST /tasks


Body:

{
  "title": "Aprender Node.js"
}


Obtener tareas del usuario

GET /tasks

⚙️ Variables de entorno

Crear un archivo .env en la raíz del proyecto:

PORT=4000
MONGO_URI=tu_uri_de_mongodb_atlas
JWT_SECRET=tu_secreto

▶️ Ejecución en local
npm install
npm run dev


El servidor se ejecuta en:

http://localhost:4000




🧪 Pruebas

Las rutas fueron probadas usando Thunder Client / Postman, validando:

Autenticación correcta

Protección de rutas

Asociación de tareas por usuario

Manejo de errores comunes

📈 Estado del proyecto

✅ Autenticación funcional
✅ Rutas protegidas con middleware
✅ CRUD básico de tareas
✅ Base estable para ampliaciones futuras

🔮 Posibles mejoras

Actualizar y eliminar tareas

Roles de usuario

Tests automatizados

Paginación y filtros

Refresh tokens

👨‍💻 Autor

Jefferson Bedoya, proyecto desarrollado como parte de un portafolio backend, enfocado en demostrar dominio de autenticación, APIs REST y MongoDB.