import { combineReducers } from "redux";
import { questionsReducer } from "./questions_reducer";
import { usersReducer } from "./users_reducer";

export const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer
});

