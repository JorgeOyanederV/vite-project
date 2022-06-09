import { createStore, combineReducers } from "redux";
import { newsReducer } from "../reducers/newsReducer";

const reducers = combineReducers({
  news: newsReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
