export const mapStateToProps = ((state, props) => {
    //添加计算遍历carList
    let totalCost = 0;
    let checkAll = true; //默认全选
    console.log(state.cart_list);
    if (state.cart_list.length != 0) {
        console.log(state.cart_list)
        state.cart_list.forEach((item, index) => {
            if (item.checked == 1) {
                totalCost += item.discount_price * item.count
            }
            if (item.checked == 0) {
                checkAll = false;
            }
        })
    }
    return {
        carList: state.cart_list,
        totalCost,
        checkAll

    }
})