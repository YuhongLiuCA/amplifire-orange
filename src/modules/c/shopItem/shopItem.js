import {LightningElement, api} from 'lwc';
export default class shopItem extends LightningElement {
    @api 
    fruitItem;

    addFruitItem(event) {
        let itemId = event.target.id;
        let index = itemId.indexOf("Inc");
        let itemName = itemId.substring(0,index);
        console.log("item="+itemName);
        this.dispatchEvent(new CustomEvent('additem', {
            detail: itemName,  
            bubbles: true
        }));
    }

    removeFruitItem(event) {
        let itemId = event.target.id;
        let index = itemId.indexOf("Dec");
        let itemName = itemId.substring(0,index);
        this.dispatchEvent(new CustomEvent('removeitem', {
            detail: itemName,  
            bubbles: true
        }));
    }
}