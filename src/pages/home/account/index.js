import React, {Component} from 'react';
import styles from './accountindex.css';
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
                    <TabPane tab="Whatapp监控账户信息" key="1">
                        <div className={styles.Whatapp}>
                            <ul>
                                <li><span>账户</span><Icon type="sort-descending"/></li>
                                <li><span>最近登录时间</span><Icon type="sort-descending"/></li>
                                <li><span>登录状态</span><Icon type="sort-descending"/></li>
                                <li><span>群组列表</span><Icon type="sort-descending"/></li>
                            </ul>
                        </div>
                    </TabPane>
                    <TabPane tab="用户信息" key="2">
                    <div className={styles.Whatapp}>
                            <ul>
                                <li><span>群组内用户</span><Icon type="sort-descending"/></li>
                                <li><span>头像</span><Icon type="sort-descending"/></li>
                                <li><span>最近发言时间</span><Icon type="sort-descending"/></li>
                                <li><span>用户加入的群组</span><Icon type="sort-descending"/></li>
                            </ul>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default analysis;