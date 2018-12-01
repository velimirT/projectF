const controller = require('../controllers/controller');

module.exports = app => {
  app.get('/get-random-products', (req, res) => {
    controller.getRandomProducts()
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }),

  app.get('/get-product', (req, res) => {
    const values = JSON.parse(req.query.values);
    const { id, category } = values;
    controller.getProduct(id, category)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  }),

  app.post('/search', (req, res) => {
    controller.searchProducts(req.body)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  })

  app.post('/search-by-title', (req, res) => {
    controller.searchProductByTitle(req.body)
      .then(result => res.json(result))
      .catch(err => console.log(err));
  })

}