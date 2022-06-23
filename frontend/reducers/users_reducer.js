import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

export const usersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, prevState, { [action.currentUser.id]: action.currentUser });
    default:
      return prevState;
  }
};
