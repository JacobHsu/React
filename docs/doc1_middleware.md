---
id: doc1_middleware
title: NPM
sidebar_label: middleware 
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

Redux 提供了一個 `middleware` 介面，讓第三方套件可以插入在 react 與 redux 中間。我們經常會用 middleware 來處理 logger、非同步事件。舉例來說，使用 redux-logger 幫助記錄存入 redux 前後的狀態，以及使用 redux-saga 處理非同步的 API 請求。

![Alt middleware](https://miro.medium.com/max/1400/1*M3562Kbn5Zn1YSS_Cl3CyQ.png "redux-logger")

[![NPM](https://nodei.co/npm/redux-logger.png?downloads=true&stars=true)](https://nodei.co/npm/redux-logger/)

```js
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'

const store = createStore(
  reducer,
  applyMiddleware(logger)
);
```

只需要使用 redux 提供的 `applyMiddleware` 函式，在建立 redux store 時把middleware 當作參數傳遞進去，redux 就會自動幫你建立與 middleware 的連結。
在建立連結之後，當呼叫 `store.dispatch` 時，所有的 action 都會先經過 `redux-logger`，它就會幫助我們將進出 redux 前後的狀態 (state) 都顯示到瀏覽器的 console 上。

官方提供[自己實作 logger middleware](https://redux.js.org/advanced/middleware)

```js
const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
```

如果不用 arrow function 來建立 logger，而是用原始的方法建立 currying 函數

```js
function logger(store) {
  return function wrapDispatchToAddLogging(next) {
    return function dispatchAndLog(action) {
      console.log('dispatching', action)
      let result = next(action)
      console.log('next state', store.getState())
      return result
    }
  }
}
```

## References

[middleware 的探險日記](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/exploring-redux-middleware-b63b1fc4485f)