const connection = require('../models/connection');
const categories = require('../models/categories');

module.exports = {

  getRandomProducts: () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM products ORDER BY RAND() LIMIT 8;';
      connection.query(query, (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    })
  },

  searchProducts: (search) => {
    return new Promise((resolve, reject) => {
      const category = categories[search.category].filters;
      let sql_query = "SELECT * FROM "+search.category;
      let first_filter = true;

      for(let filter in categories[search.category].filters){
        let in_category = search.filters.filter((req_filter)=> req_filter.name == filter);
        if(in_category.length > 0 && in_category[0].value !== null){
          sql_query += category[in_category[0].name](in_category[0].value, first_filter);
          first_filter = false;
        }
      }
      console.log("Final Query", sql_query);

      // const query = 'SELECT * FROM products ORDER BY id LIMIT 8;';
      connection.query(sql_query, (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    })
  },

  searchProductByTitle: (request) => {
    return new Promise((resolve, reject) => { 
      let sql_query = "SELECT * FROM products WHERE title LIKE '%"+request.search+"%'";
      console.log(request.search);
      connection.query(sql_query, (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    })
  },

  getProduct: (id, category) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM ?? WHERE product_id = ?';
      connection.query(query, [category, id], (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    });
  },
  
  login: (username) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE username = ?';
      connection.query(query, [username], (err, res) => {
        if(err) reject(err);
        resolve(res);
      })
    });
  },
  
  get_user: (user_id) => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM users WHERE id = ?';
      connection.query(query, [user_id], (err, res) => {
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
  },

  getOrders: (userID) => {
    return new Promise((resolve, reject) => {
      const query = `select orders.created_at , orders.payment_status, orders.qty, orders.amount, products.title, products.img from orders
      left join products
      on orders.product_id = products.id
      where orders.user_id = ?
      order by orders.created_at DESC`;

      connection.query(query, [userID], (err, res) => {
        if(err) reject(err);
        resolve(res);
      });
    });
  },

  getUserInfo: (userID) => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE id = ?`;

      connection.query(query, [userID], (err, res) => {
        if(err) reject(err);
        resolve(res);
      });
    });
  },

  updateUserInfo: (userInfo, userID) => {
    return new Promise((resolve, reject) => {
      const query = 'UPDATE users SET ? WHERE id = ?'
      connection.query(query, [userInfo, userID], (err, res) => {
        if(err) reject(err);
        resolve(res);
      });
    });
  },

  addNewUser: (userInfo) => {
    return new Promise((resolve, reject) => {
      const query = 'INSERT INTO users SET ?';
      connection.query(query, [userInfo], (err, res) => {
        if(err) reject(err);
        resolve(res);
      });
    });
  }
  
}