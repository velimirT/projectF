import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { getProduct } from '../../../actions/actions';


const mapDispatchToProps = (dispatch) => {
  return({
    getProduct: (id, category) => dispatch(getProduct(id, category))
  })
};

export default connect(undefined, mapDispatchToProps)(ProductItem);