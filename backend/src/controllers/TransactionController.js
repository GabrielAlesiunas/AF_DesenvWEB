// Recebe os dados enviados pelo cliente (req.body);
// Cria um novo documento na coleção Transaction (MongoDB);
// Responde com status 201 (Criado) e os dados da nova transação;
// Se der erro (ex: validação), retorna erro 400.

const Transaction = require('../models/Transaction');

exports.create = async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// Busca todas as transações no banco;
// Ordena por data decrescente (date: -1);
// Retorna a lista em JSON;
// Se der erro, retorna 500 (Erro interno).

exports.list = async (req, res) => {
  try {
    const list = await Transaction.find().sort({ date: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Pega o id enviado na URL (req.params.id);
// Apaga do banco usando findByIdAndDelete;
// Responde com “Removido”;
// Se der erro, retorna 500.

exports.remove = async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.json({ message: "Removido" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
