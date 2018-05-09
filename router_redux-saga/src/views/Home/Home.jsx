import React,{Component} from 'react'
import './Home.css'
import {$http} from '../../utils/http.js'
import {mapDispatchToProps} from './dispathch.js'
import {mapStateToProps} from './state.js'
 
import {connect} from 'react-redux'
class Home extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    console.log(this.props)
    const {fetchList} = this.props;
    fetchList() 
  }
  render(){
    const {homeList} = this.props;
    return (
      <div>
       {
         homeList!=null&&homeList.map((item,index)=>{
           return (
             <div key={index}>{item.name}</div>
           )
         })
       }
      </div>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)