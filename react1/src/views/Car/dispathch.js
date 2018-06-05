import { $http } from '../../utils/http'
import { getCookie } from '../../utils/getCookie'
import { UPDATE_GOODS_LIST, CHECKED_ALL } from '../../store/reducers'
export const mapDispatchToProps = (dispatch) => {
    return {
        fetchGoodsList(history) {
            $http.post('/user/car/goodsList', {
                    token: getCookie('token')
                })
                .then(res => {
                    console.log(res + '123');
                    if (res.error == 1) {
                        history.push('/login', {
                            from: '/index/car'
                        })
                    } else {
                        dispatch({
                            type: UPDATE_GOODS_LIST,
                            data: res
                        }) 
                    }
                })
        },
        toggleCheckedAll(flag) {
            console.log(flag)
            dispatch({
                type: CHECKED_ALL,
                flag
            })
        },
        delCarGoods(checkedId) {
            $http.post('/user/car/deleteGoods', {
                    checkedId: checkedId,
                    token: getCookie('token')
                })
                .then(res => {
                    if (res.success == 1) {
                        dispatch({
                            type: UPDATE_GOODS_LIST,
                            data: res.carList
                        })
                    }
                })
        },
        testFn(idx){
           if(idx){
               dispatch({
                   type:'GET_GOODS_LIST'
               })
           }
        }
    }
}