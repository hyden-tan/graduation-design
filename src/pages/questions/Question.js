import React, { Component } from 'react';
import { Button, message, Spin } from 'antd';
import CodeMirror from 'codemirror';
import PropTypes from 'prop-types';
import store from '../../store';
import { observer, inject } from 'mobx-react';
import { getUrlParam } from '../../utils';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/seti.css';

import axios from '../../axios';

require('codemirror/keymap/sublime.js');
require('codemirror/mode/cmake/cmake.js');
@inject("store")
@observer
export class Question extends Component { 
    static propTypes = {
        questionId: PropTypes.number,
        testId: PropTypes.number,
        onCancel: PropTypes.func,
        isFinish: PropTypes.isFinish,
    }

    constructor(props) {
        super(props);

        if (!getUrlParam('id') && !props.questionId) {
            props.history.push('/questions')
        }

        this.state = {
            result: '',
            loading: false,
            question: {
                id: -1,
                title: '',
                detail: '',
            }
        }
    }

    componentDidMount() {
        this.getQuestion();
        this.getCode();
        this.codemirrorInit();
    }

    codeMirror;

    getQuestion = async () => {
        const id = this.props.questionId || getUrlParam('id');
        const res = await axios.get('/get_question?id=' + id);
        
        if (res) {
            this.setState({ question: res });
        }
    } 

    codemirrorInit = () => {
        this.codeMirror = CodeMirror.fromTextArea(document.querySelector('#code'), {
            mode:  'cmake',
            lineNumbers: true,
            keyMap: "sublime",
            theme: 'seti',
            lineWrapping:true,
            foldGutter: true,
            gutters:["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
   
            //全屏模式
            fullScreen:true,
        });   
    }

    onSubmit = () => {
        const { question } = this.state;
        const { user } = this.props.store;
        const code = this.codeMirror.getValue()  

        if (!code) return;

        this.setState({ loading: true });

        axios.post('/run', { 
            type: this.props.testId ? 'test' : 'practice',
            userId: user.id ? user.id : -1,
            questionId: question.id,
            testId: this.props.testId,
            code,
        } )
            .then(response => {
                if (!response) {
                    return this.setState({result: '服务器出错！'});
                }
                if (response.code === 0) {
                    return this.setState({result: response.result})
                }
                
                this.setState({result: response.errMsg})
            })
            .catch(console.log)
            .finally(() => this.setState({loading: false}))
    }

    onSuccess = () => {
        const { question } = this.state;
        const { user } = this.props.store;
    
        axios.post(`/set_question_done`, {
            type: this.props.testId ? 'test' : 'practice',
            userId: user.id,
            testId: this.props.testId,
            questionId: this.props.questionId || getUrlParam('id')
        })
            .then(response => {
                if (!response) {
                    return message.error('服务器失败，已联系管理员！');
                }
                if (response.code !== 0) {
                    return message.error('服务器失败，已联系管理员！');
                }
                
                message.success('您已完成本题！');
            })
            .catch(console.log)
    }

    getCode =() => {
        const { question } = this.state;
        const { user } = this.props.store;

        axios.post(`/get_code`, {
            type: this.props.testId ? 'test' : 'practice',
            userId: user.id ? user.id : -1,
            questionId: this.props.questionId || getUrlParam('id'),
            testId: this.props.testId,
        })
            .then(code => {
                this.codeMirror.setValue(code);
            })
            .catch(console.log)
    }

    render() {
        const { result, question, loading } = this.state;

        return (
        <div style={{ padding: '10px 5%'}}>
            <h4>题目名称： {question.title}</h4>
            <h4>题目描述:</h4>
            <p style={{textIndent: '20px'}}>{question.detail}</p>

            <h4 style={{marginTop: '30px'}}>编写代码</h4>
            <div style={{margin: '10px 0'}}>
                <textarea id="code" style={{width: '100%', height: '400px', overflow: 'auto'}}></textarea>
            </div>

            <div style={{width: '80px', height: '50px', textAlign: 'center'}}>
                {!loading && <Button onClick={this.onSubmit}>编译运行</Button>}
                {loading && <Spin />}
            </div>
            
            <h4 style={{marginTop: '20px'}}>运行结果:</h4>
            <div style={{ width: '100%', height: '150px', overflow: 'auto', backgroundColor: '#151718', color: 'white', padding: '10px'}}>
                <pre>{result}</pre> 
            </div>
            {('isFinish' in this.props && !this.props.isFinish || !('isFinish' in this.props)) && 
                <Button type="primary" onClick={this.onSuccess} style={{ marginTop: '20px', marginRight: '20px' }}>确认</Button>}
            {this.props.testId && <Button onClick={this.props.onCancel} style={{ marginTop: '20px' }}>返回</Button>}
        </div>
        )
    }
}

export default Question;
