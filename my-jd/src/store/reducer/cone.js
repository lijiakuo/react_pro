import * as types from '../actionTypes/cone'
const init = {
    name: 'content',
    content: null
}
const cone = (state = init, action) => {
    switch (action.type) {
        case types.GET_CONE_SUCC:
            return {...state, content: action.content }
        default:
            return state
    }
}
export default cone