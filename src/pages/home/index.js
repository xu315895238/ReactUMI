
import React, {Component} from 'react';
import axios from 'axios'
import indexlist from '../config/indexlist';
import styles from './index.css';
import EmergencyMap from '../index/indexChartconfig/EmergencyMap';
import Trendsinacquisitionvolume from '../index/indexChartconfig/Trendsinacquisitionvolume';
import Eventtype from '../index/indexChartconfig/Eventtype';
import CountUp from 'react-countup';  //数字跳动
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class extends Component{

  state={
    homelist:[],
    homelist2:[]
  }

  componentDidMount() {
    axios.get('http://169.254.213.44:7001/amch/EmergencyMap').then(res =>{
      EmergencyMap(this.refs.Emergency,res.data.latlong);
    })
    
    Trendsinacquisitionvolume(this.refs.TrendsinacquisitionvolumeMap);
    Eventtype(this.refs.EventtypeMap)

    axios.get('http://169.254.213.44:7001/home/list').then(res =>{
      this.setState({homelist:res.data.list});
    })
  
    axios.get('http://169.254.213.44:7001/home/list2').then(res =>{
      this.setState({homelist2:res.data.list});
    })
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
  
  render() {
    return (
      <div className={styles.boxList}>
        <ul>
          {
            indexlist.map((item,index)=>{
              return (
                <li key={index}>
                  <div className={styles.all}>
                      <span>
                          <h4><CountUp start={0} end={item.allnumber}/></h4>
                          <p>全部数据</p>
                      </span>
                      <b>{item.guohome}</b>
                  </div>
                  <div className={styles.today}>
                      <span>今日数据量</span><span><b>{item.todaynumber}</b></span>
                  </div>
              </li> 
              )
            })
          }
        </ul>
        <div className={styles.Fourchart}>
                <div className={styles.EmergencyMap}>
                    <h5>突发事件地图</h5>
                    <div className={styles.neiEmergency} ref='Emergency'>

                    </div>
                </div>
                <div className={styles.realtimedata}>
                    <div>
                      <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab='实时数据' disabled key="3"></TabPane>
                        <TabPane tab="突发事件" key="1">
                            <ul className={styles.Tablist}>
                            {
                              this.state.homelist.map((item,index)=>{
                                return (
                                  <li key={index}>
                                    <span className={styles.listl}>
                                      <p>{item.icons}</p>
                                      <p>{item.fonts}</p>
                                    </span>
                                    <b>{item.time}</b>
                                  </li> 
                                )
                              })
                            }
                            </ul>
                        </TabPane>
                        <TabPane tab="热点事件" key="2">
                          <ul className={styles.Tablist}>
                              {
                                this.state.homelist2.map((item,index)=>{
                                  return (
                                    <li key={index}>
                                      <div className={styles.listl}>
                                        <p>{item.icons}</p>
                                        <p>{item.fonts}</p>
                                      </div>
                                      <b>{item.time}</b>
                                    </li> 
                                  )
                                })
                              }
                              </ul>
                        </TabPane>
                      </Tabs>
                    </div>
                </div>
                <div className={styles.Trendsinacquisitionvolume}>
                    <h5>采集量趋势</h5>
                    <div className={styles.neiTrendsinacquisitionvolume} ref='TrendsinacquisitionvolumeMap'>

                    </div>
                </div>
                <div className={styles.Eventtype}>
                    <h5>事件类型</h5>
                    <div className={styles.neiEventtype} ref='EventtypeMap'>

                    </div>
                </div>
            </div>
      </div>
    )
  }
 
}
