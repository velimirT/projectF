import { connect } from 'react-redux';
import Cart from './Cart';

const mapStateToProps = state => {
  return ({
    cart: state.cart
  });
};


// const mapDispatchToProps = (dispatch) => {
//   return({
//     handleLogin: (username, password) => {
//     	dispatch(handleLogin(username, password))
//   	}
//   });
// };


export default connect(mapStateToProps, null)(Cart);