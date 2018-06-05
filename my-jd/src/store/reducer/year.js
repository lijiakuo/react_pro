import * as types from '../actionTypes/year'
const init = {
    name: 'yearData',
    yearDatas: null
}
const reducer = (state = init, action) => {
    console.log(action);
    switch (action.type) {
        case types.GET_YEAR_SUCC:
            return {...state, yearDatas: action.yearDatas }
        case types.GET_YEAR_REQ:
            return state
        case types.GET_YEAR_ERR:
            return state
        default:
            return state
    }
}
export default reducer