import { LightningElement } from 'lwc';

export default class Contact extends LightningElement {
    
    displayForm = true;

    displayResponseMessage = "";

    handleSubmit()
    {
        this.displayForm = false;
        this.displayResponseMessage = "Thank you for contacting us! We will get back to you."
        return false;
    }

}