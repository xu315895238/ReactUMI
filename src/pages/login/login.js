import styles from './login.css'

import { Layout } from 'antd';
import React, {Component} from 'react';
const { Header } = Layout;

export default class extends Component{
  render() {
    return (
        <Layout className = {styles.box}>
          <Header className = {styles.fixeds}>login</Header>
          <button onClick = {()=>this.login()}>登录</button>
        </Layout>
    )
  }
  login(){
    window.sessionStorage.setItem('login', '123456')
    console.log(this.props.history.push('/'))
  }
  componentDidMount(){

  }
 
}