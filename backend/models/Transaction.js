const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: Number,
  category: { type: String, enum: ['Food', 'Travel', 'Bills', 'Salary', 'Other'], required: true },
  type: { type: String, enum: ['Income', 'Expense'], required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
