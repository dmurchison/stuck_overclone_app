import { 
  RECEIVE_ANSWER,
  RECEIVE_ANSWERS,
  REMOVE_ANSWER,
} from '../actions/answer_actions';
import { 
  RECEIVE_QUESTION, 
  RECEIVE_QUESTIONS 
} from '../actions/question_actions';
import { HANDLE_VOTE } from '../actions/vote_actions';
import { REMOVE_ENTITY } from '../actions/entity_actions';


export const answersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_QUESTION:
      // debugger
      newState = Object.assign({}, action.question.answers);
      return newState;

    case RECEIVE_ANSWER:
      // debugger
      let answers = {};
      Object.keys(action.answer).forEach(answerId => {
        answers[answerId] = action.answer[answerId];
      });
      newState = Object.assign({}, state, answers);
      return newState;

    case REMOVE_ANSWER:
      // debugger
      newState = Object.assign({}, state);
      delete newState[action.answerId];
      return newState;
        
    case HANDLE_VOTE:
      // debugger
      newState = Object.assign({}, state, action.vote.answer);
      return newState;

    case REMOVE_ENTITY:
      return {};

    default:
      return state;
  };
}

