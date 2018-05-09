import React,{Component} from 'react'
import './Footer.css'
class Footer extends Component{
  render(){
    const {children}=this.props;
    return (
      <div className="footer">
        {children}
      </div>
    )
  }
}
export default Footer 