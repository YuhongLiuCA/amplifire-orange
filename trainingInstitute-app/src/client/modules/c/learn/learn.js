import { LightningElement,track } from 'lwc';

//import {homePageData, reviewPageData} from './learnData';
import {homePageData, 
        reviewPageData,
        courseStream} from './learnData';

export default class Learn extends LightningElement {   
     
    //array of courses/faculties to be displayed based on course category
     @track
     detailitems = [];
     
     //text to be displayed for Home/Review page
     @track
     homeContent = "";
     
     //property to display/hide Home section
     @track
     displayIntro = false;
     
     //property to display/hide Course Stream section
     @track
     displayCourseStream = false;
     
     //property to display/hide the course/facucties list
     @track
     displayDetails = false;
     
     //property to display/hide Review section
     @track
     displayReview = false;
     
     //property to display/hide Review section
     @track
     displayContact = false;

     //property to display/hide Fun Stuff page
     @track
     displayFunStuff = false;
     
     //variable to hold value of course type selected
     @track
     courseType = "";
 
     //learn data start ---

     courseStream = [...courseStream];

     homeItems = [...homePageData];

     reviewItems = [...reviewPageData];
     
     //---learn data end

     //called on class loading. Can add functionality to do on init
     connectedCallback()
     {
          this.handleHomeClicked();
     }
     
     //function to disable all properties of different views for learn
     disableAllViews()
     {
        this.displayIntro = false;
        this.displayDetails = false;
        this.displayCourseStream = false;
        this.displayReview = false;
        this.displayContact = false;
        this.displayFunStuff = false
        this.detailitems = [];
     }
     
     //function to handle the click of Home button
     handleHomeClicked()
     {
          this.disableAllViews();
          this.displayIntro = true;
          this.homeContent = "What we do -";
     }
     
     //function to handle the click of Review button
     handleReviewClicked()
     {
          this.disableAllViews();
          this.displayReview = true;
          this.homeContent = "Reviews from our Users -";
     }
     
     //function to handle the click of Contact button
     handleContactClicked()
     {
          this.disableAllViews();
          this.displayContact = true;
          this.homeContent = "Contact Us"
     }

     handleFunClicked()
     {
          this.disableAllViews();
          this.displayFunStuff = true;
          this.homeContent = "This page demonstrates LWC API call example!"
     }

     //function to handle the click of Courses/Faculty button
     displayCourseAndFaculty()
     {
         this.disableAllViews();
         this.displayCourseStream = true;
     }

     //function to handle the custome event thrown from Course Type
     //based on "List Courses" or "List Faculties" button
    handleCourseStream(event)
    {
         let streamIndex = event.target.dataset.index;
         console.log("stream index:" + streamIndex);
         let buttonClicked = event.detail;

         console.log("Button Clicked: " + buttonClicked);

         this.courseType = this.courseStream[streamIndex].heading;
         this.displayDetails = true;

         if (buttonClicked === "Courses")
         {
             this.detailitems = this.courseStream[streamIndex].courses;
         }
         else if (buttonClicked === "Faculty")
         {
             this.detailitems = this.courseStream[streamIndex].faculties;
         }
    }
}