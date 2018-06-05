import React,{Component} from 'react'
import './My.css'
import {connect} from 'react-redux'
import {mixins} from 'core-decorators'
//高阶组件
const HOCMine=(obt)=>{
  console.log(obt);
  return function newMine(Com){//Com基础组件
    return class extends Component{
      render(){
        return (
          <Com {...this.props} {...obt}/>
        )
      }
    }
  }
}
class My extends Component{
  render(){
    console.log(this.props);
    return (
      <div>
        mine
      </div>
    )
  }
}
const datas={
  name:'ljk',
  age:27
}
export default HOCMine(datas)(My)