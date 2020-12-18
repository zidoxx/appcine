const { Router } =require('express');

const router = Router();

const { findAll, findOne, create, update, delet } = require('../controller/user.controller');


router.get('/api/users', findAll);
router.get('/api/users/:codigo', findOne);
router.post('/api/users' , create);
router.delete('/api/users/:codigo' , delet);
router.put('/api/users/:codigo' , update);

module.exports = router;