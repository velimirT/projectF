import axios from 'axios';

export const addProducts = (products) => {
  return ({
    type: 'ADD_PRODUCTS',
    products
  });
};

export const toggleIsOverShown = () => {
  return ({ type: 'TOGGLE_IS_OVER_SHOWN' });
};

export const getRandomProducts = () => {
  return (dispatch) => {
    axios.get('/get-random-products')
      .then(res =>{
        if(res.status === 200) dispatch(addProducts(res.data));
      })
      .catch(err => console.log(err));
  };
};