import { connect } from 'react-redux';
import PayButton from './PayButton';
import { handleCheckout } from '../../actions/actions';

const mapStateToProps = state => {
  return ({
    cart: state.cart,
    user: state.user.id,
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    handleCheckout: (amount,  payload_nonce, cart, user) => {
    	dispatch(handleCheckout(amount,  payload_nonce, cart, user))
  	}
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(PayButton);