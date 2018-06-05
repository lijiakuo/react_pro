import React,{Component} from 'react'
import './Footer.css'
class Footer extends Component{
  render(){
    const {children}=this.props;
    return (
      <div className='fot'>
        {children}
      </div>
    )
  }
}
export default Footer