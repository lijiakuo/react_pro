import React,{Component} from 'react'
import './Home.css'
import axios from 'axios'
import List from './List'
import {connect} from 'react-redux'
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

const className='homes'

class Home extends Component{ 
  constructor(){
    super()
    this.state={
      data:['1','2','3'],
      imgHeight:176,
      slideIndex:0
    }
  }
  componentDidMount(){
      const  {dispatch}=this.props;
      axios.get('api/jsList')
      .then((res)=>{
      
        const jdList=JSON.parse(res.data.recommend);
        if(jdList.code !== '0') return ;
     
        dispatch({
          type:"GET_JDLIST",
          jdList:jdList.wareInfoList
        })
      })
      .catch(e=>{
        throw Error(e);
      })
  }
  conFn(e){
    const {history}=this.props;
    history.push('/cone')
  }
  render(){
    const {jdList,classPrefix}=this.props;
    return (
      <div className={className+' '+classPrefix}>
        <div
          onClick={this.conFn.bind(this)}
        >管理系统</div>
         {/* <WingBlank>
            <Carousel
              autoplay={trues}
              infinite
              selectedIndex={1}
              autoplayInterval={800}
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(val => (
                <a
                  key={val}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank> */}
          {
            jdList!==undefined && jdList.map((item,index)=>{
                return (
                  <List
                    key={index}
                    {...item}
                  ></List>
                )
            }) 
          }  
      </div>
    )
  }
}
Home.defaultProps={
  classPrefix:'jd'
}
  const mapStateToProps=(state,ownProps)=>{

    return {
      jdList:state.home.jdList
    }
  }
export default connect(mapStateToProps) (Home)