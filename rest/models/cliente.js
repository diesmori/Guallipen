var restful= require('node-restful');
var mongoose = restful.mongoose;

//Schema

var clienteSchema = new mongoose.Schema({
  id:String,
  nombre:String,
  direccion:String,
  email:String,
  vendedor:String
});

module.exports = restful.model('Clientes',clienteSchema);
