import React,{Component} from 'react'
import './shopCar.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {getShopDatas} from '../../api/server.js'
import {addAction,jAction} from '../../store/action/shopCar.js'
// 第一种方法 import {getShopc,resShopC} from '../../store/action/shopCar.js'
import {getShopc} from '../../store/action/shopCar.js'
class ShopCar extends Component{
  constructor(){
    super()
    this.state={
      valueArr:[],
      tatol:0
    }
  }
  componentDidMount(){
    getShopDatas()
    .then(res=>{
      this.shopCom(res)
    })
  }
  shopCom(res){
    const {dispatch}=this.props;
    const datas=res.data[0]
    // dispatch(resShopC());// 第一种方法
    dispatch( getShopc(datas));
  }
  changeNum(id,type){
    console.log(type)
    console.log(id)//每一项对应的id
    axios.post('/api/shopc_num',{
      id,
      type
    })
    .then(res=>{
      this.shopCom(res)
    })
  }
  handleChange(e){
    console.log(e.target.value);
    const {value,checked}=e.target;
    let {valueArr}=this.state;
    if(checked&&this.state.valueArr.indexOf(value)===-1){
      valueArr.push(value);
    }else{
      valueArr=valueArr.filter(x=>x!=value)
    }
    this.setState({
      valueArr
    })
  }
  checkeAll(e){
    const {checked}=e.target
    const {shopDatas}=this.props;
    let {valueArr,tatol}=this.state;
    const newArr=[];
    console.log(shopDatas.active_item)
    if(checked){
      shopDatas.active_item.filter(x=>newArr.push(x.name));
    }
    
    for(let [index,item] of shopDatas.active_item.entries()){
      console.log(item);
    }
   
    this.setState({
      valueArr:newArr
    })
  }
  render(){
    const {shopDatas}=this.props;
    const {valueArr,tatol}=this.state;
    return (
      <div className='shop-car'>
      {
        shopDatas===null
        ?''
        :
        <div className='shop-car'>
          <div className='dls'>
            {
                shopDatas.active_item.map((item,index)=>{
                return (
                  <div className='dl' key={index}>
                    <input 
                      type="checkbox" 
                      checked={this.state.valueArr.indexOf(item.name)!==-1} value={item.name} onChange={this.handleChange.bind(this)}/>
                    <div className='dl-left'>
                      <img src={item.images.cart} alt=""/>
                    </div>
                    <div className='dl-right'>
                      <p>{item.name}</p>
                      <small>￥{item.price/100}</small>
                      <div className='btn'>
                        <button onClick={this.changeNum.bind(this,item.id,1)}>+</button>
                        <span>{item.quantity}</span>
                        <button onClick={this.changeNum.bind(this,item.id,-1)}>-</button>
                    </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className='mark'>
              <div className='q-left'>
                <input 
                  type='checkbox' 
                  className='chk'
                  checked={valueArr.length===shopDatas.active_item.length}
                  value={shopDatas.active_item.length}
                  onChange={this.checkeAll.bind(this)}
                  />全选
              </div>
              <div className='q-right'>
                总价：<span>{tatol}</span>
              </div>
            </div>
        </div>
      }
      </div>
    )
  }
}
const mapStateToprops=((state,props)=>{
  return {
    shopDatas:state.shopcar.shopDatas
  }
})
export default connect(mapStateToprops)(ShopCar)