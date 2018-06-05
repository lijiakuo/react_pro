import { combineReducers } from 'redux'
//添加购物车
export const ADD_CART = 'ADD_CART'
    //用户信息
export const USER_INFO = 'USER_INFO';
//改变商品数量
export const UPDATE_GOODS_COUNT = 'UPDATE_GOODS_COUNT';
//改变商品选中与否
export const UPDATA_GOODS_CHECKED = 'UPDATA_GOODS_CHECKED'
    //更新整个商品列表
export const UPDATE_GOODS_LIST = 'UPDATE_GOODS_LIST'
    //全选
export const CHECKED_ALL = 'CHECKED_ALL'
// export const GET_GOODS_LIST='GET_GOODS_LIST'
let initState = {
    cartList: [],
    name: 'ljk',
    user_info: null,
    goods_list: []
}

function goods_list(state = initState.goods_list, action) {
    if (action.type == "TEST_SAGA") {
        return action.data
    }
    return state
}

function cart_list(state = initState.cartList, action) {
    switch (action.type) {
        case ADD_CART:
            let flag = false; //添加的商品记录里面没有
            state.forEach((item, index) => {
                if (item.goods_id == action.data.goods_id) {
                    ++item.count;
                    flag = true;
                }
            })
            return flag ? [...state] : [...state, action.data];

        case UPDATE_GOODS_COUNT:
            //[...state]因为state不能直接去更改数据，所以要复制出来一份
            let arr = [...state];

            arr.forEach((item, index) => {
                if (item.goods_id == action.id) {
                    if (action.data > 0) {
                        item.count = action.data
                    } else {
                        item.count = 0;
                    }

                }
            })
            return arr;
        case UPDATA_GOODS_CHECKED:
            let arrs = [...state];
            arrs.forEach((item, index) => {
                if (item.goods_id == action.id) {
                    item.checked = action.data
                }
            })
            return arrs;
        case UPDATE_GOODS_LIST:
            return action.data
        case CHECKED_ALL: 
            let arr2 = [...state];
            arr2.forEach((item, index) => {
                action.flag ? item.checked = 1 : item.checked = 0
                    // if (action.flag) {
                    //     item.checked = 1
                    // } else {
                    //     item.checked = 0;
                    // }

            })
            return arr2
        default:
            return state
    }


}

function user_info(state = initState.user_info, action) {
    switch (action.type) {
        case USER_INFO:
            return action.data;
        default:
            return {

            }
    }
}

export default combineReducers({
    cart_list,
    user_info,
    goods_list
})