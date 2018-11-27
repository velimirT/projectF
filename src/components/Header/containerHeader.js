import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = (state) => {
  return({
    logged: state.logged
  });
};

export default connect(mapStateToProps)(Header);