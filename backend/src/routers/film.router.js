const { Router } =require('express');

const router = Router();

const { findAll, findOne, create, update, delet } = require('../controller/film.controller');


router.get('/api/films', findAll);
router.get('/api/films/:codigo', findOne);
router.post('/api/films' , create);
router.delete('/api/films/:codigo' , delet);
router.put('/api/films/:codigo' , update);

module.exports = router;