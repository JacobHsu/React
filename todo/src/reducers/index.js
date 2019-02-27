import {combineReducers} from 'redux'

// 把每個reducers導入進來
import todos from './todos' 
import filter from './filter'
import text from './text'

export default combineReducers 