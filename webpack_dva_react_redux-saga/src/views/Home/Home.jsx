import React,{Component} from 'react'
import './Home.css'
import {connect} from 'dva'
import axios from 'axios'
class Home extends Component{
  constructor(){
    super();
    this.state={
      homeList:null
    }
  }
  componentDidMount(){
    // console.log(this.props);
    // console.log(axios);
    // axios.get('/api/jsList')
    // .then((res)=>{
    //   console.log(res.data)
    //   this.props.dispatch({type:'dataCans/getCans',payload:res.data})
    // })
    this.props.dispatch({type:'dataCans/getCans'})
    // this.props.dispatch({type:'dataCans/getCans'})
  }
  render(){
    return (
      <div>
        <p>李佳阔{this.props.count}</p>
        <button 
          onClick={()=>{this.props.dispatch({type:'count/add'})}}>
          点击
        </button>
        <button 
          onClick={()=>{this.props.dispatch({type:'count/add',playload:3})}}>
          点急
        </button>
        <ul>
          {
            this.props.dataCans.map((item,index)=>{
              return (
                <li key={index}>{item}</li>
              )  
            })
          }
        </ul>
      </div>
    )
  }
}
const mapToStateProps = (state,props)=>{
  console.log(state)
  return {
    count:state.count,
    dataCans:state.dataCans
  }
}
export default connect(mapToStateProps)(Home)