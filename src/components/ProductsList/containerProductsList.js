import { connect } from 'react-redux';
import ProductsList from './ProductsList';

const mapStateToProps = (state) => {
  return({
    products: state.products
  });
};

export default connect(mapStateToProps)(ProductsList);