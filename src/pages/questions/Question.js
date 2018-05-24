import React, { Component } from 'react';
import { Button, message, Spin } from 'antd';
import CodeMirror from 'codemirror';
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
    constructor(props) {
        super(props);

        if (!getUrlParam('id')) {
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
        this.codemirrorInit();
        this.getQuestion();
    }

    codeMirror;

    getQuestion = async () => {
        const id = getUrlParam('id');
        const res = await axios.get('/get_question?id=' + id);
        
        if (res) {
            this.setState({ question: res });
        }
    } 

    codemirrorInit = (myTextArea) => {
        this.codeMirror = CodeMirror.fromTextArea(document.querySelector('#code'), {
            lineNumbers: true,
            keyMap: "sublime",
            mode:  'cmake',
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
            userId: user.id ? user.id : -1,
            questionId: question.id,
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
    
        axios.get(`/set_question_done?userId=${user.id}&questionId=${question.id}`)
            .then(response => {
                if (!response) {
                    return message.error('服务器失败，已联系管理员！');
                }
                if (response.code !== 0) {
                    return message.error('服务器失败，已联系管理员！');
                }
                
                message.success('操作成功！');
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
            <Button type="primary" onClick={this.onSuccess} style={{ marginTop: '20px' }}>确认</Button>
        </div>
        )
    }
}

export default Question;
