import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = (state) => {
  return({
    logged: state.logged
  });
};

export default connect(mapStateToProps)(Profile);