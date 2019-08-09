import React, {Component} from 'react';
import Headers from '../component/herser/header';
import styles from './relationship.css';
import { Input } from 'antd';
import {Button} from 'antd';
import Forcedirected from './EntityConfig/Forcedirected';

class analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className={styles.box}>
                <Headers {...this.props}></Headers>
                <div className={styles.associationanalysis}>
                    <div className={styles.Searchdropdown}>
                        <div className={styles.Search}>
                            
                        </div>
                        <div className={styles.dropdown}>
                            <Input placeholder="请输入实体词" />
                            <Button type="primary" className={styles.Searchbtn}>搜索实体</Button>
                        </div>
                    </div>
                    <div className={styles.Forcedirected}>
                       <div className={styles.Forcedirecteds} ref='ForcedirectedtreeMap'></div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        Forcedirected(this.refs.ForcedirectedtreeMap);
        // Trendsinacquisitionvolume(this.refs.TrendsinacquisitionvolumeMap);
        // Emotionalanalysis(this.refs.EmotionalanalysisMap)
      }
}

export default analysis;




