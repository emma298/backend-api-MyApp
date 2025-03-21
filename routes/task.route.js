const express = require('express');
const router = express.Router();
const {
    createTask,
    getTasksByUser,
    getTaskById,
    updateTaskById,
    deleteTaskById,
} = require('../controllers/task.controller');

// Rutas para tareas
router.post('/', createTask);
router.get('/user/:userId', getTasksByUser);
router.get('/:id', getTaskById);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

module.exports = router;