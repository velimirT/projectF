const connection = require('../models/connection');

module.exports = {

  getRandomProducts: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products ORDER BY RAND() LIMIT 5;';
      connection.query(query, (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    })
  },

  getProduct: (id, category) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM ?? WHERE id = ?';
      connection.query(query, [category, id], (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    });
  },
  
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE username = ?';
      connection.query(query, [username, password], (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    });
  },

  addOrder: (amount, cart, user, payment_status) => {
    return new Promise((resolve, reject) => {
      orders_list = JSON.parse(cart);

      for(let i = 0; i < orders_list.length; i++){
        let post = {
          user_id: user,
          product_id: orders_list[i].id,
          amount: orders_list[i].price,
          payment_status: payment_status.transaction.status,
          author_id: orders_list[i].author_id,
          transaction_id: payment_status.transaction.id,
          qty: orders_list[i].current_order_qty
        }
        let query = 'INSERT INTO orders SET ?'
        connection.query(query, post, (err, res) => {
          if(err) reject(err);
          console.log("Post", i);
          if(i == orders_list.length - 1){
            resolve("Transaction Submitted Sucessfully!", res);
          }
        });
        
      }
    });
  }
}