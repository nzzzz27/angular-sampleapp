const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDb = require('./fake-db');

const productRoutes = require('./routes/products');

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

const app = express()

//productRoutesが空の時に、Postmanでhttp://localhost:3001/api/v1/productsにアクセスすると、'ok': trueを返す
app.use('/api/v1/products', productRoutes);

// app.get('/products', (req, res) => {
//     res.json({ 'success': true })
// })


// const PORT = process.evnv.PORT || '3001'

app.listen('3001', () => {
    console.log('runnigng');
})

