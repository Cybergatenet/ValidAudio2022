require('dotenv').config();
const express = require('express')
const connecDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connecDB();

const app = express()

app.use(express.json());

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sercer Running on port ${PORT}`))


// npm i --save-dev nodemon concurrently
// npm i express mongoose dotenv