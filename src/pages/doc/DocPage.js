import React from 'react';
import marked from 'marked';

export default class DocPage extends React.Component {
    getDoc() {
        const { location } = this.props;
        const title = location.pathname.replace('/doc/', '');
        return require(`../../assets/docs/${title}`);
    }

    render() {
        const doc = this.getDoc();
        const content = marked(doc.content);

        return (
            <div style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: content }} />
        )
    }
}