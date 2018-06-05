import React,{Component} from 'react'
import './Setting.scss'
import {loginOut} from '../../utils/getCookie.js'
import Dialog from './Dialog/index.js'
class Setting extends Component{
  constructor(){
    super()
    this.state={
      setFlag:false
    }
    this.close=this.close.bind(this);
    this.callback=this.callback.bind(this);
  }
  render(){
    return (
      <div className="Setting">
        <header>
          <span onClick={this.toRouter.bind(this)} className='jt'> </span>设置
        </header>
        <ul>
          <li>我的头像</li>
          <li>用户名</li>
          <li>我的二维码</li>
          <li>我绑定的手机号</li>
        </ul>
        <p onClick={this.toLoginOut.bind(this)}>退出登录</p>
        {
          this.state.setFlag 
          && 
          <Dialog 
            setFlag={this.state.setFlag} 
            history={this.props.history}
            close={this.close}
            callback={this.callback}
          >
          </Dialog>
        }
      </div>
    )
  }
  toRouter(){
    this.props.history.push('/index/mine')
  }
  close(){
     console.log(11111111)
      this.setState({
        setFlag:false
      })
  }
  callback(){
    console.log(1)
    loginOut();
    this.props.history.push('/index/home')
  }
  toLoginOut(){
    this.setState({
      setFlag:!this.state.setFlag
    })
  }
}
export default Setting