const { Router } =require('express');

const router = Router();

const { findAll, findOne, create, update, delet } = require('../controller/favorite_list.controller');


router.get('/api/favorites_lists', findAll);
router.get('/api/favorites_lists/:codigo', findOne);
router.post('/api/favorites_lists' , create);
router.delete('/api/favorites_lists/:codigo' , delet);
router.put('/api/favorites_lists/:codigo' , update);

module.exports = router;