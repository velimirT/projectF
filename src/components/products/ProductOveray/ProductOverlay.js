import React from 'react';
import './product-overlay.css';

const ProductOverlay = ({isOverShown, detailedProduct, toggleIsOverShown}) => {
  const { category, img, price, product_desc: productDesc, title } = detailedProduct;
  return(
    <div className={isOverShown ? 'product-overlay product-overlay-shown' : 'product-overlay'}>
      <button onClick={toggleIsOverShown} style={{'position': 'absolute', 'right': 0}}>close</button>
      { img && <img src={img}  alt="product cover" /> }
      <h2>{title}</h2>
      <p>{category}</p>
      <p>{productDesc}</p>
      { price && <p>{price}$</p>}
    </div>
  )
};

export default ProductOverlay;