import { connect } from 'react-redux';
import { setSearchValue, searchProducts } from '../../actions/actions';
import Search from './Search';

const mapStateToProps = state => {
  return ({
    filters: state.filters,
    searchValue: state.searchValue,
    category: state.categories[state.active_category] || ""
  });
};

const mapDispatchToProps = dispatch => {
  return({
    setSearchValue: (searchValue) => dispatch(setSearchValue(searchValue)),
    searchProducts: (searchValue, filters, category) => dispatch(searchProducts(searchValue, filters, category))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);