import React,{Component} from 'react'
import './Detail.css'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import {connect} from 'react-redux'
import axios from 'axios'
import {getComList} from '../../store/action/detail.js'
function renderTabBar(props) {
  return (<Sticky>
    {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
  </Sticky>);
}
const tabs = [
  { title: '商品' },
  { title: '详情' },
  { title: '评价' },
];
const className='detail'
class Detail extends Component{
componentDidMount(){
  axios.get('api/jsComList')
  .then(res=>{
    const {dispatch}=this.props;
    const data=res.data.wareDetailComment
    if(data.code!=0) return 
    dispatch(getComList(data))

  })
}
 render(){
    const {imageurl,wname}=this.props.location.state;
 
   const {detailComList}=this.props;

    return  <div className={className}>
    <WhiteSpace />
    <StickyContainer>
      <Tabs tabs={tabs}
        initalPage={'t2'}
        renderTabBar={renderTabBar}
      >
        <div className="sp" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' }}>
          <div>
            <img src={imageurl} alt=""/>
            <p>{wname}</p>
          </div>
          <div>
            {
              detailComList!=null&&detailComList.commentInfoList.map((item,index)=>{
                return <div key={index}>
                  {item.commentData}
                  <div className='imgs'>
                    {
                      item.pictureInfoList.map((itm,inx)=>{
                        return (
                          <img key={inx} src={itm.largePicURL} alt=""/>
                        )
                      })
                    }
                  </div>
                </div>
              })
            }
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  height: 'auto', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  height: 'auto', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
    </StickyContainer>
    <WhiteSpace />
  </div>
 }
}

const mapStateToProps=(state,ownProps)=>{
  return {
    detailComList:state.detail.detailComList
  }
}
export default connect(mapStateToProps)(Detail)