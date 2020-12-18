const mongoose = require('mongoose');

const UserShema = mongoose.Schema({

    codigo: {
        type: Number,
        min: 1,
        unique:true
    },
    nombre: {
        type: String,
        minlength: 5,
        require: true
    },
    email: {
        type: String,
        minlength: 6,
        require: true
    },
    co_tipo_usuario: {
        type: Number,
        min: 1,
        requiere:true
    }
});

module.exports = mongoose.model('Usuario', UserShema);