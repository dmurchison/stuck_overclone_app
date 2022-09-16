import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from '../reducers/root_reducer';


export const configureStore = (preLoadedState = {}) => (
  createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(thunk)
  )
);
