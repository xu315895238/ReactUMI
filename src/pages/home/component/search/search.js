import React, {Component} from 'react'
import styles from './search.css'
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

class searchs extends Component {
    state = { 
        flag:false
    }
    render() {
        let {flag} =this.state
        return (
            <div className = {styles.back}>
                <Header className = {styles.box}>
                    <span className = {styles.title} onClick={()=>this.setState({flag:!flag})}>
                        <Icon type="down" />
                    </span>
                   
                    <input type="text" className = {styles.inputs}/>
                    <div className = {styles.right}>
                            <Button className = {styles.gengduo}>搜索</Button>
                            <Button className = {styles.hrefs} onClick ={()=>this.routerPush('/home/monito/management')} >监测管理</Button>
                    </div>
                </Header>
                <div className={styles.disp} style={flag ? {height:'110px',display:'block'}:{}}>
                    <p className={styles.disp1}>通道:</p>
                    <p className={styles.disp2}>标签:</p>
                    <p className={styles.disp3}><input type="text"/></p>
                </div>
            </div>
        );
    }
    // 路由跳转
    routerPush(url) {
        this.props.history.push(url)
    }
}

export default searchs;