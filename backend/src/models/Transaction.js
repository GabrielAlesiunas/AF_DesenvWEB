// Eles definem:
// quais campos cada transação deve ter,
// seus tipos,
// validações obrigatórias,
// e como serão salvas no banco.

const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true
  },
  title: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);
