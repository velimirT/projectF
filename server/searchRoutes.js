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
  })

}