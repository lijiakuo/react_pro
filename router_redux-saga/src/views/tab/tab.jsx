import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHome } from '../../api/server.js'
import { getHomeFn } from '../../store/action/home.js'
import './tab.css'
const mapStateToprops = (state, props) => {
  console.log(state)
  return {
    homeList: state.home.homeList,
    endInd: state.home.endInd
  }
}
@connect(mapStateToprops)
class Tab extends Component {
  constructor() {
    super()
    this.state = {
      idx: 0
    }
  }
  lisFn(index) {
    console.log(index)
    this.setState({
      idx: index
    }, () => {
      console.log(this.state.idx)
    })

    const { startInd, endInd, dispatch } = this.props;

    getHome({ s: index, e: endInd, list: 'lists' })
      .then(res => {
        const { dispatch } = this.props;
        dispatch(getHomeFn(res.data))
      })

  }
  addFn(num) {
    if (num == 0) {
      let { idx } = this.state;
      console.log(idx + 'ljk')
      if (this.state.idx > 0) {
        this.setState({
          idx: --idx
        }, () => {
          const { startInd, endInd, dispatch } = this.props;
          getHome({ s: this.state.idx, e: endInd, list: 'lists' })
            .then(res => {
              const { dispatch } = this.props;
              dispatch(getHomeFn(res.data))
            })
        })
      } else {
        this.setState({
          idx: 0
        })
      }
    }else{
       let { idx } = this.state;
       if(this.state.idx<4){
         this.setState({
          idx: ++idx
        }, () => {
          const { startInd, endInd, dispatch } = this.props;
          getHome({ s: this.state.idx, e: endInd, list: 'lists' })
            .then(res => {
              const { dispatch } = this.props;
              dispatch(getHomeFn(res.data))
            })
        })
       }else{
         this.setState({
          idx:4
        })
       }
    }
  }
  render() {
    return (
      <div className='lis'>
        <span onClick={this.addFn.bind(this, 0)}>上一页</span>
        {
          [1, 2, 3, 4, 5].map((item, index) => {
            return (
              <span onClick={this.lisFn.bind(this, index)} key={index}>{item}</span>
            )
          })
        }
        <span onClick={this.addFn.bind(this, 1)}>下一页</span>
      </div>
    )
  }
}
export default Tab