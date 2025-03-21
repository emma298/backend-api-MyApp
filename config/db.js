const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://2311081047:YJBJr5YDvWJD80Yo@cluster0.n0buw.mongodb.net/TAREAS', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a MongoDB establecida');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;