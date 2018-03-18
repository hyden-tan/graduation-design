import React from 'react';
import marked, { Renderer } from 'marked';
import { observer, inject } from "mobx-react"
import hljs from 'highlight.js';
import "highlight.js/styles/monokai-sublime.css";
import store from '../../store';
import { hljsDoc } from '../../utils';
import './DocPage.css';

@inject("store")
@observer
export default class DocPage extends React.PureComponent {
    render() {
        const doc = hljsDoc(this.props.store.doc);

        return (
            <div style={{ width: '100%', wordWrap: 'break-word' }}
                 dangerouslySetInnerHTML={{ __html: doc }}
            />
        )
    }
}