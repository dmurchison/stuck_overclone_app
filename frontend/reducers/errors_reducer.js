import { combineReducers } from "redux";
import { sessionErrorsReducer } from "./errors/session_errors_reducer";
import { questionsErrorsReducer } from "./errors/questions_errors_reducer";


export const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  questions: questionsErrorsReducer,
});

