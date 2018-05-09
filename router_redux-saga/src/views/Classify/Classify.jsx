import React, { Component } from 'react'
import './Classify.css'
import Text from './Text/index.js'
import {BrowserRouter as Router,NavLink,Route,Switch,Redirect} from 'react-router-dom'
const Test = ({match})=>{
    return (
      <div>test{match.params.id}</div>
    )
}
class Classify extends Component {
  constructor() {
    super();
    this.state={
      arr:['詹姆斯','韦德','麦迪','姚明','阿尔德里奇'],
      arrs:['欧文','科比','杜兰特','邓肯','霍华德']
    }
  }
  componentDidMount() {
  
  }

  render() {
    const {match}=this.props;
    return (
      <div className='classify'>
          <div className='left'>
            {
              this.state.arr.map((item,index)=>{
                return (
                  <NavLink  key={index} to={`${match.url}/${index}`}>{item}</NavLink>
                )
              })
            }
          </div>
          <div className='right'>
            <Switch>
              <Route  path={`${match.url}/:id`} component={Text}></Route>
              <Redirect from='/index/classify' to='/index/classify/0'></Redirect> 
          </Switch>
            
          </div>
      </div>
    )
  }
}

export default Classify