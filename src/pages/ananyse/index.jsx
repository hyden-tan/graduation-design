import React, { Component } from 'react';
import eCharts from 'echarts/lib/echarts';
import './index.css';

require('echarts/lib/chart/pie');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/gauge');


const pieOp = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',

    title: {
        text: '已做题型难度比例',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#000'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'难度为1的题型335道'},
                {value:310, name:'难度为2的题型310道'},
                {value:274, name:'难度为3的题型274道'},
                {value:235, name:'难度为4的题型235道'},
                {value:400, name:'难度为5的题型400道'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: '#001529'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#001529'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};


const barOp = {
    xAxis: {
        type: 'category',
        data: ['Hello World', '符号关键字', '数据类型', '判断与循环', '常量', '变量', '输入与输出', '字符串', '数组', '输入输出', '作用域', '函数', '指针', '结构体', '文件操作']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130, 30, 20, 10, 150, 180, 140, 120, 80],
        type: 'bar'
    }]
};

const sucOp = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '正确率'}]
        }
    ]
};

export default class Ananyse extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const pieChart = eCharts.init(this.pieDiv);
        const barChart = eCharts.init(this.barDiv);
        const sucChart = eCharts.init(this.sucDiv);
        pieChart.setOption(pieOp);
        barChart.setOption(barOp);
        sucChart.setOption(sucOp);
    }

    render() {
        return (
        <div className="container">
            <div>
                <h5>章节学习时间</h5>
                <div className="bar-box" ref={r => this.barDiv = r} />
            </div>
            <div className="pie-box">
                <div className="inner-box">
                    <h5>已做题型难度比例</h5>
                    <div className="eBox" ref={r => this.pieDiv = r}/>
                </div>
                <div className="inner-box">
                    <h5>已提交题目正确率统计</h5>
                    <div className="eBox" ref={r => this.sucDiv = r}/>
                </div>
            </div>
        </div>
        )
    }
}

