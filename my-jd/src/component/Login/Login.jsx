import React,{Component} from 'react'
import './Login.css'
import {getLogin} from '../../api/server.js'
import * as loginAction from '../../store/action/login.js'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class Login extends Component{
  constructor(){
    super();
    this.state={
      name:'',
      pwd:''
    }
  }
  userFn(e){
    this.setState({
      name:e.target.value
    })
  }
  pwdFn(e){
     this.setState({
      pwd:e.target.value
    })
  }
  loginFn(e){
    console.log('23')
     getLogin()
     .then(res=>{
       if(res.data.code!=0) return 
       const {history,loginActions}=this.props;
       loginActions.getLoginSucc(res.data)
      //  console.log()
       window.localStorage.loginInfo=JSON.stringify(res.data.data)
       history.push('/')
     })
  }
  render(){
    const {name,pwd}=this.state;
    return (
      <div className='login'>
        <p>用户名:
          <input 
                type="text"
                value={name}
                onChange={this.userFn.bind(this)}
          />
        </p>
        <p>密码:
            <input 
              type="text"
              value={pwd}
              onChange={this.pwdFn.bind(this)}
            /></p>
        <p>
            <button
              onClick={this.loginFn.bind(this)}  
            >登录</button></p>

      </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>{
  console.log(state)
  return {
    
  }
}
const mapDispathchToProps=(dispatch)=>{
  return {
    loginActions:bindActionCreators(loginAction,dispatch)//loginAction所以action里的信息,dispatch
  }
}
export default connect(mapStateToProps,mapDispathchToProps)(Login)