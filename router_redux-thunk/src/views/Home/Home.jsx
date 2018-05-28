import React,{Component} from 'react'
import './Home.css'
import {getHome} from '../../api/server.js'
import simpleHoc from '../tabFn/simple-hoc.js'
import tab from '../tab'
import {connect} from 'react-redux'
import {getHomeFn} from  '../../store/action/home.js'
class Home extends Component{
  constructor(){
    super();
    this.state={
      homeList:null
    }
  }
  render(){ 
    
    return (
      <div>
       
      </div>
    )
  }
}

export default Home