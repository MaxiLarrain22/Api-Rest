const { Router } = require('express');

//import {getPacientes,getPacientedni,postPaciente,updatePaciente,deletePaciente, } from '../controllers/pacientes.controller.js'
const { getPacientes, getPacientedni, postPaciente, updatePaciente, deletePaciente } = require('../controllers/pacientes.controller.js');

const router= Router()

router.get('/pacientes',getPacientes);

router.get('/pacientes/:dni',getPacientedni);



router.post('/postpacientes',postPaciente);


router.patch('/patchpacientes/:dni',updatePaciente);


router.delete('/deletepacientes/:dni',deletePaciente);

module.exports = router;
