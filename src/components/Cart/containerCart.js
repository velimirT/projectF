import { connect } from 'react-redux';
import { changeQty, subtructFromQty, removeFromCart } from '../../actions/actions';
import Cart from './Cart';

const mapStateToProps = state => {
  return ({
    cart: state.cart,
    logged: state.logged,
    user: state.user
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    changeQty: (productId) => dispatch(changeQty(productId)),
    subtructFromQty: (productId) => dispatch(subtructFromQty(productId)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId))
  });
};

// const mapDispatchToProps = (dispatch) => {
//   return({
//     handleLogin: (username, password) => {
//     	dispatch(handleLogin(username, password))
//   	}
//   });
// };


export default connect(mapStateToProps, mapDispatchToProps)(Cart);