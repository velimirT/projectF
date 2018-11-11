import button from './button';
import { connect } from 'react-redux';
import { addOne, subtractOne} from '../../actions/actions';

const mapStateToProps = (state) => {
  return {
    number: state.number
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOne: () => dispatch(addOne()),
    subtractOne: () => dispatch(subtractOne())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(button)