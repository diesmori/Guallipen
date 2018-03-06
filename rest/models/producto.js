var restful= require('node-restful');
var mongoose = restful.mongoose;

//Schema

var productoSchema = new mongoose.Schema({
  id:String,
  nombre:String
}, {timestamps: true});

module.exports = restful.model('Productos',productoSchema);
