import * as types from '../actionTypes/shopCarTypes'
const init = {
    name: 'ljk',
    shopDatas: null
}
const reducer = (state = init, action) => {
    switch (action.type) {
        case types.GET_SHOPC_RES:
            return {...state, shopDatas: null }
        case types.GET_SHOPC_SUCC:
            return { state, shopDatas: action.shopDatas }
        default:
            return state
    }
}
export default reducer