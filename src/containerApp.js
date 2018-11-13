import { connect } from 'react-redux';
import { getRandomProducts } from './actions/actions';
import App from './App';

const mapStateToProps = state => {
  return ({
    filters: state.filters
  })
};

const mapDispatchToProps = dispatch => {
  return({
    getRandomProducts: () => dispatch(getRandomProducts())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(App);