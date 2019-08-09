import React, {Component} from 'react';
import styles from '../index.css';
import preference from './accountConfig/preference';
import Emotionalanalysis from './accountConfig/Emotionalanalysis';
import Activityhy from './accountConfig/Activity';
import Activityxx from './accountConfig/Activity';
import Headers from '../component/herser/header';

class analysis extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <div className={styles.zhxw}>
                    <Headers {...this.props}></Headers>
                </div>
                <div className={styles.Fourchart}>
                    <div className={styles.Activityhy}>
                        <h5>活跃度</h5>
                        <div className={styles.neiActivityhy} ref='ActivityMaphy'>

                        </div>
                    </div>
                    <div className={styles.Activityxx}>
                        <h5>信息发布量</h5>
                        <div className={styles.neiActivityxx} ref='ActivityMapxx'>

                        </div>
                    </div>
                    <div className={styles.preference}>
                        <h5>内容偏好</h5>
                        <div className={styles.neipreference}>
                            <div ref='preferenceMap'>

                            </div>
                        </div>
                    </div>
                    <div className={styles.Emotionalanalysis}>
                        <h5>群内人数</h5>
                        <div className={styles.neiEmotionalanalysis}>
                            <div ref='EmotionalanalysisMap'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        preference(this.refs.preferenceMap);
        Activityhy(this.refs.ActivityMaphy);
        Activityxx(this.refs.ActivityMapxx);
        Emotionalanalysis(this.refs.EmotionalanalysisMap)
      }
}

export default analysis;