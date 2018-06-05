import React,{Component} from 'react'
import {$http} from '../../utils/http.js'
import './Home.scss'
import SwiperCom from '../../components/SwiperCom'
import GoodsCom from '../../components/GoodsCom'
import Notify from '../../components/notify'
class Home extends Component{
  constructor(){
    super();
    this.state={
      listDatas:null,
      channel_id:3,
      flag:true
    }
  }
  componentDidMount(){
    window.mountNotify=this.refs.notify.mountNotify
    $http.post("/api/index/getListDatas",{channel_id:this.state.channel_id})
    .then(res=>{
      this.setState({
        listDatas:JSON.parse(res).data.data
      })
    })
    
  }
  scrolling(){
    if(this.state.channel_id>9) return
    if(!this.state.flag){
        return 
    }
    let {scroller,doc}=this.refs
    // console.log(doc)  
    let st=scroller.scrollTop
    let sw=scroller.offsetHeight;//总文档高度
    let dh=doc.offsetHeight;
    // console.log(dh-(st+sw))
    console.log(st+'')
    console.log(sw)
    console.log(dh)
    if(dh-(st+sw)<50){
      this.setState({
        flag:false
      })
      console.log(1)
      this.setState({
        channel_id:++this.state.channel_id
      })
      $http.post("/api/index/getListDatas",{channel_id:this.state.channel_id})
      .then(res=>{
        this.setState({
          listDatas:[...this.state.listDatas,...JSON.parse(res).data.data]
        })
        this.setState({
          flag:true
        })
      })
    }
  }
  toSearch(){
    console.log(1);
    let {history}=this.props;
    history.push('/index/search')
  }
  render(){
    const {listDatas}=this.state;
    // console.log(window.openNotify);
    return (
      <div className="index-home">
        <div className="header">
          <input type="text" onFocus={this.toSearch.bind(this)}/>
        </div>
        <div className="main" onScroll={this.scrolling.bind(this)} ref="scroller">
          <div ref="doc">
             <div className='ban' >
              <SwiperCom></SwiperCom>
            </div>
            <div className='dls'>
              <dl>
                <dt>
                  <img src={require('../../static/img/11.png')} alt=""/>
                </dt>
                <dd>牛奶乳品</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require('../../static/img/22.png')} alt=""/>
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require('../../static/img/33.png')} alt=""/>
                </dt>
                <dd>休闲食品</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require('../../static/img/44.png')} alt=""/>
                </dt>
                <dd>米面粮油</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require('../../static/img/11.png')} alt=""/>
                </dt>
                <dd>牛奶乳品</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require('../../static/img/22.png')} alt=""/>
                </dt>
                <dd>家乡味道</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require('../../static/img/33.png')} alt=""/>
                </dt>
                <dd>休闲食品</dd>
              </dl>
              <dl>
                <dt>
                  <img src={require('../../static/img/44.png')} alt=""/>
                </dt>
                <dd>米面粮油</dd>
              </dl>
            </div>
            <div className='lists'>
              {
                listDatas!=null&&listDatas.map((item,index)=>{
                  return <GoodsCom 
                      key={index} 
                      data={item}
                      history={this.props.history}
                      location={this.props.location}
                    ></GoodsCom>
                })
              }
            </div> 
          </div>
        </div>
         <Notify ref='notify' container={'.index-home'}> </Notify>
      </div>
    )
  }
}
export default Home