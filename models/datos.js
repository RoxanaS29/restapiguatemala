const {Schema, model} = require('mongoose');
const dGuatemalachema = Schema({

    nomProyecto: {
        type: String,
        require: [true, "El nombre es requerido"]
    },
    monto: {
        type: Number,
        require: [true, "El monto es requerido"]
    },
    fecha_Servidor: {
        type: String,
        require: [true, "La fecha es requerida"]
    },
    nomEstudiante: {
        type: String,
        require: [true, "El nombre del estudiante es requerido"]
    },
    carnet: {
        type: String,
        require: [true, "El correo es requerido"]
    }
});

module.exports = model('Dato', dGuatemalachema);
