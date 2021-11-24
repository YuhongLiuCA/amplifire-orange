import {LightningElement, api} from 'lwc';
export default class tabButtons extends LightningElement {
    @api 
    category="All";
    handleClick(event) {
        let buttonId = event.target;
        //let buttons = this.getElementsByClassName("slds-button");
        let buttons = this.template.querySelectorAll("button");
        
        //console.log("l="+buttons.length);
        for(let i = 0; i < buttons.length; i++){
            let element = buttons[i];
            //console.log(element.classList);
            if(element.classList.contains("button_clicked")) {
                element.classList.remove("button_clicked");
                //console.log("i=" + i);
            } 
        }
    
        buttonId.classList.add("button_clicked");
        //console.log(buttonId.id);
        this.dispatchEvent(new CustomEvent('changecategory', {
            detail: buttonId.id,  
            bubbles: true
        }));
    }
}