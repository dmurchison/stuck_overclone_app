import {
  RECEIVE_QUESTION,
  RECEIVE_QUESTIONS,
  REMOVE_QUESTION,
  REMOVE_QUESTION_SEARCH
} from '../actions/question_actions';
import { REMOVE_ENTITY } from '../actions/entity_actions';


export const questionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_QUESTIONS:
      // debugger
      newState = Object.assign({}, state, action.questions )
      return newState;

    case RECEIVE_QUESTION:
      // debugger
      newState = Object.assign({}, { [action.question.question.id]: action.question });
      return newState;

    case REMOVE_QUESTION:
      // debugger
      newState = Object.assign({}, state);
      delete newState[action.questionId];
      return newState;

    case REMOVE_QUESTION_SEARCH:
      return [];

    case REMOVE_ENTITY:
      return {};

    default:
      return state;
  };
}
