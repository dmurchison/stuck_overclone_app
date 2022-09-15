import { 
  RECEIVE_ANSWER, 
  RECEIVE_ANSWER_ERRORS, 
  REMOVE_ANSWER_ERRORS 
} from '../../actions/answer_actions';


export const answerErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWER_ERRORS:
      return action.errors;

    case RECEIVE_ANSWER:
      return [];

    case REMOVE_ANSWER_ERRORS:
      return [];

    default:
      return state;
  };
}

