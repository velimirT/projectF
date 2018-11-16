import { connect } from 'react-redux';
import ProductOverlay from './ProductOverlay';
import { toggleIsOverShown, addProductToCart } from '../../../actions/actions';

const mapStateToProps = state => {
  return({
    isOverShown: state.isOverShown,
    detailedProduct: state.detailedProduct
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    toggleIsOverShown: () => dispatch(toggleIsOverShown()),
    addProductToCart: (product) => dispatch(addProductToCart(product))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductOverlay);