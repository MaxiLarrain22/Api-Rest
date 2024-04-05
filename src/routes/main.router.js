// Main es la ruta principal
const express = require('express');
const router = express.Router();

const controllers = require('../controllers/main.constrollers')

router.get('/', controllers.index); 

router.get('/privado', controllers.private); 

router.get('/lista', (req, res) => { 
    res.render('lista',)
})  

router.get('/create-patient', (req, res) => { 
    res.render('create-patient',)
})  

router.get('/edit-patient', (req, res) => { 
    res.render('edit-patient',)
})  

module.exports = router;