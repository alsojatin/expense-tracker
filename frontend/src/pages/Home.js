import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Charts from '../components/Charts';

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/api/transactions', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(res => setTransactions(res.data));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Charts transactions={transactions} />
    </div>
  );
};

export default Home;
