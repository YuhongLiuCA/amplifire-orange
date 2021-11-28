import { LightningElement , api} from 'lwc';

export default class Learnblock extends LightningElement {
     @api
     itemHeading;

     @api
     itemBody;

     @api
     displaybuttons = false;

     //this is event handler for buttons "List Courses/List Faculties"
     handleStreamSelect(event)
     {
          //let item_name = evt.target.value;
        console.log("Inside Stream Select");

        let buttonClicked = event.target.value;

        //raise item row button click event to main app so that it can 
        //be added to myCarts array.
        this.dispatchEvent(new CustomEvent('streamselect', { detail: buttonClicked, bubbles: true }));
     }  

}