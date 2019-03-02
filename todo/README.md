自上而下開發 App -> TodoList -> Todo -> AddTodo -> Footer  

App.js `rcc` 
> extensions Reactjs code snippets  


State 代表UI的完整且最小的狀態集合  
是否可以透過其他state或props計算得到? 可以，為冗餘狀態(非最小) 非state

Todo State
> 待辦事項列表 新增輸入框中的文本  當前篩選條件

如果某個state被多個組件依賴，尋找共同的父組件(狀態上移) 

state 
App.js `todos` `filter` state   
AddTodo.js `text` state

###  redux

在組件使用redux時 要將組件化為兩類  
components 展示型組件 關注UI  
containers 容器型組件 關注data  

連接redux層時，應在較低層級的react組件進行連接，以減少不必要的組件渲染

redux
```
{
    text: '',
    todos: [
        {
            id: 1,
            text:'學習react',
            completed: true
        }
    ],
    filter:'all'
}
```
學會定義react state 再去定義 redux

### actions 

描述如何修改狀態  
JSON對象 type屬性必需
發送  store.dispatch    

### reducer

reducer 是 action的解析器  

reducer是個函數 接收當前redux的state和action
根據state和action進行計算，從而得到新的state  

> previous state & action -> reducer() -> new state  

可以把reducer理解成action的解析器  
action描述了 我要如何修改一個state  
reducer將這個描述落實到代碼層面，對state進行真正的修改  

combineReducers 為 redux api 使用前要先安裝redux的依賴  
`$ npm install redux`
> import {combineReducers} from 'redux'

### store  

action -> store (黏合劑) <- state 
    dispatch          getState / subscribe
reducer -> store(黏合劑)  
    cteateStore 


react 與 redux 是如何結合到一起
與store訂閱機制基本類似  
react的view層 會監聽store當中的state變化  
當變化會使用新的state，重新去渲染視圖層
為了讓監聽和視圖層的渲染過程更加簡潔易操作  react提供react-redux第三方庫 將監聽的行為進行封裝(容器型組件拆分)  

# react-redux

向根組件注入Store -> Provider組件
連接React組件和Redux狀態層 -> connect 
獲取React組件所需的state和Actions -> map api

|   |    展示型組件       |  容器型組件 |
|----------|:-------------:|------:|
| 關注點 |  UI的展現   | 邏輯(讀數據，更新狀態) |
| redux層感知|    否       |   是 |
| 讀數據 | 從props中獲取 |    從redux store中獲取 |
| 寫數據 | 通過prop傳遞的回調 |    發送redux actions |
| 如何創建 | 手寫        |    通過react-redux創建 |

`$ npm install react-redux`

### Note

Q: `onClick={onClick}` Line 8:  'onClick' is not defined  no-undef  
> `const { completed, text, onClick } = this.props;` or `onClick={this.onClick}` 

Q: Warning: Each child in a list should have a unique "key" prop.
> src/reducers/todos.js   case ADD_TODO:   id: action.id,



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
