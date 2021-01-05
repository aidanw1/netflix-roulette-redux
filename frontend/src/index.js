import React from "react";
import { render } from "react-dom";
import App from "./components/App";
//REDUX SETUP
import { applyMiddleware, createStore, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./reducers";

//combine thunk with the redux devtools
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//store accepts a reducer and the dev tools
const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
// render(<h1>Hello Webpack</h1>, document.getElementById("app"));
