import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';



const mapStateToProps = (state) => {
  const currentUserId = state.session.id
  return {
    currentUser: state.entities.users[currentUserId],
    session: state.session
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

