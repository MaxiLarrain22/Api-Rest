// Main es la ruta principal
const express = require('express');
const router = express.Router();

const controllers = require('../controllers/main.constrollers')

router.get('/', controllers.index); 

router.get('/privado', controllers.private); 



module.exports = router;