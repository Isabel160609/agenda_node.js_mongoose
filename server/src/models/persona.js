// aqui importamos mongoose
const {
    Schema,
    model
} = require('mongoose');

//creamos un esquema del objeto que utilizaremos con sus validadores
const personaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        minLength: [3, 'Debe tener un minimo de 3 letras'],
        maxLength: [45, 'Debe tener un maximo de 45 letras'],
        match: [/^[A-Za-zÁÀÉÈÍÓÒÚáàéèíóòúñÑ ]+$/, 'este campo  solo puede contener letras']
    },

    apellidos: {
        type: String,
        required: true,
        minLength: [3, 'Debe tener un minimo de 3 letras'],
        maxLength: [45, 'Debe tener un maximo de 45 letras'],
        match: [/^[A-Za-zÁÀÉÈÍÓÒÚáàéèíóòúñÑ ]+$/, 'este campo  solo puede contener letras']
    },
    edad: {
        type: Number,
        required: true,
        min: [0, 'Debe ser como minimo 0 , tienes {VALUE}'],
        max: [125, 'Debe ser como maximo 125 , tienes {VALUE}']
    },

    cumple: {
        type: Date,
        required: true,
        max:[Date.now(), 'no se permite una fecha futura'],
        min:['01/01/1896', 'no se permite una fecha cuya edad sea inferior a 125 años'],
        match: [/^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/, 'no tiene formato correcto']
    },

    dni: {
        type: String,
        required: true,
        match: [/^\d{8}[aA-zZ]$/, 'no tiene un formato correcto'],
        validate: [
            function (dni) {
                const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
                if (/^\d{8}[aA-zZ]$/.test(dni)) {
                    const numero = dni.substr(0, dni.length - 1);
                    const letra = dni.substr(dni.length - 1);
                    const calculo = numero % 23;
                    const letraSeleccionada = letras.charAt(calculo)
                    return letra.toUpperCase() == letraSeleccionada

                }
                'la letra del Dni no es valida'
            }, 'la letra del Dni no es valida'
        ]
    },

    color: {
        type: String,
        required: true,
        minLength: [3, 'Debe tener un minimo de 3 letras'],
        maxLength: [45, 'Debe tener un maximo de 45 letras'],
        match: [/^[A-Za-zÁÀÉÈÍÓÒÚáàéèíóòúñÑ ]+$/, 'este campo  solo puede contener letras']
    },

    sexo: {
        type: String,
        required: true,
        enum: {
            values: ['hombre', 'mujer', 'otro', 'no especificado'],
            message: '{VALUE} no es un valor valido'
        }
    },

}, {
    // para que salga en el objeto una variable de cuando ha sido creada
    timestamps: true,
    // para que no salga la version
    versionKey: false
})

// exportamos el modulo
module.exports = model('persona', personaSchema);