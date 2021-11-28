//contains learn data
const reviewPageData = [{heading:"Annie M", body:"Awesome training institute! Faculties and training are top class!"},
                        {heading:"Abhi Sinha", body:"I benefited a lot from their training. Definitely recommended!"},
                        {heading:"Sups Ran", body:"Top class training institute! Faculties and courses are very good!"},
                        {heading:"Whiz Kid", body:"Benefited a lot from the training! Would definitely recommend!"},
                        {heading:"Anonymous User", body:"Very Nice! Would definitely recommend it!"}];

const homePageData= [{heading:"Online Instruction", body:"Introduction to new topics will be covered by instructors and teaching assistants. They will cover topics through a combination of lecture and live coding."},
                     {heading:"Mentored Exercises", body:"Apply your understanding of these new topics by doing, but don't worry, you'll have access to instructors and teaching assistants if/when you need guidance. On average, 75% of Generation programs are practice vs. instruction."},
                     {heading:"Real-World Experience", body:"What good is all this knowledge if you can't apply it? By the end of this program, you will be prepared to complete the JavaScript Certification granted by W3Schools."},
                     {heading:"Materials to Keep Going", body:"Whether you continue your journey with self-study, or take the next steps to pursue a career in web development, we'll give you personalized guidance on how to continue after the end of the program."}];

const coreCourses = [{name:"C++", summary:"Introduction to C++", details: "This course teaches about C++ programming language. It's duration is 6 weeks. It consists of - OOPS concepts, Classes, Pointers, STL concepts etc. C++ is an object-oriented programming language that is simple and modern and a general-purpose programming language for application development. This can be great for students who wish to enter the Object-Oriented Programming."},
                     {name:"Java", summary:"Introduction to Java", details: "This course teaches about Java. It's duration is 6 weeks. Java Course is about helping students learn the concepts of programming and help them solve complex problems. This course requires patience, analytical thinking ability, attention to detail as they are essential in becoming a successful programmer."}]
 
const webCourses = [{name:"JavaScript", summary:"Introduction to JavaScript", details: "This course teaches about Javascript. It's duration is 6 weeks. You will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. The concepts covered in these lessons lay the foundation for using JavaScript in any environment."},
                    {name:"HTML", summary:"Introduction to HTML", details: "This course teaches about HTML. It's duration is 6 weeks. This course teaches you all the basics of HTML including the latest in CSS styling. We discuss basic syntax and move forward to more advanced features such as JavaScript with animations, CSS3 and media queries, and styling with some of the new HTML5 tags."},
                    {name:"CSS", summary:"Introduction to CSS", details: "This course teaches about CSS. It's duration is 6 weeks."}]
 
const cloudCourses = [{name:"AWS", summary:"AWS Cloud Practitioner", details: "This course teaches about AWS Cloud Computing. It's duration is 6 weeks. In this module, you will learn about the different services provided by AWS. You will be provided with an overview of the important resources required to develop an application."},
                      {name:"Azure", summary:"Azure Cloud Practitioner", details: "This course teaches about Azure Cloud Computing. It's duration is 6 weeks. In this module, you will learn about the different services provided by AWS. You will be provided with an overview of the important resources required to develop an application."}]
 
const coreCoursesFaculty = [{name:"John Hammond", summary:"Faculty for C++", details: "I have 10 yrs teaching experience in C++. I have done my Masters in Computer Science from University of Boston. I will teach different concepts of C++ making sure every student has strong development of concepts."},
                            {name:"Ashley Hikes", summary:"Faculty for Java", details: "I have 6 yrs teaching experience in Java. I have done my Masters in Computer Science from University of Texas. I will teach different concepts of Core Java making sure every student has strong development of concepts."}]
  
const webCoursesFaculty = [{name:"Sam Walton", summary:"Faculty for JavaScript", details: "I have 6 yrs teaching experience in JavaScript. I will teach different concepts of Javascript making sure every student has strong development of concepts."},
                            {name:"Kevin Ken", summary:"Faculty for HTML", details: "I have 3 yrs teaching experience in HTML. I will teach different concepts of HTML making sure every student has strong development of concepts."},
                            {name:"Supri N", summary:"Faculty for CSS", details: "I have 2 yrs teaching experience in CSS. I will teach different concepts of CSS making sure every student has strong development of concepts."}]
  
const cloudCoursesFaculty = [{name:"Jason Holder", summary:"Faculty for AWS", details: "I have 5 yrs teaching experience in AWS Concepts. I will teach different concepts of AWS making sure every student has strong development of concepts. I will also help in preparation for certification."},
                             {name:"Antony P", summary:"Faculty for Azure", details: "I have 4 yrs teaching experience in Azure Cloud Computing. I will teach different concepts of Azure cloud computing making sure every student has strong development of concepts. I will also help in preparation for certification."}]
 
const courseStream = [{heading:"Core Programming", body:"Include C++, Java", courses: coreCourses, faculties: coreCoursesFaculty},
                      {heading:"Web Programming", body:"Include HTML, Javascript", courses: webCourses, faculties: webCoursesFaculty},
                      {heading:"Cloud Computing", body:"Include Cloud Computing", courses: cloudCourses, faculties:cloudCoursesFaculty}];
 
      

export {homePageData, 
        reviewPageData,
        courseStream};