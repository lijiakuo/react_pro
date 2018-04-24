import React,{Component} from 'react'
import './Home.css'
import {getHome} from '../../api/server.js'
import simpleHoc from '../tabFn/simple-hoc.js'
import tab from '../tab'
import {connect} from 'react-redux'
import {getHomeFn} from  '../../store/action/home.js'
const TabFn=simpleHoc(tab)
const mapStateToprops=(state,props)=>{
  console.log(state)
  return {
    homeList:state.home.homeList,
    startInd:state.home.startInd,
    endInd:state.home.endInd
  }
}
@connect(mapStateToprops)

class Home extends Component{
  constructor(){
    super();
    this.state={
      homeList:null
    }
  }
  componentDidMount() {
      console.log(this.props)
      const {startInd,endInd}=this.props;
      getHome({s: startInd, e: endInd, list: 'lists' })
        .then(res => {
          const {dispatch}=this.props;
          dispatch(getHomeFn(res.data))
        })
    }
  render(){
    const {homeList,startInd,endInd}=this.props;
    console.log(homeList)
    return (
      <div>
        <div className='liCon'>
          {
            homeList!=null&&homeList.map((item,index)=>{
              return (
                <div key={index}>
                  <span>{item.id}</span>
                   <span>{item.num}</span>
                    <span>{item.name}</span>
                     <span>{item.age}</span>
                      <span>{item.opert}</span>
                </div>
              )
            })
          }
        </div>
        <TabFn startInd={startInd} endInd={endInd}></TabFn>
        </div>
    )
  }
}

export default Home