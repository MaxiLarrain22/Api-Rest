const express = require('express')
const router = express.Router()

const controllers = require('../controllers/productos.controllers');

router.get("/productos", controllers.index );

router.get("/productos/:id", controllers.show );



module.exports = router;