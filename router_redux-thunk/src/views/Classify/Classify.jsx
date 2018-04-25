import React, { Component } from 'react'
import './Classify.css'
import { connect } from 'react-redux'
import { getClassifyFn } from '../../store/action/classify.js'
import { getClassify } from '../../api/server.js'
import BScroll from 'better-scroll'
class Classify extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
   
  }

  render() {
    return (
      <div className='classify'>
      </div>
    )
  }
}

export default Classify