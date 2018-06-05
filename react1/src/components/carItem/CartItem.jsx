import React,{Component} from 'react'
import {connect} from 'react-redux'
import {mapDispatchToProps} from './dispathch.js' 
class CarItem extends Component{
  constructor(){
    super()
    this.state={
      checkClass:'',
      flag:true
    }
  }
 
  render(){
    const {updataCount,toggleCheck}=this.props;  
    const {item}=this.props;
    // console.log(item.checked)
    return (
      <li >
          <p><span onClick={()=>{toggleCheck(1-item.checked,item.goods_id)}} className={item.checked==0?'':'dg'}></span></p>
          <dl>
            <dt>
              <img src={'http://www.lb717.com/'+item.obj_data} alt=""/>
            </dt>
            <dd>
              <p>{item.goods_name}</p>
              <div className='goods-msg'>
                <i>x{item.count}</i>
                <b>￥{item.discount_price}</b>
                <div className='btns'>
                  <span onClick={()=>{updataCount(--item.count,item.goods_id)}}>-</span>
                  <small >{item.count}</small>
                  <span onClick={()=>{updataCount(++item.count,item.goods_id)}}>+</span>
                </div>
              </div>
            </dd>
          </dl>
      </li>
    )
  }
}
export default connect(null,mapDispatchToProps,null,{pure:false})(CarItem)