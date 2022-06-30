import { combineReducers } from "redux";
import questionsReducer from "./questions_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  questions: questionsReducer
});

export default entitiesReducer;
