var restful = require("node-restful");
var mongoose = restful.mongoose;

//Schema

var pedidoSchema = new mongoose.Schema(
  {
    id: String,
    cliente: { type: mongoose.Schema.ObjectId, ref: "Clientes" },
    estado: Number,
    transportista: String,
    orden: String
  },
  { timestamps: true }
);

module.exports = restful.model("Pedidos", pedidoSchema);
