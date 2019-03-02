import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// 在react根組件注入store
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

// 原本的App組件作為Provider的子組件
// 通過Provider組件 注入redux的store對象 完成 react和 redux的組件連接
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
