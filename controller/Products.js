const fs = require('fs');

let productController = {

  getAllProduct: async (req, res) => {
    let products = [];
    fs.readFile('products.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading products file:', err);
        return;
      }
      products = JSON.parse(data);
    });
  },


  createProduct: async (req, res) => {
    const { product_id, product_name, product_stock, product_category, product_location, product_price } = req.body;
    fs.readFile('products.json', 'utf8', (err, fileData) => {
      if (err) {
        res.status(500).send('Internal Server Error');
        return;
      }
      let products = JSON.parse(fileData);

      products.push({
        product_id,
        product_name,
        product_stock,
        product_category,
        product_location,
        product_price
      });

      fs.writeFile('products.json', JSON.stringify(products), (err) => {
        if (err) {
          res.status(500).send('Internal Server Error');
        } else {
          res.send('Product created successfully');
        }
      });
    });
  },
}

module.exports = productController;