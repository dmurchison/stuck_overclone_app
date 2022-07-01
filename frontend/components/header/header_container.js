import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  const {id} = state.session
  return {
    session: state.session,
    currentUser: state.entities.users[id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer;
