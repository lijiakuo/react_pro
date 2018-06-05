import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './notify.scss'
export class Notify extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: true
    }
  }
  render() {
    let { isOpen } = this.state;
    return isOpen ? (
      <div id='notify'>
        <div>今早你吃饭了吗?</div>
      </div>
    ) : null
  }
  openNotify() {
    this.setState({
      isOpen: true
    })
  }
}
class NotifyPortals extends Component {
  constructor() {
    super()
    this.state = {
      isMounted: false,
      renderTo: document.body
    }
    this.mountNotify=this.mountNotify.bind(this )
  }
  render() {
    let { isMounted, renderTo } = this.state;
    return isMounted ? ReactDOM.createPortal(<Notify ref={(obj)=>{console.log(obj)}}/>, renderTo):''
  }
  
  componentDidMount() {
   
    let { container } = this.props;
    if (typeof container == 'string') {
      this.setState({
        renderTo: document.querySelector(container)
      })
    } else {
      console.log('container目前只支持字符串')
    }
  }
  mountNotify(){
    this.setState({
      isMounted:true
    })
  }
}
export const open = () => {
  console.log('打开notify组件')
  NotifyPortals.openNotify()
}

export default NotifyPortals