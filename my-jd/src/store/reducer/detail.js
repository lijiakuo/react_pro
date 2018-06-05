import * as types from '../actionTypes/detail'
const inital = {
    detailComList: null
}

const detail = (state = inital, action) => {

    switch (action.type) {
        case types.GET_COM_LIST:
            return {...state, detailComList: action.detailComList }
        default:
            return state
    }
}
export default detail