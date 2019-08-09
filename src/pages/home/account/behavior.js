import React, {Component} from 'react';
import styles from '../index.css';
import preference from './accountConfig/preference';
import Emotionalanalysis from './accountConfig/Emotionalanalysis';
import Update from './accountConfig/Update';
import Headers from '../component/herser/header'
import axios from 'axios';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function callback(key) {
//   console.log(key);
}

class analysis extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            homelist:[],
            homelist2:[] 
        };
    }

    render() {
        return (
            <div>
                <div className={styles.zhxw}>
                <Headers {...this.props}></Headers>
                </div>
                <div className={styles.Fourchart}>
                    <div className={styles.Update}>
                        <h5>上线情况</h5>
                        <div className={styles.neiUpdate} ref='UpdateMap'>
                           
                           
                        </div>
                    </div>
                    <div className={styles.realtimedata}>
                            <Tabs defaultActiveKey="1" onChange={callback}>
                                <TabPane tab='发言情况' disabled  key="3"></TabPane>
                                <TabPane tab="Tor" key="1">
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
                                <TabPane tab="12p" key="2">
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
                    <div className={styles.preference}>
                        <h5>内容偏好</h5>
                        <div className={styles.neipreference}>
                            <div ref='preferenceMap'>

                            </div>
                        </div>
                    </div>
                    <div className={styles.Emotionalanalysis}>
                        <h5>情感分析</h5>
                        <div className={styles.neiEmotionalanalysis}>
                            <div ref='EmotionalanalysisMap'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        preference(this.refs.preferenceMap);
        Update(this.refs.UpdateMap);
        Emotionalanalysis(this.refs.EmotionalanalysisMap)

        axios.get('http://169.254.213.44:7001/home/list').then(res =>{
          this.setState({homelist:res.data.list});
          
        })
      
        axios.get('http://169.254.213.44:7001/home/list2').then(res =>{
          this.setState({homelist2:res.data.list});
        })
      }
}

export default analysis;