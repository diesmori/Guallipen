var restful= require('node-restful');
var mongoose = restful.mongoose;

//Schema

var ordenSchema = new mongoose.Schema({
  id:String,
  producto:String,
  pickeado:Boolean
});

module.exports = restful.model('Ordenes',ordenSchema);
