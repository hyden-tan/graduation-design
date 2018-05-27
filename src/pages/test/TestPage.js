import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Table, Button, Icon } from 'antd';
import axios from '../../axios';

import './index.css';

export default class TestPage extends Component {
    static propTypes = {
        testId: PropTypes.number.isRequired,
        testDate: PropTypes.string.isRequired,
        onClickQuestion: PropTypes.func.isRequired,
    };

    timer = null;

    constructor(props) {
        super(props);

        const time = this.computedTime();
        this.state = {
            data: [],
            time: time ? time : '已完成',
        };

        this.getData();
    }

    computedTime = () => {
    
        const range = (new Date().getTime() - new Date(this.props.testDate).getTime()) / 1000;

        if (range >= 2*60*60) {
            return false;
        } else {
            const rest = 2 * 60 * 60 - range;
            const h = rest >= 60 * 60 ? 1 : 0;
            const i = parseInt((rest % (60 * 60)) / 60);
            const s = parseInt((rest % (60 * 60)) % 60);

            return `0${h} : ${i < 10 ? 0 : ''}${i} : ${s < 10 ? 0 : ''}${s}`;
        }
    }

    setTimer = () => {
        this.timer = setTimeout(() => {
            const s = this.computedTime();

            if (s) {
                this.setState({
                    time: s
                }, this.setTimer);
            } else {
                this.setState({ time: '已完成' });
            }
        }, 1000);
    }

    componentDidMount() {
        this.setTimer();
    }

    tableColumns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            width: 100,
        }, {
            title: '题目',
            dataIndex: 'title',
            key: 'title',
        }, {
            title: '状态',
            dataIndex: 'done',
            key: 'done',
            render: text => text ? <Icon type="check" size="lg" style={{ color: 'green', fontSize: 18 }} /> : null,
            width: 100,
        }, {
            title: '',
            dataIndex: 'op',
            key: 'op',
            render: (text, record) => <a onClick={() => this.props.onClickQuestion(record.id, !this.computedTime())}>做题</a>
        }
    ];

    getData = () => {
        const { testId } = this.props;
        axios.get(`/get_test_questions?testId=${testId}`)
            .then(data => this.setState({ data: data.map((item, index) => ({...item, no: index + 1})) }))
            .catch(console.log)
    }
    
    render() {
        const { data, time } = this.state;

        return (
            <div className="test-page">
                <h3 className="table-header">
                    {time}
                </h3>
                <Icon 
                    type="close" size="lg" 
                    style={{position: 'absolute', top: '100px', right: '100px', fontSize: 24}} 
                    onClick={this.props.onClose}
                />
                <Table dataSource={data} columns={this.tableColumns}/>
            </div>
        );
    }
}
