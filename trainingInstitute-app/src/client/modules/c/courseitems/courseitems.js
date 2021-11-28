import { LightningElement, api } from 'lwc';

export default class Courseitems extends LightningElement {
  
    @api
    itemName;

    @api
    itemSummary;

    @api
    itemDetails;

    showDetails = false;

    detailToggleIcon = "";
    detailToggleText = "";

    //called on class loading. Can add functionality to do on init
    connectedCallback()
    {
        this.detailToggleIcon = "resources/chevrondown_60.png";
        this.detailToggleText = "Details";
    }

    handleShowDetails()
    {
        if(this.showDetails === false)
        {
            this.showDetails = true;
            this.detailToggleIcon = "resources/chevronup_60.png";
            this.detailToggleText = "Collapse";
        }
        else
        {
            this.showDetails = false;
            this.detailToggleIcon = "resources/chevrondown_60.png";
            this.detailToggleText = "Details";
        }
    }
}

