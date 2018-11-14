import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { toggleIsOverShown } from '../../../actions/actions';


const mapDispatchToProps = (dispatch) => {
  return({
    toggleIsOverShown: () => dispatch(toggleIsOverShown())
  })
};

export default connect(undefined, mapDispatchToProps)(ProductItem);