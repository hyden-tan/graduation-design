import { DocPage } from '../pages/doc';
import { QuestionList,  Question } from '../pages/questions';
 
const title = 'C易学';

const config = {
    list: [
        { title, component: QuestionList, path: '/questions', name: 'questions'},
        { title, component: Question, path: '/question/:id', name: 'questions'},
        { title, component: DocPage, path: '/:title', name: 'doc' },
    ]
}

export default config;