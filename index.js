require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user.route');
const taskRoutes = require('./routes/task.route');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de gestión de tareas');
});

// Conectar a MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Conexión a MongoDB establecida');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));
