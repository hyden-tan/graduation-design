import React from 'react';
import marked, { Renderer } from 'marked';
import hljs from 'highlight.js'
import "highlight.js/styles/monokai-sublime.css";
import './DocPage.css';

import docs from '../../assets/docs';

export default class DocPage extends React.Component {
    state = {
        doc: ''
    }

    componentDidMount() {

        // window.hljs = require('highlight.js');
        // require('highlightjs-line-numbers.js');

        const doc = this.getDoc();
        const renderer = new Renderer();

        // window.hljs.initHighlightingOnLoad();
        // window.hljs.initLineNumbersOnLoad();

        hljs.initHighlightingOnLoad();
        renderer.code = (code, language) => {
            // Check whether the given language is valid for highlight.js.
            const validLang = !!(language && window.hljs.getLanguage(language));
            // Highlight only if the language is valid.
            const highlighted = validLang ? window.hljs.highlight(language, code).value : code;
            // Render the highlighted code with `hljs` class.
            return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
        };

        // Set the renderer to marked.
        marked.setOptions({ renderer });
        this.setState({ doc: marked(doc.content)})
    }

    getDoc() {
        const { location } = this.props;
        const title = location.pathname.replace('/doc/', '');
        console.log(title)
        return docs[title] || docs['helloWorld']
    }

    render() {
        return (
            <div style={{ width: '100%', wordWrap: 'break-word' }}
                 dangerouslySetInnerHTML={{ __html: this.state.doc }}
            />
        )
    }
}