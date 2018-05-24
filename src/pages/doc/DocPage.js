import React from 'react';
import marked, { Renderer } from 'marked';
import { observer, inject } from "mobx-react"
import docs from '../../assets/docs';
import axios from '../../axios';
import hljs from 'highlight.js';
import "highlight.js/styles/monokai-sublime.css";
import store from '../../store';
import { hljsDoc } from '../../utils';
import './DocPage.css';

@inject("store")
@observer
export default class DocPage extends React.PureComponent {
    preDoc = '';
    constructor(props) {
        super(props);

        this.preDoc = props.activeDoc;

        this.state = {
            time: Date.now()
        };
    }

    componentWillReceiveProps() {
        const { user, activeDoc } = this.props.store;
        const { preDoc } = this.state;

        console.log(this.preDoc)
        console.log(activeDoc)

        if (this.preDoc !== activeDoc) {
            this.recordTime();

            this.preDoc = activeDoc;
            this.setState({
                time: Date.now()
            });
        }
    }

    recordTime() {
        const { user, activeDoc } = this.props.store;
        const time = (Date.now() - this.state.time) / 1000;
        
        if (user.id) {
            axios.get(`/record_study_time?userId=${user.id}&time=${time}&chapter=${this.preDoc}`);
        }
    }

    componentDidUpdate() {
        const { preDoc } = this.state;

        if (preDoc !== this.props.activeDoc) {
            this.setState({ preDoc: this.props.activeDoc });
        }
    }

    componentWillUnmount() {
        this.recordTime();
    }

    render() {
        const { store } = this.props; 
        const content = (docs[store.activeDoc] || docs.helloWorld).content;
        const doc = hljsDoc(content);

        return (
            <div style={{ width: '100%', wordWrap: 'break-word' }}
                 dangerouslySetInnerHTML={{ __html: doc }}
            />
        );
    }
}
