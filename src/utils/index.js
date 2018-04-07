import hljs from 'highlight.js';
import marked, { Renderer } from 'marked';


export const localStorageUtils = {
    setItem: (key, value) => {
        try{
            localStorage.setItem(key, JSON.stringify(value));
        }catch(e){
            if(e.name === 'QuotaExceededError'){
                console.log('超出本地存储限额！');
            }
        }
    },
    getItem: key => {
        const value = localStorage.getItem(key);
        if (value && value !== 'undefined') {
            return JSON.parse(value);
        } else {
            return null;
        }
    },
    clear: () => {
        localStorage.clear()
    }
};

export const hljsDoc = (() => {
    const renderer = new Renderer();

    hljs.initHighlightingOnLoad();
    renderer.code = (code, language) => {
        // Check whether the given language is valid for highlight.js.
        // const validLang = !!(language && window.hljs.getLanguage(language));
        // Highlight only if the language is valid.
        // const highlighted = validLang ? window.hljs.highlight(language, code).value : code;
        const highlighted = hljs.highlight('cpp', code).value
        // Render the highlighted code with `hljs` class.
        return `<pre><code class="hljs cpp">${highlighted}</code></pre>`;
    };

    // Set the renderer to marked.
    marked.setOptions({ renderer });

    return doc => marked(doc || '');
})()