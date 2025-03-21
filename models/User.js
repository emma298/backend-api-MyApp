const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    state: {
        type: Boolean,
        default: true,
    },
    profile: {
        type: Number,
        default: 1, // 1: Usuario estándar, 2: Administrador
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);