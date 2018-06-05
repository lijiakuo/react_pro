import React,{Component} from 'react'
import './Year.css'
import axios from 'axios'
import {getYear} from '../../api/server.js'
import {connect} from 'react-redux'
import {getYearActionSucc,getYearActionReq} from '../../store/action/year.js'

const mapDispatchToProps={
  getYearActionSucc,
  getYearActionReq
}
class Year extends Component{
  constructor(){
    super()
    this.state={
      yId:0,
      ySize:10,
      listArr:['序号','姓名','手机号','地址','微信','部门','职位','状态','操作']
    }
  }
  componentDidMount(){
    this.comFn(this.state.yId,this.state.ySize)
  }
  comFn(yId,ySize){
    const {getYearActionSucc,getYearActionReq}=this.props;
    getYear({
      limit:{
        yId,
        ySize
      }
    })
    .then(res=>{
      getYearActionReq()
      getYearActionSucc(res.data.data)
    })
  }
  clickFn(){
    this.setState({
      yId:++this.state.yId
    })
    this.comFn(this.state.yId,this.state.ySize)
  }
  render(){
    const {yearDatas}=this.props;
    console.log(yearDatas)
    const { listArr}=this.state;
    return (
      
      <div>
        <div >
          <ul className='list'>
            {
              listArr.map((item,index)=>{
                return (
                  <li key={index}>{item}</li>
                )
              })
            }
          </ul>
          <div className='listChild'>
            {
              yearDatas!=null && yearDatas.map((item,index)=>{
               
                return (
                  <div key={index}>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                    <span>{item.phone}</span>
                    <span>{item.addr}</span>
                    <span>{item.wx}</span>
                    <span>{item.department}</span>
                    <span>{item.dutyL}</span>
                    <span>{item.status}</span>
                    <span>{item.operation}</span>
                  </div>
                  
                )
              })
            }
          </div>
        </div>
        <span onClick={this.clickFn.bind(this)}>下一页</span>
      </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>{
  console.log(state.year.yearDatas);
  return {
     yearDatas:state.year.yearDatas
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Year)