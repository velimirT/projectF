const controller = require('../controllers/controller');
const md5 = require('md5');

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
  }),

  app.post('/update-user-info', (req, res) => {
    const userID = req.user ? req.user[0].id : null;
    const userInfo = req.body.userInfo;
    if(userID){
      controller.updateUserInfo(userInfo, userID)
        .then(result => {
          res.json(result);
        })
        .catch(err => console.log(err))
    }
  }),

  app.post('/add-new-user', (req, res) => {
    const userInfo = req.body.userInfo;
    userInfo.password = md5(userInfo.password);
    controller.addNewUser(userInfo)
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));

  })
}