import React, {Component} from 'react'
import Headers from '../component/herser/header'
import Thelistshows from '../component/Thelistshows/Thelistshows'
import Analycomponent from './analycomponent'

import axios from 'axios'
import {Card} from 'antd'

import styles from './analysis.css'
class analysis extends Component {
    state = {
        key: '0',
        noTitleKey: 'article',
        data:[],
        time: "2019-04-22 13:59:01",
        name: 'Bob Robson'
    };

    onTabChange = (key) => {
        this.setState({key});
    };

    render() {
        let {data, key, time, name} = this.state
        return (
            <>
                <Headers {...this.props}></Headers>
                <div>
                    <Card
                        style={{ width: '100%' ,background:'#EDF0F4'}}
                        tabList={data}
                        activeTabKey={this.state.key}
                        onTabChange={ind => {
                            this.onTabChange(ind);
                        }}>
                        {data[key] && key == 0 &&
                        <Thelistshows data={data[key]}>
                            <div>
                                {
                                    data[key].children.map((item,index)=>(
                                        <div key={index} className = {styles.list} style = {{background:index%2 !==0? '#fff':''}}>
                                            <h3 className = {styles.title}>{item.title}</h3>
                                            <p>
                                                <span> 时间：{time} </span>
                                                <span className = {styles.name}> 来源: {name} </span>
                                                <span className = {styles.yuan} > 原 </span>
                                            </p>
                                            <p>
                                                <span> # USA </span>
                                                <span> # 涉枪 </span>
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div></div>
                        </Thelistshows> ||
                         key == 1 && <Analycomponent data={data[key]}></Analycomponent>
                        }    
                    </Card>

                </div> 
            </>
        );
    }

    componentDidMount(){
        axios.get('http://169.254.213.44:7001/analysis').then((res)=>{
            console.log(res)
            this.setState({
                data:res.data.list
            })
        })
    }
}

export default analysis;