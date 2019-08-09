import React, {Component} from 'react';
import styles from './operation.css';
import { Tabs } from 'antd';
import { Icon } from 'antd';

const { TabPane } = Tabs;

class analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="card-container">
                <Tabs type="card">
                    <TabPane tab="在线账号统计" key="1">
                        <div className={styles.OnlineAccountStatistics}>
                            <ul>
                                <li><span>在线账号</span><Icon type="sort-descending"/></li>
                                <li><span>登录时间</span><Icon type="sort-descending"/></li>
                                <li><span>登录时长</span><Icon type="sort-descending"/></li>
                            </ul>
                        </div>
                    </TabPane>
                    <TabPane tab="机器人统计" key="2">
                    <div className={styles.Robotstatistics}>
                            <ul>
                                <li><span>节点名称</span><Icon type="sort-descending"/></li>
                                <li><span>节点IP地址</span><Icon type="sort-descending"/></li>
                                <li><span>机器人标识</span><Icon type="sort-descending"/></li>
                                <li><span>登录账号</span><Icon type="sort-descending"/></li>
                                <li><span>在线时间</span><Icon type="sort-descending"/></li>
                                <li><span>操作</span><Icon type="sort-descending"/></li>
                            </ul>
                            <div>
                                <h5>实时群组消息</h5>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default analysis;