//aqui creamos un modulo con las diferentes funciones del crud

const personasCtrl = {}

//llamamos al modelo
const persona = require('../models/persona')
const Persona= require('../models/persona')

//funcion para devolver el listado de personas de la base de datos
personasCtrl.getPersonas = async (req, res) =>{
   const personas = await Persona.find()
   res.json(personas)
} 
//funcion para crear una persona nueva e introducirla en la base de datos
personasCtrl.createPersona = async (req, res) =>{
   const newPersona= new Persona(req.body)
     newPersona.save(function(err, newPersona) {
        if(err) return res.status(500).send(err.message);
      
           res.status(200).json(newPersona);
      });
          
    
} 
//funcion que recibiendo el id te muestra la persona a la que corresponde ese id
personasCtrl.getPersona = async (req, res) =>{
    console.log(req.params)
    const persona = await Persona.findById(req.params.id)
    res.send(persona)
    
} 


// funcion para editar los datos de una persona llamandola mrediante el id
personasCtrl.editPersona = async (req, res) =>{
  await Persona.findByIdAndUpdate(req.params.id, req.body, {runValidators: true}, function(err, newPersona) {
   if(err) return res.status(500).send(err.message);
 
      res.status(200).json(newPersona);
 })
 
 
} 

//funcion para borrar un contacto de la base dedatos referenciandola con un id
personasCtrl.deletePersona = async (req, res) =>{
   await persona.findByIdAndDelete(req.params.id)
    res.json({status: 'persona eliminada'})
} 



// exportamos las funciones para que se puedan utilizar
module.exports = personasCtrl;
