import React from 'react';
import './product-item.css';

const ProductItem = ({toggleIsOverShown, values}) => {

  const { img, title, category, price } = values;
  return (
    <div className="product-item  flex-center">
      <div className="product-item-content" onClick={toggleIsOverShown}>
        { img && <img className="product-item-img" src={img}  alt="product cover"/>}
        { title ? <h3>{title}</h3> : 'no title availabe' }
        { category && <p>{category}</p> }
        { price && <p className="product-item-price">{price}$</p> }
      </div>
    </div>
  )
};

export default ProductItem;