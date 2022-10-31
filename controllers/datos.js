const {Router, response} = require('express');
const Dato = require("../models/datos");
const bcryptjs = require('bcryptjs');

/// METODO DE CONSULTA
const GuatemalaDatosGet = (req, res=response) => {

    const {codigo, nombreProyecto='no-name', monto, fecha_Servidor, nomEstudiante, carnet} = req.query;
    
    res.json({
        msg: "Metodo GET invocado desde el servidor",
        codigo, 
        nombreProyecto,
        monto,
        fecha_Servidor,
        nomEstudiante,
        carnet
    })
};


//METODO INSERT
const GuatemalaDatosPost = async (req, res=response) => {

    const {nomProyecto, monto, fecha_Servidor, nomEstudiante, carnet} = req.body;
    const dato = new Dato({nomProyecto, monto, fecha_Servidor, nomEstudiante, carnet});

    //METODO PARA GUARDAR
    await dato.save()

    res.json({
        msg: "POST API -- DatosPOST",
        dato
    })
};

//// METODO PARA ACTUALIZAR
const GuatemalaDatosPut = async (req, res=response) => {
    
    const {id} = req.params;
    const {_id, nomProyecto, monto, fecha_Servidor, nomEstudiante, carnet, ...resto} = req.body;

    if(nomProyecto)
    {
        
        resto.nomProyecto = nomProyecto;
    }

    const dato = await Dato.findOneAndUpdate(id, resto);
    res.json(dato)
    
};

///METODO PARA BORRAR
const GuatemalaDatosDelete = async (req, res=response) => {
    const { id } = req.params;

    //Fisicamente lo borramos
    const dato = await Dato.findByIdAndDelete( id );
    res.json(dato);
};

module.exports = {
    GuatemalaDatosGet,
    GuatemalaDatosPost,
    GuatemalaDatosPut,
    GuatemalaDatosDelete
}