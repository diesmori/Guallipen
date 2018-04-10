var restful= require('node-restful');
var mongoose = restful.mongoose;

//Schema

var vendedorSchema = new mongoose.Schema({
  id:String,
  nombre:String,
  email:String
}, {timestamps: true});

module.exports = restful.model('Vendedores',vendedorSchema);
