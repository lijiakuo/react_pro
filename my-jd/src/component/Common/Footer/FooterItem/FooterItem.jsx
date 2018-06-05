import React,{Component} from 'react'
import './FooterItem.css'
import PropTypes from 'prop-types'
const className='footer-item'
class FooterItem extends Component{
  render(){
    const {icon,title}=this.props;
    return (
      <div className={className}>
        <p className={icon}></p>
        {title}
      </div>
    )
  }
}
FooterItem.propTypes={
  icon:PropTypes.string,
  title:PropTypes.string
}
export default FooterItem