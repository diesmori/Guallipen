var express = require("express");
var router = express.Router();
var bluebird = require("bluebird");

var Cliente = require("../models/cliente");
var Estado = require("../models/estado");
var Orden = require("../models/orden");
var Pedido = require("../models/pedido");
var Producto = require("../models/producto");
var Ruta = require("../models/ruta");
var Transportista = require("../models/transportista");
var Vendedor = require("../models/vendedor");

Cliente.methods(["get", "post", "put", "delete"]);
Cliente.register(router, "/clientes");
Estado.methods(["get", "post", "put", "delete"]);
Estado.register(router, "/estados");
Orden.methods(["get", "post", "put", "delete"]);
Orden.register(router, "/ordenes");
Pedido.methods(["get", "post", "put", "delete"]);
Pedido.register(router, "/pedidos");
Producto.methods(["get", "post", "put", "delete"]);
Producto.register(router, "/productos");
Ruta.methods(["get", "post", "put", "delete"]);
Ruta.register(router, "/rutas");
Transportista.methods(["get", "post", "put", "delete"]);
Transportista.register(router, "/transportistas");
Vendedor.methods(["get", "post", "put", "delete"]);
Vendedor.register(router, "/vendedores");

router.get("/facturados_test", function(req, res) {
  Pedido.find({
    estado: 680
  }).exec(function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});
router.get("/ingresados", function(req, res) {
  Pedido.find({ estado: 620 })
    .lean()
    .exec()
    .then(function(pedidos) {
      return bluebird.map(pedidos, function(pedido) {
        return Cliente.where("_id", pedido.cliente)
          .select("nombre -_id")
          .exec()
          .then(function(nombreCliente) {
            pedido.cliente = nombreCliente[0].nombre;
            return pedido;
          });
      });
    })
    .then(function(pedidos) {
      res.json(pedidos);
    })
    .catch(function(err) {
      // do something with errors from either find
    });
});

router.get("/liberados", function(req, res) {
  Pedido.find({ estado: 640 })
    .lean()
    .exec()
    .then(function(pedidos) {
      return bluebird.map(pedidos, function(pedido) {
        return Cliente.where("_id", pedido.cliente)
          .select("nombre -_id")
          .exec()
          .then(function(nombreCliente) {
            pedido.cliente = nombreCliente[0].nombre;
            return pedido;
          });
      });
    })
    .then(function(pedidos) {
      res.json(pedidos);
    })
    .catch(function(err) {
      // do something with errors from either find
    });
});
router.get("/facturados", function(req, res) {
  Pedido.find({ estado: 680 })
    .lean()
    .exec()
    .then(function(pedidos) {
      return bluebird.map(pedidos, function(pedido) {
        return Cliente.where("_id", pedido.cliente)
          .select("nombre -_id")
          .exec()
          .then(function(nombreCliente) {
            pedido.cliente = nombreCliente[0].nombre;
            return pedido;
          });
      });
    })
    .then(function(pedidos) {
      res.json(pedidos);
    })
    .catch(function(err) {
      // do something with errors from either find
    });
});

router.get("/juani", function(req, res) {
  Pedido.distinct("cliente").exec(function(err, resp) {
    Cliente.where("_id", resp)
      .select("nombre -_id")
      .exec(function(errr, ans) {
        res.json(ans);
      });
  });
});

module.exports = router;
