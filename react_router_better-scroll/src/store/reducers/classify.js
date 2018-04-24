import * as types from '../actionTypes/classify'
const init = {
    name: 'ljk',
    classifyDatas: null
}
const reducer = (state = init, action) => {
    switch (action.type) {
        case types.GET_CLASSIFY_RES:
            return {...state, classifyDatas: null }
        case types.GET_CLASSIFY_SUCC:
            return {...state, classifyDatas: action.classifyDatas }
        default:
            return state
    }
}
export default reducer