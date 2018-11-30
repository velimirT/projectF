import { connect } from 'react-redux';
import { chooseCategory } from '../../actions/actions';
import Categories from './Categories';

const mapStateToProps = state => {
  return ({
    categories: state.categories
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    chooseCategory: (categoryId) => dispatch(chooseCategory(categoryId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);