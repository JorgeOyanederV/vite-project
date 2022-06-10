import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { newsReducer } from "../reducers/newsReducer";
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  news: newsReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
