import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";


// 在react根組件注入store
import { createStore, applyMiddleware, compose } from "redux"; //, compose 
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk'; //處理異步action  
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux-devtools-extension
const store = createStore(rootReducer,composeEnhancers( applyMiddleware(thunkMiddleware) ));

// 原本的App組件作為Provider的子組件
// 通過Provider組件 注入redux的store對象 完成 react和 redux的組件 redux的狀態層的連接
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
