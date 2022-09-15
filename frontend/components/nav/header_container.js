import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';
import { setSearchTerm } from '../../actions/searchbar_actions';



const mapStateToProps = (state) => {
  const id = state.session.id
  return {
    session: state.session,
    currentUser: state.entities.users[id]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    setSearchTerm: (searchTerm) => dispatch(setSearchTerm(searchTerm))
  };
}

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

