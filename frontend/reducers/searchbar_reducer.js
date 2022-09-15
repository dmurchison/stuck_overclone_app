import {
  SET_SEARCH_TERM, 
  CLEAR_SEARCH_TERM
} from '../actions/searchbar_actions';

export const searchBarReducer = (state = { searchTerm: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_SEARCH_TERM:
      // debugger
      return { searchTerm: action.searchTerm };

    case CLEAR_SEARCH_TERM:
      // debugger
      return { searchTerm: null };

    default:
      return state;
  };
}

