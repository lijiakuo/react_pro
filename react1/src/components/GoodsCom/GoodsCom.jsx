import React,{Component} from 'react'
import './GoodsCom.scss'
import Lazyload from 'react-lazyload'
import {$http} from '../../utils/http.js'
import {getCookie} from '../../utils/getCookie.js'
import {ToastContainer,toast} from 'react-toastify'
import {connect} from 'react-redux'
import {ADD_CART} from '../../store/reducers.js'
import {T} from 'react-toast-mobile'
import {open} from '../notify'
// console.log(open)
class Placeholder extends Component{
  render(){
    return <img src={require('../../static/img/3.jpg')} alt=""/>
  }
}
class GoodsCom extends Component{
  toDetail(goods_id){
    console.log(goods_id)
    const {history}=this.props;
    // history.push('/detail?id='+goods_id)//"?id=631"
    history.push('/detail',{
      goods_id:goods_id
    })
  }
  toCar(e){
    let {data}=this.props;
    const {location}=this.props; 
    // console.log(location.pathname)
    e.stopPropagation();
    if(getCookie('token')){
        $http.post("/user/car/addCar",{
          token:getCookie('token'),
          goods_id:data.goods_id,
          goods_info:data
        })
      .then(res=>{
        console.log(res)
        if(res==1){
          mountNotify('111')
          T.notify('添加购物车成功')
          toast.success('购物车添加成功',{
            position:toast.POSITION.TOP_CENTER,
            autoClose:1000,
            className:'test'
          })
          this.props.dispatch({
            type:ADD_CART,
            data:{
              ...data,
              count:1,
              checked:0
            }
          })
        }else{
          toast.warn(res.info,{
            position:toast.POSITION.TOP_CENTER,
            hideProgressBar:true,
            autoClose:2,
            className:'test'
          })
          this.props.history.push('/login',{
          from :location.pathname
        })
        }
        
      })
    }else{
        this.props.history.push('/login',{
          from :location.pathname
        })
    }
  }
  render(){
    const {data}=this.props;
    return (
       <dl onClick={this.toDetail.bind(this,data.goods_id)}>
         <dt>
           <Lazyload 
            placeholder={<Placeholder></Placeholder>} 
            overflow once height={'100%'} 
            debounce={500}
          >
               <img src={"http://www.lb717.com//"+data.obj_data} alt=""/>
           </Lazyload>
          
         </dt>
         <dd>
           <p>{data.goods_name}</p>
           <p className='ponCom'><span>{data.discount_price}</span><span className="car" onClick={this.toCar.bind(this)}></span></p>
         </dd>
       </dl>
    )
  }
   
  
}
export default connect(null)(GoodsCom)