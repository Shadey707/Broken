// arrays in javascript
let courses = ["WWD131","WDD130", "CSE110", "CSE210"];

// display the first course
console.log(courses[0]);
console.log(courses[3]);
console.log(courses[courses.length - 1]);

// normal fo i loop
for(let i = 0; i < courses.length; i++){
    console.log(courses[i]);
}

// array methods/functions 
courses.forEach((item) => {
    console.log(item);
})

let course = {
    name: "Dynamic Web Fundementals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
}


console.log(course.instructor);

//array of objects
let coursesArrayOfObjects = [
    {
    name: "Dynamic Web Fundementals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
    },
    {
    name: "Web Fundementals",
    code: "WDD130",
    credits: 2,
    instructor: "Brother Warner"
    }

];


console.log(coursesArrayOfObjects[1].name, coursesArrayOfObjects[1].code);

let body = document.querySelector('body');

coursesArrayOfObjects.forEach((item)=>{
    //build out an HTML div with course contents
    let courseDiv = `
    <div>
        <h2>${course.name}</h2>
        <p>Code:${course.code}</p>
        <p>Credits:${course.credits} </p>
        <p>Instructor: ${course.instructor} </p>
    
    </div>

    `;

    //add that div to the body
    body.innerHTML += courseDiv;
})