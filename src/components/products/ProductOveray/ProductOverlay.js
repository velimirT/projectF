import React from 'react';
import './product-overlay.css';
import PayButton from '../../PayButton/PayButton';

const ProductOverlay = ({ isOverShown, detailedProduct, toggleIsOverShown, addProductToCart }) => {
  const { category, img, price, product_desc: productDesc, title } = detailedProduct;
  return (
    <div className={isOverShown ? 'product-overlay product-overlay-shown' : 'product-overlay'}>
      <button onClick={toggleIsOverShown} style={{ 'position': 'absolute', 'right': 0 }}>close</button>
      {img && <div className="image-wrap"><img src={img} alt="product cover" /></div>}
      <div className="overlay-info">
        <h2>{title}</h2>
        <p>{category}</p>
        <p>{productDesc}</p>
        {price && <p>{price}$</p>}
      </div>
      <button onClick={addProductToCart.bind(null, detailedProduct)} className="overlay-button">Buy Now!</button>
    </div>
  )
};

export default ProductOverlay;