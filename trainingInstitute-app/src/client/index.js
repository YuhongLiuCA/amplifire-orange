import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import Holder from 'c/holder';


const app = createElement('c-holder', { is: Holder });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
