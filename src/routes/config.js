import { DocPage } from '../pages/doc';
import { QuestionList,  Question } from '../pages/questions';
import Ananyse from '../pages/ananyse';
 
const title = 'C易学';

const config = {
    list: [
        { title, component: QuestionList, path: '/questions', name: 'questions'},
        { title, component: Question, path: '/question', name: 'questions'},
        { title, component: Ananyse, path: '/ananyse', name: 'ananyse' },
        { title, component: DocPage, path: '/:title', name: 'doc' },
        { title, component: DocPage, name: 'doc' },
    ]
}

export default config;