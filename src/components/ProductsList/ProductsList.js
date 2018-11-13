import React from 'react';
import Product from '../Product/Product';

const ProductsList = ({products}) => {
  return(
    <div>
      { products.length > 0 &&
      products.map((values, index) => <Product values={values} key={index} />) }
    </div>
  )
};

export default ProductsList;