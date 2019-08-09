// 列表展示组件
import React, {Component} from 'react'
import styles from './Thelistshows.css'


class Thelistshows extends Component {
    state = {
        key: 0,
        time: "2019-04-22 13:59:01",
        name: 'Bob Robson',
        data: {},
        title:'列表展示'
    };
    
    componentWillReceiveProps(props){
        this.setState({
            data:props.data
        },()=>{
            console.log(this.state.data)
        })
        
    }
    render() {
        let {data} = this.state;
        return (
            <>
               <div>
                    {this.props.children[1]}
                    <div className = {styles.header}>
                        <div className={styles.left}>
                            {data.title}
                        </div>
                        <div className={styles.right}>
                            总数：{data.children && data.children.length}
                        </div>
                    </div>
                    {this.props.children[0]}
               </div>
            </>
        );
    }
    componentDidMount(){
        this.setState({
            data:this.props.data
        })
    }

}

export default Thelistshows;