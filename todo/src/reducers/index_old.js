import {ADD_TODO, TOGGLE_TODO, SET_TODO_TEXT, SET_FILTER} from '../actions/actionTypes'

// 當應用啟動時 redux的 state是undefined的 設定初始值
const initialState = {
    filter: 'all',
    text:'',
    todos:[]
}

// reducor 接收兩個參數 state和action 返回的是新state
// reducor 需要能處理各種各樣的action  
const todoApp = (state = initialState, action) => {
    //根據action的type屬性決定要當前是處理哪個action 
    // (todo有四個 新增待辦 更改待辦狀態 設置新增待辦文本訊息 更改應用的過濾條件)
    // redux的state是不可變的 reducor修改state不能在原有的修改 而是需要返回新的state對象(這裡使用ES6的拓展語法產生新的state)
    switch(action.type) {
        case ADD_TODO:
            return  {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.id,
                        text: action.text,
                        completed: false
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>{
                    todo.id === action.id ? {
                        ...todo, complteted : !todo.completed
                    } : todo
                })
            }
        case SET_TODO_TEXT:
            return {
                ...state,
                text: action.text 
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state
    }
}


export default todoApp 