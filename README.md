# API de Gestión de Tareas

Este es un backend construido con **Node.js**, **Express.js** y **MongoDB** para gestionar usuarios y tareas.

## Tecnologías Utilizadas
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- Cors
- Dotenv

## Instalación

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tuusuario/tu-repositorio.git
   ```
2. Entra en el directorio del proyecto:
   ```sh
   cd tu-repositorio
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
4. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto y agrega:
   ```env
   MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/TAREAS
   PORT=3000
   ```

## Uso

Para iniciar el servidor en desarrollo:
```sh
npm run dev
```
Para iniciar en producción:
```sh
npm start
```
El servidor correrá en `http://localhost:3000/` por defecto.

## Endpoints

### Usuarios (`/api/users`)
| Método | Endpoint         | Descripción                   |
|---------|----------------|--------------------------------|
| GET     | `/`            | Obtener todos los usuarios    |
| GET     | `/:id`         | Obtener un usuario por ID     |
| POST    | `/`            | Crear un usuario             |
| PUT     | `/:id`         | Actualizar usuario por ID    |
| DELETE  | `/:id`         | Eliminar usuario por ID      |
| POST    | `/login`       | Iniciar sesión              |

### Tareas (`/api/tasks`)
| Método | Endpoint         | Descripción                   |
|---------|----------------|--------------------------------|
| POST    | `/`            | Crear una nueva tarea         |
| GET     | `/user/:userId`| Obtener tareas de un usuario |
| GET     | `/:id`         | Obtener tarea por ID         |
| PUT     | `/:id`         | Actualizar tarea por ID      |
| DELETE  | `/:id`         | Eliminar tarea por ID       |

## Estructura del Proyecto
```
backend/
├── config/
│   ├── db.js                # Conexión a MongoDB
│
├── controllers/             # Lógica de negocio de la API
│   ├── task.controller.js   # Controlador de tareas (crear, leer, actualizar y eliminar tareas)
│   ├── user.controller.js   # Controlador de usuarios (gestionar usuarios y autenticación)
│
├── models/                  # Modelos de datos para MongoDB
│   ├── Task.js              # Esquema y modelo de tareas
│   ├── User.js              # Esquema y modelo de usuarios
│
├── routes/                  # Definición de rutas y endpoints
│   ├── task.route.js        # Rutas para operaciones con tareas
│   ├── user.route.js        # Rutas para operaciones con usuarios
│
├── .env                     # Variables de entorno (configuración segura)
├── index.js                 # Punto de entrada principal de la aplicación
├── package.json             # Dependencias y configuraciones del proyecto
```






