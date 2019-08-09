
import React, {Component} from 'react';
import '../../mock/list'
export default class extends Component{
  render() {
    return (<>跳转处理</>)
  }
  componentDidMount(){
    this.props.history.push('/home')
  }
 
}
