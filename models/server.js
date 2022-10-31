const express = require('express');
const cors = require('cors');

const {dbConnection} = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.datosPath = '/api/guatemala';

        //CONECTAR A LA BASE DE DATOS
        this.conectarDB();

        //codigo de capa intermedia - Middleware
        this.middleware();

        //Rutas de acceso al servidor
        this.routes();
    }

    //METODO PARA INVOCAR EL CODIGO DE CONEXION A LA BASE DE DATOS
    async conectarDB(){

        await dbConnection();

    }


    middleware(){

        //POLITICA DE ACCESO CORS PARA PUBLICACION WEB
        this.app.use(cors());

        ///PARSEO JSON
        this.app.use(express.json());

        //Accesos Publicos
        this.app.use(express.static('public'));



    }

    routes(){
        this.app.use(this.datosPath, require('../routes/datos'));

    }
    listen(){

        this.app.listen(this.port, () =>{
            console.log("Servidor API REST corriento en puerto :", process.env.port);
        })

    }
}

module.exports = Server;