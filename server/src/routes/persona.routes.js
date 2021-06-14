//en este modulo indicaremos las rutas a seguir segun la accion deseada

// importamos express
const {Router} = require('express')
const router = Router()

//importamos controlasores
const personasCtrl = require('../controllers/personas.controller.js')

// definimos las diferentes rutas
router.get('/personas', personasCtrl.getPersonas);
router.post('/personas', personasCtrl.createPersona);
router.get('/personas/:id', personasCtrl.getPersona);
router.put('/personas/:id', personasCtrl.editPersona);
router.delete('/personas/:id', personasCtrl.deletePersona);


//exportamos el modulo
module.exports = router
