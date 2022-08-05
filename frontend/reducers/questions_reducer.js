import {
  RECEIVE_QUESTION,
  RECEIVE_QUESTIONS,
  REMOVE_QUESTION,
} from '../actions/questions_actions';

export const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_QUESTION:
      newState = Object.assign({}, state);
      newState[action.question.id] = action.question;
      return newState;
    case RECEIVE_QUESTIONS:
      return Object.assign({}, action.questions);
    case REMOVE_QUESTION:
      newState = Object.assign({}, state);
      delete newState[action.questionId];
      return newState;
    default:
      return state;
  };
}
