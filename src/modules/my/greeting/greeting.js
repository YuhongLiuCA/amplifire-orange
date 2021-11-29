import { LightningElement, api } from 'lwc';

export default class App extends LightningElement {

    @api
    item = "No Item";

    shouldDelete = false;

    deleteItem(event) {
        this.shouldDelete = true;
    }
}
