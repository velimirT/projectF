import { connect } from 'react-redux';
import { getUserOrders } from '../../actions/actions';
import Orders from './Orders';

const mapStateToProps = (state) => {
  return ({
    orders: state.orders
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getUserOrders: () => dispatch(getUserOrders())
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);