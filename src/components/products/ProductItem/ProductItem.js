import React from 'react';
import './product-item.css';

const ProductItem = ({ values, getProduct }) => {

  const { img, title, category, price, id } = values;
  const style = { backgroundImage: `url(${img})`};

  return (
    <div className="product-item  flex-center">
      <div
        className="product-item-content"
        onClick={() => getProduct(id, category)}
      >
        <div className="product-item-hover" style={style}>
          <div className="product-item-hover-black"></div>
        </div>
        <h3>{title}</h3>
        <p>{category}</p>
        <p className="product-item-price">{price}$</p>
      </div>
    </div>
  )
}

export default ProductItem;


