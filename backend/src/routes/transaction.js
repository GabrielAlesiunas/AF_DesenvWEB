const express = require("express");
const router = express.Router();
const ctl = require("../controllers/TransactionController");

router.post("/", ctl.create);
router.get("/", ctl.list);
router.delete("/:id", ctl.remove);

module.exports = router;

// Cria um router do Express.
// Importa o TransactionController.
// Associa cada rota HTTP a uma função do controller.
// Exporta o router para ser usado no servidor principal (app.js / server.js).