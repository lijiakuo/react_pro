import React,{Component} from 'react'
import './Dialog.scss'
class Dialog extends Component{
  constructor(){
    super()
  }
  render(){
    console.log(this.props);
    // const {show}=this.state;
   
    
    return (
      <div className="Dialog" >
        <div className="Dialog-box">
          <div className="Dialog-top">
            <p>确认要退出登录吗?</p>
            <span onClick={this.toTrue.bind(this)} >确认</span>
          </div>
          <div className="Dialog-bot">
            <span  onClick={this.toFalse.bind(this)}>取消</span>
          </div>
        </div>
      </div>
    )
  }
  toTrue(){
    const {callback}=this.props;
    callback()
  }
  toFalse(){
     const {close}=this.props;
    close()
    
  }
}
export default Dialog