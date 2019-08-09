import React, {Component} from 'react';
import styles from './analycomponent.css';
import { Icon } from 'antd';

class index extends Component {
    state={
        active: 0
    }
    render() {
        let {active} =this.state;
        
        return (
            <div className = {styles.box}>
                <div className = {styles.top}>
                    <div className={styles.left}>
                        <div className={styles.leftnav}><h5>情绪增量</h5></div>
                        <div className={styles.portletbody}>
                           <div>
                               <canvas ref='canvas1' width='85' height='85'></canvas>
                                <span><p>一般</p><Icon type="right-square" /></span>
                            </div>
                           <div>
                               <canvas ref='canvas2' width='85' height='85'></canvas>
                                <span><p>正面</p><Icon type="right-square" /></span>
                            </div>
                           <div>
                               <canvas ref='canvas3' width='85' height='85'></canvas>
                                <span><p>负面</p><Icon type="right-square" /></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightnav}><h5>情绪趋势</h5><p>近一周观点趋势...</p></div>
                        <div className={styles.zhuzhuangtu}>
                            <div>
                                <canvas ref="canvaszhu1" width="120" height="100"></canvas>
                                <span><p>一般</p><Icon type="right-square" /></span>
                            </div>
                           <div>
                                <canvas ref="canvaszhu2" width="120" height="100"></canvas>
                                <span><p>正面</p><Icon type="right-square" /></span>
                            </div>
                            <div>
                                <canvas id="can1" width="150" height="100"></canvas>
                                <span><p>负面</p><Icon type="right-square" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles.bottom}>
                    <header className = {styles.header}>
                        <div className={styles.left}>
                            <b>主要观点</b>
                        </div>
                        <div className={styles.right}>
                            <span className = {active == 0 ? styles.active :''} onClick = {()=>this.activeFn(0)}>Telegram</span>
                            <span className = {active == 1 ? styles.active :''} onClick = {()=>this.activeFn(1)}>WhatsAPP</span>
                        </div>
                    </header>
                    {/* 留言列表 */}
                    <div className = {styles.main}>
                        <div className={styles.left}>
                            456
                        </div>
                        <div className={styles.right}>
                            <p><span className = { styles.name+' '+styles.left}>name</span> <span className = {styles.right}>26be,10:30AM</span></p>
                            <p>sdhuahduahsdihasiudbajksdbasdbiausbdakjsbdkajbsd</p>
                            <p><span className = {styles.left} style = {{color:'#69D775'}}>APPROVED</span> <span className = {styles.right+" "+styles.displaynone}>QUICK EDIT VIEW DELETE</span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    activeFn(ind){
        console.log(123)
        this.setState({
            active:ind
        })
    }
    //圈儿
    canvas(dom, domcolor, num){
        var cant = dom.getContext("2d"); //先定义一个画布
        cant.translate(40, 40);
        var deg = Math.PI / 180; 
        var zong = 0   
        function fn(str, color, end, r) {
            var index = str
            arc();
            
            function arc() {
                index+=2
                if(zong<=num){
                    zong+=1
                }
                if (index < end-90) {
                    window.requestAnimationFrame(arc)
                }
                cant.beginPath();
                cant.clearRect(-20,-20,40,40);
                cant.fillStyle = color;
                cant.moveTo(0, 0)
                cant.arc(0, 0, r, str * deg, index * deg);
                cant.fill();
                
                var text=Math.floor(zong/360*100)
                cant.fillStyle = "#000";
                cant.font="16px border";
                cant.textAlign="center";
                cant.textBaseline="middle";
                cant.fillText(text+"%",0,0);
            }
        }
        // fn(-180, '#ccc', 360, 38);
        fn(-90, domcolor, num, 38);
        fn(-90, "#fff", 360 ,34);
    }

    //柱状图
    canvaszhu(domm,colors,arr){
        var ocanvas = domm.getContext("2d");
        
        //定义一个矩形的函数方法
        function rect(X,Y,width,height,color) {
            ocanvas.beginPath();
            ocanvas.fillStyle=color; //柱状图的颜色
            ocanvas.rect(X,Y,width,height,color);
            ocanvas.fill();
            ocanvas.closePath()
        }
     
        //定义一个方法  定义矩形的具体变量以及高引入数组
        function wenrect() {
            //i 是矩形条数
            for(var i=0;i<18;i++){
                var width=5;   //矩形的宽度
                var height=arr[i];   //矩形的高度
                var X=5+i*6;
                var Y=80-height;
                var color=colors;
                rect(X,Y,width,height,color);
            }
        }
        wenrect();    
    }

    //折线图
    canvaszhe(){
        var can1 = document.getElementById("can1");
			var ctx = can1.getContext("2d");
            var nums = [0,23,0,74,18,4,20,20,0];
            
			//画出折线
			function drawLine(){
				for (var i = 0;i <= nums.length;i++){
					//起始坐标
					var numsY = 80-nums[i];
					var numsX = i*11;
					//终止坐标
					var numsNY = 80-nums[i+1];
					var numsNX = (i+1)*11;
					ctx.beginPath();
					ctx.moveTo(numsX,numsY);
                    ctx.lineTo(numsNX,numsNY);
                    ctx.lineWidth = 1; //线条的宽度
                    ctx.strokeStyle = "orange";//线条颜色
                    ctx.stroke();
				}
			}
			//绘制折线的点
			function drawBlock(){
				for (var i = 0;i <= nums.length;i ++){
					var numsY = 80-nums[i];
					var numsX = i*11;
					ctx.beginPath();
					// 画出折线上的点
					ctx.moveTo(numsX-2,numsY);
					ctx.lineTo(numsX,numsY-2);
					ctx.lineTo(numsX+2,numsY);
					ctx.lineTo(numsX,numsY+2);
					ctx.fill();
                    ctx.fillStyle = "orange";
				}
			}
			drawLine();
			drawBlock();
    }

    componentDidMount(){
        //圆形图
        this.canvas(this.refs.canvas1,'yellow',300);
        this.canvas(this.refs.canvas2,'skyblue',240);
        this.canvas(this.refs.canvas3,'red',160);
        //柱状图
        this.canvaszhu(this.refs.canvaszhu1,'green',[20,30,30,40,58,33,33,45,45,25,15,20,33,33,45,45,25,15]);
        this.canvaszhu(this.refs.canvaszhu2,'orange',[45,45,25,15,20,30,30,40,58,45,25,15,33,33,20,33,33,45]);
        //折线图
        this.canvaszhe()
    }
}

export default index;