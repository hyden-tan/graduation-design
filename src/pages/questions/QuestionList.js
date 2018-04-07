import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';



const data = [
    {
        no: 1,
        title: '编写一个hello world代码！',
        degree: 1,
    },
];

export class QuestionList extends Component {

    columns = [{
            title: 'No',
            dataIndex: 'no',
            key: 'no',
            width: 100,
        }, {
            title: '题目',
            dataIndex: 'title',
            key: 'title',
            render: (text, data) => (<a onClick={() => this.props.history.push(`question/${data.no}`)}>{text}</a>)
        }, {
            title: '难度',
            dataIndex: 'degree',
            key: 'degree',
            width: 150,
        }
    ];
  render() {
    return (
      <div style={{ padding: '10px 100px'}}>
          <Table columns={this.columns} dataSource={data} />
      </div>
    )
  }
}

export default QuestionList
