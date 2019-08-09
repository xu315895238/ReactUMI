import React, {Component} from 'react'
import Herders from '../component/search/search'

import styles from './manage.css'
class analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <>
               <Herders></Herders>
               <div className ={styles.box}>
                    <div>
                        <header className={styles.header}>
                            <span className={styles.left}>监测主题</span>
                            <span className={styles.right}>状态</span>
                        </header>
                    </div>
                    <div>  
                        <header className={styles.header}>
                            <span className={styles.left}>监测主题</span>
                            <span className={styles.right}>状态</span>
                        </header>
                    </div>
               </div>
            </>
        );
    }
}

export default analysis;