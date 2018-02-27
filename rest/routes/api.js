var express = require('express');
var router = express.Router();

var Cliente= require('../models/cliente');
var Estado= require('../models/estado');
var Orden= require('../models/orden');
var Pedido= require('../models/pedido');
var Producto= require('../models/producto');
var Ruta= require('../models/ruta');
var Transportista= require('../models/transportista');
var Vendedor= require('../models/vendedor');

Cliente.methods(['get', 'post', 'put', 'delete']);
Cliente.register(router, '/clientes');
Estado.methods(['get', 'post', 'put', 'delete']);
Estado.register(router, '/estados');
Orden.methods(['get', 'post', 'put', 'delete']);
Orden.register(router, '/ordenes');
Pedido.methods(['get', 'post', 'put', 'delete']);
Pedido.register(router, '/pedidos');
Producto.methods(['get', 'post', 'put', 'delete']);
Producto.register(router, '/productos');
Ruta.methods(['get', 'post', 'put', 'delete']);
Ruta.register(router, '/rutas');
Transportista.methods(['get', 'post', 'put', 'delete']);
Transportista.register(router, '/transportistas');
Vendedor.methods(['get', 'post', 'put', 'delete']);
Vendedor.register(router, '/vendedores');

router.get('/facturados', function(req, res){

  res.send("está corriendo");
});

module.exports = router;
