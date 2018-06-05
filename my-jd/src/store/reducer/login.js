import * as types from '../actionTypes/login'
const init = {
    name: 'login',
    loginDatas: null
}
const login = (state = init, action) => {
    switch (action.type) {
        case types.GET_LOGIN_SUCC:
            return {...state, loginDatas: action.loginDatas }
        default:
            return state
    }
}
export default login