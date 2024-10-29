# eCommerce Backend

Este proyecto es una API para un sistema de autenticación de usuarios en un e-commerce, desarrollada para la pre-entrega del curso Programación Backend II: Diseño y Arquitectura Backend. La API permite el registro, autenticación y verificación de sesiones de usuario, así como el acceso a los datos del usuario actual.



## Estructura del Proyecto

src/
│
├── config/
│   └── passport.js            
│
├── middlewares/
│   └── authMiddleware.js        
│
├── models/
│   └── User.js                  
├── routes/
│   └── sessions.js             
│
├── app.js                      
└── .env                        # 

## Inicio del servidor 

node src/app.js
 



## Prueba con Postman
Para probar los endpoints:

Registro de usuario: Realiza una solicitud POST a /api/sessions/register con los datos de usuario en el cuerpo de la solicitud.
 
 Endpoints

 1. Registro de Usuario
 - Ruta: /api/sessions/register
 - Método: POST
 - Descripción: Registra un nuevo usuario en la base de datos.
 - Body (JSON)

{
  "first_name": "francisco",
  "last_name": "tomasino",
  "email": "francisco@hotmail.com",
  "age": 30,
  "password": "password"
}

Login de usuario: Realiza una solicitud POST a /api/sessions/login para obtener el token JWT.

2. Login de Usuario

- Ruta: /api/sessions/login
- Método: POST
- Descripción: Autentica al usuario y devuelve un token JWT.
- Body (JSON):

{
  "email": "francisco@tomasino.com",
  "password": "password"
}

Obtener usuario actual: Realiza una solicitud GET a /api/sessions/current, enviando el token JWT en el encabezado Authorization.

3. Obtener Usuario Actual

- Ruta: /api/sessions/current
- Método: GET
- Descripción: Devuelve la información del usuario actual, validando el JWT.
- Headers:

Authorization: Bearer <token_jwt>


Obtener todos los usuraios: Realiza una solicitud GET a /api/sessions/users, enviando el send.
