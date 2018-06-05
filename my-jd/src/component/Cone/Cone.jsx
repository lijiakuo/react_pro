import React,{Component} from 'react'
import './Cone.css'
import {getCone} from '../../api/server.js'
import {connect} from 'react-redux'
import * as action from '../../store/action/cone.js'
import {bindActionCreators}  from 'redux'
const mapStateToProps=(state,ownProps)=>{
  return {

  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    coneActions:bindActionCreators(action,dispatch)
  }
}
@connect (mapStateToProps,mapDispatchToProps)
class Cone extends Component{
  constructor(){
    super()
    this.state={
      pageIndex:0,
      pageSize:10
    }
  }
  componentDidMount(){
    this.getConFn();
  }
  getConFn(pageIndex=0,pageSize=10){
    return getCone({
      limit:{
        pageIndex,
        pageSize
      },
      nonce:new Date().getTime()
    })
    .then(res=>{
      console.log(res)
      const {coneActions}=this.props;
      coneActions.getConeAction(res.data)
      return res
    })
    .catch(e=>{
      throw Error(e);
    })
  }
  nextPage(){
    this.setState({
      pageIndex:++this.state.pageIndex
    })
    this.getConFn(this.state.pageIndex,this.state.pageSize)
  }
  render(){
    return (
      <div>
        <div onClick={this.nextPage.bind(this)}>下一页</div>
      </div>
    )
  } 
}
export default Cone