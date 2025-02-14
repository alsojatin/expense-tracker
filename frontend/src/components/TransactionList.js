import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <ul>
      {transactions.map((t) => (
        <li key={t._id}>
          {t.category} - ₹{t.amount} ({t.type})
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
