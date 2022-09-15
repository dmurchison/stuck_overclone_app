import { combineReducers } from 'redux';
import { entitiesReducer } from './entities_reducer';
import { sessionReducer } from './session_reducer';
import { errorsReducer } from './errors_reducer';
import { searchBarReducer } from './searchbar_reducer';


export const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  searchbar: searchBarReducer
});

