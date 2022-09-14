import { 
  RECEIVE_QUESTION,
  RECEIVE_QUESTION_ERRORS, 
  REMOVE_QUESTION_ERRORS 
} from '../../actions/questions_actions';


export const questionsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_QUESTION_ERRORS:
      return action.errors;

    case RECEIVE_QUESTION:
      return [];

    case REMOVE_QUESTION_ERRORS:
      return [];
      
    default:
      return state;
  };
}

