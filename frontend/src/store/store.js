import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers/index";
//combine thunk with the redux devtools
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store accepts a reducer and the dev tools
const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

export default store