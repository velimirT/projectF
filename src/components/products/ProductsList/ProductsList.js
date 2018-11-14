import React from 'react';
import ProductItem from '../ProductItem/containerProductItem';
import './product-list.css';

const ProductsList = ({products}) => {
  return(
    <div className="product-list flex-center">
      { products.length > 0 &&
      products.map((values, index) => <ProductItem values={values} key={index} />) }
    </div>
  )
};

export default ProductsList;