import { connect } from 'react-redux';
import { updateUserInfo } from '../../actions/actions';
import UserFrom from './UserForm';

const mapStateToProps = (state) => {
  return ({
    userInfo: state.userInfo
  });
};

const mapDispatchFromProps = (dispatch) => {
  return ({
    updateUserInfo: (userInfo) => dispatch(updateUserInfo(userInfo))
  });
};

export default connect(mapStateToProps, mapDispatchFromProps)(UserFrom);