import React from 'react';
import './product-item.css';

class ProductItem extends React.Component {

  state = {
    over: false
  }

  toggleOver = () => this.setState(prevState => ({ over: !prevState.over }));
  
  render() {
    const { img, title, category, price, id } = this.props.values;
    const { getProduct } = this.props;
    const { over } = this.state;

    return (
      <div className="product-item  flex-center">
        <div
          className="product-item-content"
          onClick={() => getProduct(id, category)}
          onMouseEnter={this.toggleOver}
          onMouseLeave={this.toggleOver}
        >
          <div className={over ? 'product-item-hover product-item-hover-opacity' : 'product-item-hover'}></div>
          {img && <img className="product-item-img" src={img} alt="product cover" />}
          {title ? <h3>{title}</h3> : 'no title availabe'}
          {category && <p>{category}</p>}
          {price && <p className="product-item-price">{price}$</p>}
        </div>
      </div>
    )
  }
}

export default ProductItem;

