import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const Charts = ({ transactions }) => {
  const data = transactions.map(tx => ({ name: tx.category, value: tx.amount }));

  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" fill="#82ca9d" label />
      <Tooltip />
    </PieChart>
  );
};

export default Charts;
