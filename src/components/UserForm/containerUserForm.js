import { connect } from 'react-redux';
import { getUserInfo, updateUserInfo } from '../../actions/actions';
import UserFrom from './UserForm';

const mapStateToProps = (state) => {
  return ({
    userInfo: state.userInfo
  });
};

const mapDispatchFromProps = (dispatch) => {
  return ({
    getUserInfo: () => dispatch(getUserInfo()),
    updateUserInfo: (userInfo) => dispatch(updateUserInfo(userInfo))
  });
};

export default connect(mapStateToProps, mapDispatchFromProps)(UserFrom);