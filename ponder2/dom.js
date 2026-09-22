// select an html element form the DOM
//figures out what to grab and save to varible
let heading = document.querySelector("h1");

console.log(heading);


heading.style.color = "blue";
heading.style.fontSize = "3em";
//Css: font-size

//Challenge change something eles yourself

heading.style.border = "2px solid black";
heading.style.textDecoration = "underline wavy";

//doo everything on one line
document.querySelector("p").style.color = "blue";

//there are different ways to select From the Dom
document.getElementById("topics");

//you can select more than one element at a time
console.log(document.querySelector(".list"));
let x = 0 
let topicsClassList = document.querySelector("#topics").classList;
topicsClassList.add("special");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                