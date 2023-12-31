const express = require('express');
const fs = require('fs'); // Menambahkan modul fs untuk membaca file
const app = express();
const port = 3000;
app.use(express.json());
const mainRouter = require('./routes/index')

let products = [];
app.use('/', mainRouter);

fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading products file:', err);
        return;
    }
    products = JSON.parse(data);
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
