import { connect } from 'react-redux';
import PayButton from './PayButton';
import { handleCheckout } from '../../actions/actions';

const mapStateToProps = state => {
  return ({
    cart: state.cart
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    handleCheckout: (amount,  payload_nonce) => {
    	dispatch(handleCheckout(amount,  payload_nonce))
  	}
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(PayButton);