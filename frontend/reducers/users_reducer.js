import { 
  LOGOUT_CURRENT_USER, 
  RECEIVE_CURRENT_USER 
} from '../actions/session_actions';


export const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      newState = Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      return newState;

    case LOGOUT_CURRENT_USER:
      // debugger
      return {};

    default:
      return state;
  };
}

