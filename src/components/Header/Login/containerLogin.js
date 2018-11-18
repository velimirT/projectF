import { connect } from 'react-redux';
import Login from './Login';
import { handleLogin } from '../../../actions/actions';

const mapStateToProps = state => {
  return ({
    logged: state.logged
  });
};


const mapDispatchToProps = (dispatch) => {
  return({
    handleLogin: (username, password) => {
    	dispatch(handleLogin(username, password))
  	}
  });
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);