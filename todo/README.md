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

# 異步 action

redux-thunk改寫了dispatch API，使其具備接受一個函數作為參數的能力，從而達到middleware的效果，  

即在redux的dispatch action => reducer => store這個流程中，在action 被發起之後，
到達 reducer 之前的擴展點，加入相關操作，比如發生請求、log等。

`$ npm install redux-thunk`

# Redux項目結構組織方式

按照類型  
按照功能模塊  
[Ducks(鴨子)](https://github.com/erikras/ducks-modular-redux)  
> 劃分模塊依據: 應用狀態state，而不是界面功能  

常見的State設計原則錯誤  
以API為設計State的依據  
以頁面UI為設計State的依據  
> 應像設計資料庫一樣設計State

資料庫設計原則  
數據按照領域(Domain)分類，存儲在不同的表中，不同的表中存儲的列數據不能重複 
> 子state之間不能保存重複的數據 
表中的每一列數據都依賴於這張表的主鍵  
> State以鍵值對的數據結構存儲數據  
表中除了主鍵外的其他列，互相之間不能有直接依賴關係  
> state中不能保存可以通過已有數據計算而來的數據(避免數據冗餘)  

# Selector 函數

選擇器函數 作用是從redux state 讀取部分數據  
將讀取到的數據給container components 使用  
container components -(selector)-> redux state  

使用的原因之一
components代表的view層  
redux代表的state層  
分別為獨立的兩個層級，這兩個層級的交互應該是通過接口進行通訊，而非通過state的數據結構形式    

# B/S Browser/Server

pages -> api -> server (website)  
page ui -> state -> server (application)
前後端一體 -> 前後端分離 -> 微服務化(商品服務 用戶服務)  前端頁面| 前端狀態| 中台層| 微服務

# Middleware

redux-thunk  
增強store dispatch的能力  
view -> [ mid1 ] ->  [ mid2 ] -> [ mid3 ] -> reducer   
        [ new dispatch ]

redux 的中間鍵是一個函數
dispatch的工作是發送action  
function: ({getState, dispatch}) => next => action  

### Note

Q: `onClick={onClick}` Line 8:  'onClick' is not defined  no-undef  
> `const { completed, text, onClick } = this.props;` or `onClick={this.onClick}` 

Q: Warning: Each child in a list should have a unique "key" prop.
> src/reducers/todos.js   case ADD_TODO:   id: action.id,

Q: middlewares React Error Boundaries  
> `console.groupEnd();` 錯打 console.groundEnd(); 

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
