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
  }),

  app.get('/get-user-info', (req, res) => {
    const userID = req.user ? req.user[0].id : null;
    if(userID){
      controller.getUserInfo(userID)
        .then(result => {
          res.json(result);
        })
        .catch(err => console.log(err));
    }
  })

  app.post('/update-user-info', (req, res) => {
    const userID = req.user ? req.user[0].id : null;
    const userInfo = req.body.userInfo;
    if(userID){
      controller.updateUserInfo(userInfo, userID)
        .then(result => {
          console.log(result);
          res.json(result);
        })
        .catch(err => console.log(err))
    }
  })
}