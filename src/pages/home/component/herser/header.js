import React, {Component} from 'react'
import styles from './header.css'
import {Icon, Layout, Menu, Dropdown, Button, Divider} from 'antd'

const {Header} = Layout

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

class headers extends Component {
    state = { }
    render() {
        return (
            <div>
                <Header className = {styles.box}>
                   <span className = {styles.title}>
                        <Icon type="bank" />
                        <span>埃塞尔比亚坠机</span>
                    </span>
                    <Dropdown  overlay={menu} trigger={['click']} className = {styles.buttons} >
                        <Button>
                            全部账号 
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                    <Dropdown  overlay={menu} trigger={['click']} className = {styles.buttons}>
                        <Button >
                            全部群组
                            <Icon type="down" />
                        </Button>
                    </Dropdown>
                   <div className = {styles.right}>
                        <Dropdown  overlay={menu} trigger={['click']} className = {styles.buttons}>
                            <Button className = {styles.gengduo}>
                                更多
                                <Icon type="down" />
                            </Button>
                        </Dropdown>
                        <Button className = {styles.hrefs} onClick ={()=>this.routerPush('/home/monito/management')} >监测管理</Button>
                   </div>
                </Header>
            </div>
        );
    }
    // 路由跳转
    routerPush(url) {
        this.props.history.push(url)
    }
}

export default headers;