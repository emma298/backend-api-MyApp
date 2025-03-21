require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Importar conexión a MongoDB
const userRoutes = require('./routes/user.route');
const taskRoutes = require('./routes/task.route');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de gestión de tareas');
});

// 🔹 Conectar a la base de datos y luego iniciar el servidor
connectDB().then(() => {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    });
}).catch((err) => {
    console.error('❌ No se pudo iniciar el servidor:', err);
});
