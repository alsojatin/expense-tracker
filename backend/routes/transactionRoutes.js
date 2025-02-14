const express = require('express');
const Transaction = require('../models/Transaction');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  const { amount, category, type } = req.body;
  const transaction = await Transaction.create({ userId: req.user.userId, amount, category, type });
  res.json(transaction);
});

router.get('/', authMiddleware, async (req, res) => {
  const transactions = await Transaction.find({ userId: req.user.userId });
  res.json(transactions);
});

module.exports = router;
