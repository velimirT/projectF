const controller = require('../controllers/controller');

module.exports = app => {
  app.get('/get-random-products', (req, res) => {
    controller.getRandomProducts()
      .then(result => res.json(result))
      .catch(err => console.log(err));
  });
}