import { LightningElement } from 'lwc';

export default class Misc extends LightningElement {

    displayImage = false;

    catImageUrl = "";

    responseData = [];

    getCatImage(event)
    {
        let btnTarget = event.target;
        btnTarget.innerText = "Wait...";

        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => {
                console.log("Response code for API call: " + response.status);
                if (response.status >= 200 && response.status <= 299) 
                {
                  return response.json();
                }

                throw Error(response.statusText);
              })
            .then(apiData => {
                console.log(apiData);
                this.responseData = apiData;
                this.catImageUrl = this.responseData[0].url;
                this.displayImage = true;
                btnTarget.innerText = "Click Me Again!";
            })
            .catch(error => {
                console.error("Request resulted in an error: " + error);
                btnTarget.innerText = "Click Me Again!";
            })
            
    }
 }