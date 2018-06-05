import React, { Component } from 'react'
import './Header.scss'
class Header extends Component {
  goBack() {
    let {history}=this.props
    history.go(-1)
   }
  render() {
    return (
      <div className='headerCom'>
          <span 
            className='jt' 
            onClick={this.goBack.bind(this)}>
          </span>
          <small>{this.props.children}</small>
      </div>
    )

  }
}
export default Header