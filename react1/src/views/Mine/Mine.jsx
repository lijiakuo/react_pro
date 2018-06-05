import React, { Component } from 'react'
import './Mine.scss'
import { connect } from 'react-redux'
import { mapStateToProps } from './state.js'

class Mine extends Component {
  render() {
    let { userInfo } = this.props;
    console.log(userInfo)
    // console.log(this.props.userInfo.length)
    return (
      <div className='Mine'>
        <header>
          <p>
            <span className="sz set" onClick={this.toSetting.bind(this)}></span>
            我的717商城
          </p>
        </header>
        <section className='sec'>
          <dl>
            <dt>
              <img src={require('../../static/img/1.jpg')} alt="" />
            </dt>
            <dd>
               <p>{userInfo.name}</p>
              <p>{userInfo.nockName}</p> 
            </dd>
          </dl>
          <ul className='mine-list'>
            <li onClick={this.deliveFn.bind(this)}>
              <span className="mine"></span>
              <p><span>账户管理</span><small className='jt'></small></p>
            </li>
            <li>
              <span className="mine"></span>
              <p><span>地址管理</span><small className='jt'></small></p>
            </li>
            <li>
              <span className="mine"></span>
              <p><span>联系客服</span><small className='jt'></small></p>
            </li>
          </ul>
        </section>
      </div>
    )
  }
  deliveFn(){
    this.props.history.push('/delivery')
  }
  toSetting() {
    const { history } = this.props;
    history.push('/setting')
  }

}
export default connect(mapStateToProps)(Mine)