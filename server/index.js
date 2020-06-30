const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

//DBに接続
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
    () => {
        const fakeDb = new FakeDb();
        fakeDb.initDb();
    }
)

const app = express();
const PORT = process.env.PORT || '3001';
const productRoutes = require('./routes/products');

app.use('/api/v1/products', productRoutes);

app.listen(PORT, () => {
    console.log('server is running');
})

