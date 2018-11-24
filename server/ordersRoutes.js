const controller = require('../controllers/controller');

module.exports = app => {
  app.get('/get-user-orders', (req, res) => {
    const userID = req.user ? req.user[0].id : null;
    if(userID){
      controller.getOrders(userID)
        .then(result => {
          res.json(result);
        })
        .catch(err => console.log(err));
    }
  })
}