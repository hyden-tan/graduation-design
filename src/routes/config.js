import { DocPage } from '../pages/doc';

const title = 'C易学';

const config = {
    list: [
        { title, component: DocPage, path: '/', name: 'home' },
        { title, component: DocPage, path: '/doc/:title', name: 'doc' },
    ]
}

export default config;