// 把type抽象到一個常量當中，在reducer中會根據type的值，進行不同的邏輯處理  
// action的處理器：reducer
import {ADD_TODO, TOGGLE_TODO, SET_FILTER, SET_TODO_TEXT} from './actionTypes';

// action 的 json對象例
// var addTodoAction = {
//   type: 'ADD_TODO',
//   id: 1,
//   text: 'Learn React'
// }
// 實際開發會創建 action creator  //一個函數返回action //ex: export const addTodo


let nextTodoId = 0;

/**
 * 新增待辦事項
 * @param {*} text
 */
export const addTodo = (text) => ({
  type: ADD_TODO, //"ADD_TODO",
  id: nextTodoId++,
  text
});

/**
 * 更改待辦事項狀態
 * @param {*} id
 */
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

/**
 * 設置過濾狀態
 * @param {*} filter
 */
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

/**
 * 設置新增待辦事項的文本
 * @param {*} text
 */
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
});
