import { connect } from 'react-redux';
import Orders from './Orders';

const mapStateToProps = (state) => {
  return ({
    cart: state.cart
  });
};

export default connect(mapStateToProps)(Orders);