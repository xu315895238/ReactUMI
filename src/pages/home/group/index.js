import React, {Component} from 'react';
import styles from './group.css';
import { Tabs } from 'antd';
import { Icon } from 'antd';
import { Input } from 'antd';

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
                    <TabPane tab="群组信息" key="1">
                        <div className={styles.Whatapp}>
                            <div className={styles.GroupScreening}>
                                <span><h5>群组筛选</h5> <Input placeholder=" " /></span> 
                                <span></span>
                            </div>
                            <div className={styles.Search}>
                                <span></span>
                                <span><h5>Search:</h5><Input placeholder=" " /></span>
                            </div>
                            <div></div>
                            <ul>
                                <li><span>群组名称</span><Icon type="sort-descending"/></li>
                                <li><span>群组分类</span><Icon type="sort-descending"/></li>
                                <li><span>群组头像</span><Icon type="sort-descending"/></li>
                                <li><span>群组成员</span><Icon type="sort-descending"/></li>
                            </ul>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default analysis;