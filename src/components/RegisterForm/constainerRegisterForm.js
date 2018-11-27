import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { addNewUser } from '../../actions/actions';

const mapStateToProps = (state) => {
  return({
    logged: state.logged
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    addNewUser: (userInfo) => dispatch(addNewUser(userInfo))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);