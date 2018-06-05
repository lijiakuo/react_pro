import React ,{Component} from 'react'
import './List'
import {withRouter} from 'react-router-dom'

const className='lists'
class List extends Component{
  getProps(){
    console.log(this.props);
    const {history,imageurl,wname}=this.props;
    // history.push('/detail');
    history.push({
      pathname:'detail',
      state:{
        imageurl,
        wname
      }
    })
  }
  render(){
    // console.log(this.props);
    const {imageurl,wname}=this.props;
    return (
        <dl  className={className} onClick={this.getProps.bind(this)}>
          <dt>
            <img src={imageurl} alt=""/>
          </dt>
          <dd>
            {wname}
          </dd>
        </dl>
    )
  }
}
export default withRouter(List)