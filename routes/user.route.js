const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById,
    loginUser,
} = require('../controllers/user.controller');

// Rutas para usuarios
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);
router.post('/login', loginUser);

module.exports = router;