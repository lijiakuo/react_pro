export const mapStateToProps = (state,props)=>{
  console.log(state)
  return {
    homeList:state.home_list.dataList
  }
}