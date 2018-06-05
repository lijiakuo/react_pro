import React,{Component} from 'react'
import './My.css'
import {connect} from 'react-redux'
import {mixins} from 'core-decorators'
//高阶组件
const HOCMine=(Com)=>{
  return class extends Com{
    //继承返回过来的组件Com 新组件是创建的class(没有起名)组件
    render(){
      return (
        //super指向父组件Com
        super.render()
      )
    }
  }
}
//基础组件
@HOCMine
// (第二种写法decrator写法)
class My extends Component{
  render(){
    return (
      <div>
        反向继承
      </div>
    )
  }
}
// export default HOCMine(My)(第一种写法)
export default My