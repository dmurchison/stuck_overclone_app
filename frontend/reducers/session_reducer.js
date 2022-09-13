import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';


export const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // debugger
      newState = Object.assign({}, { id: action.currentUser.id });
      return newState;

    case LOGOUT_CURRENT_USER:
      // debugger
      return {};

    default:
      return state;
  };
}

