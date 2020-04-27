---
id: doc1
title: NPM
sidebar_label: Example Page
---

Check the [documentation](https://docusaurus.io) for how to use Docusaurus.

[![NPM](https://nodei.co/npm/connected-react-router.png?downloads=true&stars=true)](https://nodei.co/npm/connected-react-router/)

## connected-react-router

> A Redux binding for React Router

```js
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
      <> { /* your usual react-router v4/v5 routing */ }
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react-root')
)
```

## react-i18next

[![NPM](https://nodei.co/npm/react-i18next.png?downloads=true&stars=true)](https://nodei.co/npm/react-i18next/)  
[![NPM](https://nodei.co/npm/i18next.png?downloads=true&stars=true)](https://nodei.co/npm/i18next/)  
[![NPM](https://nodei.co/npm/i18next-browser-languagedetector.png?downloads=true&stars=true)](https://nodei.co/npm/i18next-browser-languagedetector/)  

https://react.i18next.com/guides/quick-start

```js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const options = {
  fallbackLng: "en",
  debug: process.env.REACT_APP_TARGET_ENV !== "prod",
  interpolation: {
    escapeValue: false,
  },
  resources: resourceBundle
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options);

export default i18n;
```

## reselect

Selector library for Redux  
將selector的計算結果緩存下來，避免不必要的重複計算，可以用來做性能優化。

[![NPM](https://nodei.co/npm/reselect.png?downloads=true&stars=true)](https://nodei.co/npm/reselect/)

```js
import { createSelector } from 'reselect'

const shopItemsSelector = state => state.shop.items

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
)

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ]
  }
}

console.log(subtotalSelector(exampleState)) // 2.15
```

## mobile-detect

[![NPM](https://nodei.co/npm/mobile-detect.png?downloads=true&stars=true)](https://nodei.co/npm/mobile-detect/)

src\utils\isMobile.js

```js
import MobileDetect from "mobile-detect";

export default () => {
  const md = new MobileDetect(window.navigator.userAgent);
  return Boolean(md.mobile() || md.phone());
};
```

components\Registration\Landing.js

```js
import isMobile from "../../utils/isMobile";
if(loginModal || isMobile()) {
  this.setState({ loginModal: false })
```

## react-tooltip

[![NPM](https://nodei.co/npm/react-tooltip.png?downloads=true&stars=true)](https://nodei.co/npm/react-tooltip/)

[![Edit react-tooltip-example-3.11.6](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-tooltip-example-3116-bddeu?fontsize=14&hidenavigation=1&theme=dark)
