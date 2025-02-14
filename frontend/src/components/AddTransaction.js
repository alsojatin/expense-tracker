import React, { useState } from 'react';
import axios from 'axios';

const AddTransaction = ({ refreshTransactions }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [type, setType] = useState('Expense');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/transactions', { amount, category, type }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    refreshTransactions();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Salary</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTransaction;
