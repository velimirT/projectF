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
  }



}