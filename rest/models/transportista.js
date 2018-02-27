var restful= require('node-restful');
var mongoose = restful.mongoose;

//Schema

var transportistaSchema = new mongoose.Schema({
  id:String,
  nombre:String,
  ruta:String
});

module.exports = restful.model('Transportistas',transportistaSchema);
