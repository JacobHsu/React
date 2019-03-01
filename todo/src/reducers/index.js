// 對於大型項目來說 將所有action放置一個reducer來完成是不適合的
// 拆分reducer 便於維護與擴展  
// 並合併成API: combineReducers (合成一個reducer)
import {combineReducers} from 'redux'

// 拆分邏輯是根據state拆分 每一個state對應一個reducer 可參考index_old.js的initialState
// 把每個reducers導入進來
import todos from './todo' 
import filter from './filter'
import text from './text'

export default combineReducers({
    todos,
    filter,
    text
}) 