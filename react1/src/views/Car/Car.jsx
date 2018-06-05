import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from './state.js'
import './Car.scss'
import { mapDispatchToProps } from './dispathch.js'

import CarItem from '../../components/carItem/index.js'
class Car extends Component {
  constructor() {
    super()

    this.state = {
      toggleALL: false,
      edit: '编辑',
      account:'结算'
    }
  }
  componentDidMount() {
    console.log(mapDispatchToProps)
    const { fetchGoodsList } = this.props;
    console.log(fetchGoodsList)
    fetchGoodsList(this.props.history)
  }
  toggleFn() { 
    let { flag } = this.state;
    flag = !flag;
    this.setState({
      flag: flag
    })
    console.log(flag + "sdfsdf");
    const { toggleCheckedAll } = this.props;
    toggleCheckedAll(flag);
  }
  carEdit() {
    this.setState({
      edit:this.state.edit=='编辑'?'完成':'编辑',
      account:this.state.edit=='编辑'?'删除':'结算'
    }) 
  }
  clickFn(idx){
    console.log(this.props)
    const {testFn}=this.props;
    testFn(idx)
  }
  render() {
    const { carList, totalCost, checkAll, toggleCheckedAll } = this.props;

    return (
      <div className='Car'>
        <h1 onClick={this.clickFn.bind(this,3)}>test</h1>
        <header>购物车<span className='edit' onClick={this.carEdit.bind(this)}>{this.state.edit}</span></header>
        <div className='goods-list'>
          <ul className='go-list'>
            {
              carList.map((item, index) => {
                return (
                  <CarItem key={index} item={item}></CarItem>
                )
              })
            }
          </ul>
        </div>
        <footer className='fot'>
          <div className='p1'>

            <span onClick={this.toggleFn.bind(this)} className={(checkAll ? 'dg' : '')}></span>

            全选
          </div>
          <div className='p2'>
            <span>合计:</span><span>￥{totalCost}</span>
          </div>
          <div className='p3' onClick={this.toDelGoods.bind(this)}>{this.state.account}</div>

        </footer>
      </div>
    )
  }
  toDelGoods(){
    if(this.state.edit=='编辑'){
      return 
    }
    const {carList}=this.props;
    let checkedId=[];
    carList.forEach((item,index)=>{
      if(item.checked==1){
        checkedId.push(item.goods_id)
      }
    })
   const {delCarGoods}=this.props;
   delCarGoods(checkedId)
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Car)