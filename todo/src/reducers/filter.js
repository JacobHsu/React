import { SET_FILTER } from '../actions/actionTypes'

const filter = (state = 'all', action) => {
    switch(action.type) {
        case SET_FILTER:
            return action.filter //字串類型本身是不可變對象 毋需借助 Immutable
        default:
            return state
    }
}

export default filter