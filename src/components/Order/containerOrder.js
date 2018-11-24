import { connect } from 'react-redux';
import { changeQty, subtructFromQty, removeFromCart } from '../../actions/actions';
import Order from './Order';

const mapDispatchToProps = (dispatch) => {
  return({
    changeQty: (productId) => dispatch(changeQty(productId)),
    subtructFromQty: (productId) => dispatch(subtructFromQty(productId)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId))
  });
};

export default connect(null, mapDispatchToProps)(Order);