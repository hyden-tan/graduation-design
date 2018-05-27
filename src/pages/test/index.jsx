import React, { Component } from 'react'
import { Modal, Table, Button } from 'antd';
import { autorun } from 'mobx';
import { observer } from 'mobx-react';
import store from '../../store';
import axios from '../../axios';
import TestPage from './TestPage';
import Question from '../questions/Question';
import './index.css';

@observer
export default class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            activeTest: null,
            testDate: new Date(),
            activeQuestion: null,
            state: 0,
            isFinish: false,
        };

        autorun(this.getData);
    }

    getData = () => {
        if (store.user.id) {
            axios.get(`/get_tests?userId=${store.user.id}`)
                .then(response => {
                    if (response.code === 0) {
                        
                        this.setState({
                            data: response.data.map((item, index) => ({...item, no: index + 1}))
                        });
                    }
                })
                .catch(console.log)
        }
    }

    tableColumns = [{
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            width: 100,
        }, {
            title: '时间',
            dataIndex: 'date',
            key: 'date',
        }, {
            title: '得分',
            dataIndex: 'score',
            key: 'score',
            width: 100,
        }, {
            title: '',
            dataIndex: 'id',
            key: 'id',
            render: (text, record) => <a onClick={() => this.setState({ activeTest: record.id, testDate: record.date, state: 1 })}>进入</a>
        }
    ];

    createTest = () => {
        if (!store.user.id){
            Modal.warning({
                content: '请先登录！'
            });
        } else {
            axios.get(`/create_test?userId=${store.user.id}`)
                .then(response => {
                    if (!response.code) {
                        this.setState({ state: 1, activeTest: response.test_id, testDate: new Date() });
                    } else {
                        Modal.warning({
                            content: response.errMsg
                        });
                    }
                })
                .catch(console.log)
        }
    }

    handleQuestionClick = (question_id, isFinish) => {
        this.setState({
            state: 2,
            activeQuestion: question_id,
            isFinish
        });
    }

    handleQuestionCancel = () => {
        this.setState({
           state: 1 
        });
    }

    render() {
        const { data, state, activeTest } = this.state;

        if (state === 1) {
            return this.renderTestQuestions();
        }

        if (state === 2) {
            return this.renderTestQuestion();
        }

        return (
            <div className="test">
                <h3 className="table-header">
                    我的考试
                    <Button 
                       type="primary" 
                       style={{float: 'right'}}
                       onClick={this.createTest}
                    >组卷考试</Button>
                </h3>
                <Table dataSource={data} columns={this.tableColumns}/>
            </div>
        )
    }

    renderTestQuestions = () => {
        const { activeTest, testDate, data, isFinish } = this.state;

        return (
            <div className="test">
                <TestPage 
                    testId={this.state.activeTest} 
                    onClickQuestion={this.handleQuestionClick}
                    testDate={testDate}
                    onClose={() => this.setState({ state: 0 }, this.getData)}
                />
            </div>
        );
    }

    renderTestQuestion = () => {
        return (
            <div className="full-window">
                <Question 
                    testId={this.state.activeTest} 
                    questionId={this.state.activeQuestion} 
                    onCancel={this.handleQuestionCancel}
                    isFinish={this.state.isFinish}
                />
            </div>
        );
    }
}
