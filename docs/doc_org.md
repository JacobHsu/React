---
id: doc6
title: reactjs.org
---

## Components 與 Props

Component 使你可以將 UI 拆分成獨立且可複用的程式碼，並且專注於各別程式碼的思考。本章節旨在介紹 component 的相關概念，你也可以在此[參閱詳細的 API 文件](https://zh-hant.reactjs.org/docs/react-component.html)。

概念上來說，component 就像是 JavaScript 的 function，它接收任意的參數（稱之為「props」）並且回傳描述畫面的 React element。

「Props」 System for passing data from a `parent` component to a `child` component

`Prop` is short for `Properties`

### props.children

[Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)

在react component中，我們把包在標籤中間的東西，稱為children  
`<元素名稱> (其他的東西) </元素名稱>`

```js
import React from "react";
class App extends React.Component {
    render() {
        return (<div>
            {this.props.children}
        </div>)
    }
}
export default App;
```
