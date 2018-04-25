import React,{Component} from 'react'
import './FootItem.css'
class FootItem extends Component{
  render(){
    const {icon,text}=this.props;
    return (
      <div className='footer-item'>
        <p className={icon}></p>
        {text}
      </div>
    )
  }
}
export default FootItem 