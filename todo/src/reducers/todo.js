import {ADD_TODO, TOGGLE_TODO,FETCH_TODOS_REQUEST,FETCH_TODOS_SUCCESS,FETCH_TODOS_FAILURE } from '../actions/actionTypes'


const initialState = {
    isFetching: false, //當前請求是否正在進行
    error: null, //當前請求是否有錯誤  
    data: [] //放置原本的todo時數據  
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS_REQUEST:
            return  {
                ...state,
                isFetching: true 
            }
        case FETCH_TODOS_SUCCESS:
            return  {
                ...state,
                isFetching: false,
                data: action.data 
            }
        case FETCH_TODOS_FAILURE:
            return  {
                ...state,
                isFetching: false,
                error: action.error 
            }
        default:
            return  {
                ...state,
                data: todos(state.data, action) // todos 相當於拆分後的子reducer
            }
    }
}

// 因拆分 這裡初始值 不再是完整的全局state 而是一部分狀態(todos的)的對應的初始值 也就是空陣列 
// 返回值只需要關注 todos的狀態 不需要關注其他的狀態(例text)
const todos = (state = [], action) => {

    switch(action.type) {
        case ADD_TODO:
            return [...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return  state.map(todo =>
                    todo.id === action.id ? {
                        ...todo, completed : !todo.completed
                    } : todo
                )
        default:
            return state;
    }
}

export default reducer //todos  導出更改為reducer todos含在內