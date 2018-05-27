import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import axios from '../../axios';


const Star = ({ count }) => {
    const arr = [];
    while(count --) {
        arr.push(count);
    }

    return (
        <React.Fragment>
            {arr.map(() => <Icon type="star"/>)}
        </React.Fragment>
    );
}

export class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        this.getQuestions();
    }

    getQuestions = async () => {
        const data = await axios.get('/get_questions');
        if (data.length) {
            this.setState({
                data
            });
        }
    }

    columns = [{
            title: 'No',
            dataIndex: 'id',
            key: 'id',
            width: 100,
        }, {
            title: '题目',
            dataIndex: 'title',
            key: 'title',
            render: (text, data) => (<span onClick={() => this.props.history.push(`/question?id=${data.id}`)}>{text}</span>)
        }, {
            title: '难度',
            dataIndex: 'degree',
            key: 'degree',
            render: text => <Star count={text} />,
            width: 150,
        }
    ];

    render() {
        const { data } = this.state;

        return (
        <div style={{ padding: '10px 100px'}}>
            <Table columns={this.columns} dataSource={data} />
        </div>
        )
    }
}

export default QuestionList
