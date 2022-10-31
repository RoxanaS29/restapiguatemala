const {Router} = require('express');
const {GuatemalaDatosGet, 
    GuatemalaDatosPost, 
    GuatemalaDatosPut, 
    GuatemalaDatosDelete} = require('../controllers/datos');
const router = Router();

////METODO PARA DEVOLVER VALORES
router.get('/', GuatemalaDatosGet);

//CODIGO PARA INSERTAR --- POST
router.post('/', GuatemalaDatosPost);

///CODIGO PARA ACTUALIZAR --- PUT
router.put('/:id', GuatemalaDatosPut);

//CODIGO PARA BORRAR ---- DELETE
router.delete('/:id', GuatemalaDatosDelete);


module.exports = router;