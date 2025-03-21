const Task = require('../models/Task');

// Crear una nueva tarea
const createTask = async (req, res) => {
    try {
        const { title, description, status, userId } = req.body;
        const newTask = await Task.create({ title, description, status, userId });
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la tarea: ' + error.message });
    }
};

// Obtener todas las tareas de un usuario
const getTasksByUser = async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.params.userId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las tareas: ' + error.message });
    }
};

// Obtener una tarea por ID
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tarea: ' + error.message });
    }
};

// Actualizar una tarea por ID
const updateTaskById = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tarea: ' + error.message });
    }
};

// Eliminar una tarea por ID
const deleteTaskById = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tarea: ' + error.message });
    }
};

module.exports = {
    createTask,
    getTasksByUser,
    getTaskById,
    updateTaskById,
    deleteTaskById,
};