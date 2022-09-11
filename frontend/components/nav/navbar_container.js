import { connect } from 'react-redux';
import { NavBar } from './navbar';


const mapStateToProps = (state) => {
  const id = state.session.id
  return {
    session: state.session.id,
    currentUser: state.entities.users[id]
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
}

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
