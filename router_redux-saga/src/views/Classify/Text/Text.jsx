import React,{Component} from 'react'
import './Text.css'
class Text extends Component{
  componentDidMount(){
    console.log(this.props)
    }
  render(){
    const {match}=this.props;
    return (
      <div>Text{match.params.id}</div>
    )
  }
}
export default Text