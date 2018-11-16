import { connect } from 'react-redux';
import ProductOverlay from './ProductOverlay';
import { toggleIsOverShown, addToCart } from '../../../actions/actions';

const mapStateToProps = state => {
  return({
    isOverShown: state.isOverShown,
    detailedProduct: state.detailedProduct
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    toggleIsOverShown: () => dispatch(toggleIsOverShown()),
    addProductToCart: (product) => dispatch(addToCart(product))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverlay);