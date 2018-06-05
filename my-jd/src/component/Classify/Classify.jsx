import React,{Component} from 'react'
import './Classify.css'
import {Link,Route,BrowserRouter as Router, withRouter} from 'react-router-dom'
import {ROUTER_MAP,aa} from '../../router/routerMap.js'


const Test=({match})=>{
  return (
    <div>test{match.params.id}</div>
  )
}
@withRouter 
class Classify extends Component{
  render(){
    const {match}=this.props;
    return (
        <Router>
          <div className='list'>
             <div className='list-left'>
              <Link to={`${match.url}/a`}>热门推荐</Link>
              <Link to={`${match.url}/b`}>京东超市</Link>
              <Link to={`${match.url}/c`}>国际名牌</Link>
              <Link to={`${match.url}/d`}>奢侈品</Link>
            </div>
            <div className='list-right'>
              <Route path={`${match.url}/:id`} component={Test}></Route>
            </div>
          </div>
         
       
        </Router>
    )
  }
}
export default Classify