import React, { Component } from 'react'
import './Classify.css'
import { connect } from 'react-redux'
import { getClassifyFn } from '../../store/action/classify.js'
import { getClassify } from '../../api/server.js'
import {getHomeFn} from '../../store/action/home.js'
import BScroll from 'better-scroll'
import {$http} from '../../utils/http.js'
class Classify extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const {dispatch} = this.props;
    getClassify().then(res=>{
      console.log(res)
      dispatch(getClassifyFn(res.data))     
    })
  //  const {dispatch} = this.props;
  //    
  }

  render() {
    return (
      <div className='classify'>
      </div>
    )
  }
}
const mapStateToprops=((state,props)=>{
  return {
   
  }
})

export default connect(mapStateToprops)(Classify)