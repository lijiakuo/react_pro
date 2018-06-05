import { UPDATE_GOODS_COUNT } from '../../store/reducers'
import { UPDATA_GOODS_CHECKED } from '../../store/reducers.js'
export const mapDispatchToProps = (dispatch) => {
    return {
        updataCount(count, id) {
            dispatch({
                type: UPDATE_GOODS_COUNT,
                data: count,
                id
            })
        },
        toggleCheck(checked, id) {
            dispatch({
                type: UPDATA_GOODS_CHECKED,
                data: checked,
                id

            })
        }
    }
}