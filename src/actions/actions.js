import axios from 'axios';

export const addProducts = (products) => {//populate products arr
  return ({
    type: 'ADD_PRODUCTS',
    products
  });
};

export const setSearchValue = (searchValue) => {//set input value
  return ({
    type: 'SET_SEARCH_VALUE',
    searchValue
  });
};

export const searchProducts = (searchValue) => {//search for products in db using user input
  return ({
    type: 'NONE'
  });
};

export const addOrders = (orders) => {//search for products in db using user input
  return ({
    type: 'ADD_ORDERS',
    orders
  });
};

export const addDetailedProduct = (product) => {//add overlay product to the store
  return ({
    type: 'ADD_DETAILED_PRODUCT',
    product
  });
};

export const toggleIsOverShown = () => {//show or hide overlay
  return ({ type: 'TOGGLE_IS_OVER_SHOWN' });
};


export const addProductToCart = (product) => {//add overlay product to the store
  return ({
    type: 'ADD_PRODUCT_TO_CART',
    product
  });
};

export const changeQty = (productID) => {
  return ({
    type: 'CART_CHANGE_QTY',
    productID
  });
};

export const subtructFromQty = (productID) => {
  return({
    type: 'SUBTRUCT_FROM_QTY',
    productID
  });
};

export const loginUser = (user) => {
  return ({
    type: 'USER_LOGIN',
    user
  });
};

export const logoutUser = () => {
  return({
    type: 'USER_LOGOUT'
  })
};

export const clearCart = () => {
  return ({
    type: 'CLEAR_CART',
  });
};

export const removeFromCart = (productID) => {
  return ({
    type: 'REMOVE_FROM_CART',
    productID
  });
};

export const addToCart = (product) => {
  return (dispatch, getState) => {
    let inCart = getState().cart.filter(prod => prod.id === product.id);
    if (inCart.length === 0) {
      dispatch(
        addProductToCart(
          {
            ...product,
            current_order_qty: 1
          }
        )
      );
    } else if (product.qty > inCart[0].current_order_qty) {
      dispatch(changeQty(product.id));
    } else {
      alert("The available quantity for this item is exhausted!");
    }
  };
};

export const getRandomProducts = () => {//get random products in the beginging 
  return (dispatch) => {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'Token',
        "Access-Control-Allow-Origin": "*",
      }
    };

    axios.get('http://localhost:4000/get-random-products')
      .then(res => {
        if (res.status === 200) dispatch(addProducts(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const getProduct = (id, category) => {//get product from certain category
  return (dispatch) => {
    const values = JSON.stringify({ id, category });
    axios.get(`http://localhost:4000/get-product?values=${values}`)
      .then(res => {
        if (res.status === 200) {
          dispatch(addDetailedProduct(res.data[0]));
          return res.status;
        }
      })
      .then(res => res === 200 && dispatch(toggleIsOverShown()))
      .catch(err => console.log(err));
  };
};

export const handleLogin = (username, password) => {
  return (dispatch) => {
    axios.defaults.withCredentials = true;
    axios.post('http://localhost:4000/login', {
      username: username,
      password: password,
    })
      .then(res => {
        if (res.status === 200) {
          console.log("Successfull login!", res.data);
          dispatch(loginUser(res.data));
        }
      })
      .catch(err => console.log(err));
  };
};

export const handleLogout = () => {
  return (dispatch) => {
    axios.post('http://localhost:4000/logout')
      .then(res => {
        if (res.status === 200) {
          console.log("Successfull loginout!", res.data);
          dispatch(logoutUser());
        }
      })
      .catch(err => console.log(err));
  };
};

export const handleCheckout = (amount, payload_nonce, cart, user) => {
  return (dispatch) => {
    axios.post('http://localhost:4000/checkout', { payment_method_nonce: payload_nonce, amount: amount, cart: JSON.stringify(cart), user: user }).then(function (res) {
      if (res.statusText === "OK") {
        console.log("Successfull Transaction!");
        dispatch(clearCart());
      }
      console.log("Transaction response: ", res);
    }).catch(function (e) {
      alert("Unsuccessfull Transaction, please try again later!");
      console.log("Axios Err: ", e);
    });
  };
};

export const getUserOrders = () => {
  return (dispatch) => {
    axios.get('http://localhost:4000/get-user-orders')
      .then(res => {
          if(res.status === 200){
            dispatch(addOrders(res.data));
          }
      })
      .catch(err => console.log(err));
  }
}

