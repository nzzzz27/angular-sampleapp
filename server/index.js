const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/index');
const FakeDb = require('./fake-db');
const productRoutes = require('./routes/products');
const path = require('path');

//DBに接続
mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
      if (process.env.NODE_ENV !== 'production') {
        const fakeDb = new FakeDb();
        fakeDb.initDb();
      }
    }
)

const app = express();
const PORT = process.env.PORT || '3001';

app.use('/api/v1/products', productRoutes);


if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '..', 'dist', 'udemy-app');

    app.use(express.static(appPath));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(appPath, 'index.html'))
    });
}


app.listen(PORT, () => {
    console.log('server is running');
})

