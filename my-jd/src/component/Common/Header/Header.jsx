import React,{Component} from 'react'
import {withRouter,Redirect} from 'react-router-dom'
import './Header.css'
import {ROUTER_MAP,aa} from '../../../router/routerMap.js'
import {connect} from 'react-redux' 
@withRouter 
class Header extends Component{
  goBack(){
    // console.log(this.props);
    const {history} =this.props;
    history.push('/home')
    // history.goBack(-1);
  }
  clickFn(){
    console.log(this.props);
    const {history}=this.props;
    history.push('/login')
  }
  infoFn(){
    if(window.localStorage.loginInfo){
      const user=JSON.parse(window.localStorage.loginInfo);
      return user.userName
    }else{
      return <span onClick={this.clickFn.bind(this)}>登录</span>
    }
  }
  render(){
    const {location}=this.props;
    const {loginDatas}=this.props;
    return (
      <div className='hea'>
        {
          /\/classify/.test(location.pathname)
          ?<span
          className='icon home'
          onClick={this.goBack.bind(this)}></span>
          :''
        }
        <input type="text" placeholder='搜索'/>
        <span>{this.infoFn()}</span>   
      </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>{
  return {
    loginDatas:state.login.loginDatas
  }
}
export default connect(mapStateToProps)(Header)