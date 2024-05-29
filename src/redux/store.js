import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import {thunk} from "redux-thunk";

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhacers(applyMiddleware(thunk))
);

export default store;
