import { DocPage } from '../pages/doc';

const title = 'C易学';

const config = {
    list: [
        { title, component: DocPage, path: '/', exact: true, name: 'home' },
        { title, component: DocPage, path: '/doc/:title', exact: true, name: 'doc' },
    ]
}

export default config;