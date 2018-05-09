import {$http} from '../../utils/http'
export const mapDispatchToProps = (dispatch)=>{
  return {
    fetchList(){
      // console.log('dispatch')
      dispatch({
        type:'GET_LIST'
      })
    }   
  }
}