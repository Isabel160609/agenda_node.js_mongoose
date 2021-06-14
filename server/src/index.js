
//importamos la conexion con la base de datos
require('./database')

//importamos el modulo app
const app = require('./app');

//ponemos a escuchar en el puerto que hemos configurado
app.listen(app.get('port'));

//imprimimos en consola el puerto en el que estamos conectados
console.log('server on port', app.get('port'));