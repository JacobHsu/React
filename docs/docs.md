---
id: docs
title: 主要概念
sidebar_label: Hello World
---

# Hello World

React 最簡單的範例看起來像是：

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

在頁面上顯示「Hello, world!」。

[在 CodePen 上試試看吧！](https://zh-hant.reactjs.org/redirect-to-codepen/hello-world)

點擊上方連結開啟線上編輯器。請隨意的變更程式碼並觀察它們的輸出變化。大部分的文件頁面都有像這樣可以編輯的範例。

## Components 與 Props

Component 使你可以將 UI 拆分成獨立且可複用的程式碼，並且專注於各別程式碼的思考。本章節旨在介紹 component 的相關概念，你也可以在此參閱詳細的 [API 文件](https://zh-hant.reactjs.org/docs/react-component.html)。

概念上來說，component 就像是 **JavaScript 的 function**，它接收任意的參數（稱之為「`props`」）並且回傳描述畫面的 React element。

###　Function Component 與 Class Component

定義 component 最簡單的方法即是撰寫一個 Javascript function：

```js
// 接受一個「props」（指屬性 properties）物件
function Welcome(props) {
  // 並回傳一個 React element
  return <h1>Hello, {props.name}</h1>;
}
```

我們稱之為 function component，因為它本身就是一個 JavaScript function。

同樣的，你也可以使用 [ES6 Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 來定義 component：

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

上述兩種 component 在 React 中是同等的。

在 react-hooks 出現以前，react 專案基本上會看到兩種型態的 component ，一種是 functional 函式型寫法，另一種則是的 class 寫法。原因在於在過去只有 class-based component 可以使用 state 與 lifecycle ，而 functional component 基本上只負責單純呈現資料，有可能是寫死的資料，或是透過 props 傳來的資訊。

但是，React 16.8中增加的 [Hook](https://zh-hant.reactjs.org/docs/hooks-intro.html) 的出現改變了一切。functional component 現今也能夠使用 state 了。它讓你不必寫 class 就能使用 state 以及其他 React 的功能。

```js
const UserForm = () => {
    return (
        <form>
            <label>Enter a username:</label>
            <input />
        </form>
    );
}

// Renders the App component into a div with id 'root'
ReactDOM.render(<UserForm />, document.querySelector('#root'));
```

```js
class UserForm extends React.Component {
    render() {
        return (
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
        );
    }
}


// Renders the App component into a div with id 'root'
ReactDOM.render(<UserForm />, document.querySelector('#root'));
```
