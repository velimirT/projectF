import React from 'react';
import './product-overlay.css';

const ProductOverlay = ({isOverShown, toggleIsOverShown}) => {
  return(
    <div className={isOverShown ? 'product-overlay product-overlay-shown' : 'product-overlay'}>
      <button onClick={toggleIsOverShown} style={{'position': 'absolute', 'right': 0}}>close</button>
    </div>
  )
};

export default ProductOverlay;