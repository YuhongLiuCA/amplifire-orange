import {LightningElement, api} from 'lwc';
export default class tabButtons extends LightningElement {
    @api 
    category="All";
    
    handleClick(event) {
        let buttonId = event.target;
        let buttons = this.template.querySelectorAll("button");
        
        for(let i = 0; i < buttons.length; i++){
            let element = buttons[i];
            if(element.classList.contains("button_clicked")) {
                element.classList.remove("button_clicked");
            } 
        }
    
        buttonId.classList.add("button_clicked");
        this.dispatchEvent(new CustomEvent('changecategory', {
            detail: buttonId.id,  
            bubbles: true
        }));
    }
}