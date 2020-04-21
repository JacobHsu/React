---
id: doc6
title: reactjs.org
---

#  props.children

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
