var restful= require('node-restful');
var mongoose = restful.mongoose;

//Schema

var pedidoSchema = new mongoose.Schema({
  id:String,
  cliente:String,
  estado:Number,
  transportista:String,
  orden:String,
  ultimo_cambio:Date
});

module.exports = restful.model('Pedidos',pedidoSchema);
