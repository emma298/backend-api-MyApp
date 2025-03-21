const User = require('../models/User');

// Obtener todos los usuarios
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios: ' + error.message });
    }
};

// Obtener un usuario por ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario: ' + error.message });
    }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
    try {
        const { name, lastName, nickname, password } = req.body;
        const newUser = await User.create({ name, lastName, nickname, password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario: ' + error.message });
    }
};

// Actualizar un usuario por ID
const updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario: ' + error.message });
    }
};

// Eliminar un usuario por ID
const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario: ' + error.message });
    }
};

// Iniciar sesión
const loginUser = async (req, res) => {
    try {
        const { nickname, password } = req.body;
        const user = await User.findOne({ nickname, password });
        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión: ' + error.message });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    loginUser,
};