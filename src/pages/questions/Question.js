import React, { Component } from 'react';
import { Button } from 'antd';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/seti.css';

import axios from '../../axios';

require('codemirror/keymap/sublime.js');
require('codemirror/mode/cmake/cmake.js');

export class Question extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            result: ''
        }
    }

    componentDidMount() {
        this.codemirrorInit();
    }

    codeMirror;

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
        axios.post('/run', { code: this.codeMirror.getValue()} )
            .then(response => {
                if (!response) {
                    return this.setState({result: '编译不通过'});
                }
                if (response.code === 0) {
                    return this.setState({result: response.result})
                }
                
                this.setState({result: response.errMsg})
            })
            .catch(console.log)
    }


    render() {
        const { result } = this.state;

        return (
        <div style={{ padding: '10px 5%'}}>
            <h4>题目名称： 编写一个Hello world代码</h4>
            <h4>题目描述:</h4>
            <p style={{textIndent: '20px'}}>编写一个Hello world代码编写一个Hello world代码编写一个Hello world代码编写一个Hello world代码编写一个Hello world代码编写一个Hello world代码编写一个Hello world代码编写一个Hello world代码编写一个Hello world代码</p>
            <h4 style={{marginTop: '30px'}}>编写代码</h4>
            <div style={{margin: '10px 0'}}>
                <textarea id="code" style={{width: '100%', height: '300px'}}></textarea>
            </div>
            <Button onClick={this.onSubmit}>编译运行</Button>
            <h4 style={{marginTop: '20px'}}>运行结果:</h4>
            <div style={{ width: '100%', minHeight: '100px', backgroundColor: '#151718', color: 'white', padding: '10px'}}>
                <pre>{result}</pre> 
            </div>
        </div>
        )
    }
}

export default Question;
