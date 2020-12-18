const Film = require('../models/Film');

const findAll = (req , res) => {

    Film.find()
        .then(films => {
            res.status(200).send(films);
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

const findOne = (req , res) => {

    var cod = parseInt(req.params.codigo);
    Film.find({"codigo": cod})
        .then(films => {
            if(films.length == 0){
                console.log("No encontró films");
                res.status(404).send({
                    "message": "No encontró el films"
                });
            } else{
                console.log("Encontró films");
                res.status(200).send(films);
            }
            
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

const create = (req , res) => {

    const film = new Film({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        duracion: req.body.duracion,
        descripcion: req.body.descripcion,
        elenco: req.body.elenco,
        creadores: req.body.creadores,
        imagen: {
            pequeno: req.body.imagen.pequeno,
            grande: req.body.imagen.grande
        },
        co_categoria: req.body.co_categoria,
        co_genero: req.body.co_genero
    });

    film.save()
        .then(data => {
            res.status(200).send(data);
        }).catch (err => {
            res.status(500).send({
                "message": "Ocurrio un problema" || err.message
            });
        });
};

const update = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Film.update(
        {"codigo" : cod},
        {
            $set:{
                nombre: req.body.nombre,
                duracion: req.body.duracion,
                descripcion: req.body.descripcion,
                elenco: req.body.elenco,
                creadores: req.body.creadores,
                co_categoria: req.body.co_categoria,
                co_genero: req.body.co_genero
            }
        }
    )
    .then(film => {
        res.status(200).send(film);        
    }).catch(err => {
        res.status(500).send("Ocurrio un error");
    });
};

const delet = (req, res) => {
    var cod = parseInt(req.params.codigo);
    Film.remove({
        "codigo": cod})
        .then (film => {
            
            if(film.deleteCount == 0) {
                console.log("No Borró");
                res.status(404).send("no encontró el film");
            }else {
                res.status(200).send("film eliminado ");
            }
        }).catch(err => {
            res.status(500).send("Ocurrio un error");
    });
};


module.exports = {
    findAll,
    findOne,
    create,
    update,
    delet
}