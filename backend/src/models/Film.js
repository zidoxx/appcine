const mongoose = require('mongoose');

const FilmShema = mongoose.Schema({
    codigo: {
        type: Number,
        min: 1,
        unique: true
    },
    nombre: {
        type: String,
        minlength: 5,
        requiere: true
    },
    duracion: {
        type: Number,
        min: 1,
        requiere: true
    },
    descripcion: {
        type: String,
        minlength: 8,
        requiere: true
    },
    elenco: {
        type: String,
        minlength: 4
    },
    creadores: {
        type: String,
        minlength: 4
    },
    imagen: [{
        pequeno: {
            type: String
        },
        grande: {
            type:String
        }
        
    }],
    co_categoria: {
        type: Number,
        min: 1
    },
    co_genero: {
        type: Number,
        min:1
    }
});

module.exports = mongoose.model('Pelicula', FilmShema);