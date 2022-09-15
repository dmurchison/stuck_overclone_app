import { combineReducers } from 'redux';
import { sessionErrorsReducer } from './errors/session_errors_reducer';
import { questionErrorsReducer } from './errors/question_errors_reducer';
import { answerErrorsReducer } from './errors/answer_errors_reducer';


export const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  questions: questionErrorsReducer,
  answers: answerErrorsReducer
});

