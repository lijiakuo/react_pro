import React,{Component} from 'react'
import './My.css'
import {connect} from 'react-redux'
import {mixins} from 'core-decorators'
import PrureRenderMixin from 'react-addons-pure-render-mixin'
class My extends Component{
  constructor(){
    super();
    this.state={
      name:'ljk'
    }
    this.shouldComponentUpdate=PrureRenderMixin.shouldComponentUpdate.bind(this);
    this.handleClick=this.handleClick.bind(this)
  }
  componentDidMount(){
    this.setState({
      name:'ljk1'
    })
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(nextState)
  //   const {name}=this.state
  //   if(name===nextState.name){
  //     return false
  //   }else{
  //     return true
  //   }
  // }
  componentWillUpdate(){
    console.log('要触发更新了')
  }
  handleClick(){

  }
  render(){
    return (
      <div onClick={this.handleClick}>
        mine
      </div>
    )
  }
}

export default My