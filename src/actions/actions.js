import axios from 'axios';

export const addProducts = (products) => {//populate products arr
  return ({
    type: 'ADD_PRODUCTS',
    products
  });
};

export const setSearchValue = (searchValue) => {//set input value
  return({
    type: 'SET_SEARCH_VALUE',
    searchValue
  });
};

export const searchProducts = (searchValue) => {//search for products in db using user input
  console.log(searchValue);
  return ({
    type: 'NONE'
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

export const changeQty = (productID) => {//add overlay product to the store
  return ({
    type: 'CART_CHANGE_QTY',
    productID
  });
};

export const addToCart = (product) => {
  return (dispatch, getState) => {
    let inCart = getState().cart.filter(prod => prod.id === product.id);
    if(inCart.length === 0){
      dispatch(
        addProductToCart(
          {
            ...product, 
            current_order_qty: 1
          }
        )
      );    
    }else if(product.qty > inCart[0].current_order_qty){
      dispatch(changeQty(product.id));
    }else{
        alert("The available quantity for this item is exhausted!");
    }
  };
};

export const getRandomProducts = () => {//get random products in the beginging 
  return (dispatch) => {
    axios.get('/get-random-products')
      .then(res =>{
        if(res.status === 200) dispatch(addProducts(res.data));
      })
      .catch(err => console.log(err));
  };
};

export const getProduct = (id, category) => {//get product from certain category
  return (dispatch) => {
    const values = JSON.stringify({id, category});
    axios.get(`/get-product?values=${values}`)
      .then(res => {
        if(res.status === 200) {
          dispatch(addDetailedProduct(res.data[0]));
          return res.status;
        }
      })
      .then(res => res === 200 && dispatch(toggleIsOverShown()))
      .catch(err => console.log(err));
  };
};