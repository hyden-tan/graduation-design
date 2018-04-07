import React, { Component } from 'react';
import { Button } from 'antd';
import CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/seti.css';

require('codemirror/keymap/sublime.js');
require('codemirror/mode/cmake/cmake.js');


export class Question extends Component { 
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
        console.log(this.codeMirror.getValue())
    }


    render() {
        console.log(this.props.match.params.id);
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
        </div>
        )
    }
}

export default Question;
