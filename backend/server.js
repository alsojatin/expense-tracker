const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
