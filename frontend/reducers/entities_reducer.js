import { combineReducers } from 'redux';
import { usersReducer } from './users_reducer';
import { questionsReducer } from './questions_reducer';
import { answersReducer } from '../reducers/answers_reducer';


export const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer,
  answers: answersReducer
});

