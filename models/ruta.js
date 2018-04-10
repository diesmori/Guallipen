var restful= require('node-restful');
var mongoose = restful.mongoose;

//Schema

var rutaSchema = new mongoose.Schema({
  id:String,
  pedido:String,
  llegada:Date
}, {timestamps: true});

module.exports = restful.model('Rutas',rutaSchema);
