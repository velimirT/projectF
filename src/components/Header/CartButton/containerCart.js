import { connect } from 'react-redux';
import Cart from './Cart';

const mapStateToProps = state => {
  return ({
    cart: state.cart
  });
};

export default connect(mapStateToProps, null)(Cart);