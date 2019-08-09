import styles from './home.css'
import routerList from '../config/routerList' // 路由列表
import { Layout, Menu, Icon, Dropdown, Input} from 'antd';
import React, {Component} from 'react';
import { formatMessage } from 'umi/locale'; // 中英文切换
import { Instagram } from 'react-content-loader'


import ZHsh from '../../component/ZH/index'

const { Header, Sider, Content} = Layout;
const {SubMenu} = Menu;
const {Search} = Input;


export default class extends Component{
  constructor(props){
    super(props)
    // 判断是否登录
    let login = window.sessionStorage.getItem('login')
    if(!login){
        props.history.push('/login/login')
    }
    this.widths=200;
  }
  state = {
    
    exit:(
      <Menu>
        <Menu.Item key="0" onClick={()=>this.exitFn()}>
            <Icon type="logout" />
            退出登录
        </Menu.Item>
      </Menu>
    ),
    collapsed: false,
    widths: 200,
    flag: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
        <>
        {this.state.flag && <Instagram animate={false} ref = 'gujia'></Instagram>}
        <Layout className = {styles.box}>
          {/* 头部 */}
          
          <Header className = {styles.fixeds}>
            <div className = {styles.topleft}>
                {this.state.collapsed? "" : <span >突发预警系统 </span>}
                <Icon
                  className={styles.trigger}
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
            </div>
            
            <ul className = {styles.topright}>

              {/* 中英文切换 */}
              <li className = {styles.shift}>
                <ZHsh></ZHsh>
              </li>
              {/* 用户 */}
              <li className = {styles.user}>
                <Dropdown overlay={this.state.exit} trigger={['click']}>
                  <a className="ant-dropdown-link" href="#">
                    <span>这是头像</span>
                    <span>
                      {formatMessage({id:'navbar.lang'})}
                    </span>
                  </a>
                </Dropdown>
              </li>
              <li className={styles.inform}>
                <Icon type="sound" />
              </li>
              {/* 搜索框 */}
              <li className = {styles.search}>
                <Search
                  className = {styles.input}
                  placeholder="input search text"
                  onFocus = {()=>this.setState({widths:250})}
                  onBlur = {()=>this.setState({widths:200})}
                  onSearch={value => console.log(value)}
                  style={{width:this.state.widths}}
                />
              </li>
            </ul>
          </Header>

          <Layout className = {styles.scrolly}>

            {/* 左侧路由列表 */}
            <Sider  trigger={null} collapsible collapsed={this.state.collapsed} >
              <Menu theme="dark" mode="vertical" >
                {routerList.map(item =>(
                  !item.children ? 
                  <Menu.Item key={item.path} onClick= {()=> this.routerPush(item.path)}>
                    <Icon type={item.icon} />
                    <span >
                      {formatMessage({id:item.title})}
                    </span>
                  </Menu.Item> :
                  <SubMenu 
                    key={item.icon}
                    title={<span>
                            <Icon type={item.icon} />
                            <span>{formatMessage({id:item.title})}</span>
                          </span>
                    }>
                    {item.children.map(sub => <Menu.Item key={sub.path} 
                            onClick= {()=> this.routerPush(sub.path)}>
                            <span >{formatMessage({id:sub.title})}</span>
                          </Menu.Item>)}
                  </SubMenu>)
                )}
              </Menu>
            </Sider>

            {/* 主体内容 */}
            <Content className={styles.contents}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
        </>
    )
  }

  // 路由跳转
  routerPush(url) {
    this.props.history.push(url)
  }
  exitFn(){
    window.sessionStorage.removeItem('login')
    this.props.history.push('/login/login')
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        flag:false
      })
    },1000)
    
  }
  
}