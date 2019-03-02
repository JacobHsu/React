import {ADD_TODO, TOGGLE_TODO} from '../actions/actionTypes'

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

export default todos