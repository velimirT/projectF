import { connect } from 'react-redux';
import { setSearchValue, searchProducts } from '../../actions/actions';
import Search from './Search';

const mapStateToProps = state => {
  return ({
    filters: state.filters,
    searchValue: state.searchValue
  });
};

const mapDispatchToProps = dispatch => {
  return({
    setSearchValue: (searchValue) => dispatch(setSearchValue(searchValue)),
    searchProducts: (searchValue) => dispatch(searchProducts(searchValue))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);