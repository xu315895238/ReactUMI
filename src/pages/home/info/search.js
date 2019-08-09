import React, {Component} from 'react'
import Headers from '../component/search/search'
import Thelistshows from '../component/Thelistshows/Thelistshows'

import axios from 'axios'
import {Card, Button} from 'antd'

import styles from './search.css'
class analysis extends Component {
    state = {
        key: '0',
        noTitleKey: 'article',
        data:[],
        time: "2019-04-22 13:59:01",
        name: 'Bob Robson',
        eye:true
    };

    onTabChange = (key) => {
        this.setState({key});
    };

    render() {
        let {data, key, time, name, eye} = this.state
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
                    {data[key] && (key == 0 &&
                    <Thelistshows data={data[key]}  >
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
                        <div className = {styles.titles}>
                            <p className = {styles.left}>埃塞俄比亚坠机</p>
                            <p className = {styles.right}>
                                <Button type="primary" icon={eye? 'eye':'eye-invisible'} onClick = {()=>this.setState({eye:!this.state.eye})}>已关注</Button>
                                <Button type="primary" icon="pie-chart">分析</Button>
                                <Button type="primary" icon="apartment">关联</Button>
                            </p>
                        </div>
                    </Thelistshows> || key == 1 && 
                    <Thelistshows data={data[key]} >
                        <div>
                            {
                                data[key].children.map((item,index)=>(
                                    <div key={index} className = {styles.listflex} style = {{background:index%2 !==0? '#fff':''}}>
                                        <p className = {styles.names}><span>{name}</span></p>
                                        <p className = {styles.tit}>{item.title}</p>
                                        <p className = {styles.btn}>
                                            <Button type="primary" icon={eye? 'eye':'eye-invisible'} onClick = {()=>this.setState({eye:!this.state.eye})}>已关注</Button>
                                            <Button type="primary" icon="pie-chart">分析</Button>
                                            <Button type="primary" icon="apartment">关联</Button>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                        <div></div>
                    </Thelistshows> || key == 2 &&
                    <Thelistshows data={data[key]} >
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
                    </Thelistshows>
                    )
                    }    
                </Card>

            </div> 
            </>
        );
    }

    componentDidMount(){
        axios.get('http://169.254.213.44:7001/info/search').then((res)=>{
            this.setState({
                data:res.data.list
            })
        })
    }
}

export default analysis;