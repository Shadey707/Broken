let age = 33;
let name = "Brother Warner";

// This is like print in Python
/*Multiline coment 
in javasript
*/
console.log(age)
console.log(name)

age = 34;

console.log(age);

const eyeColor = "blue";
let favoriteColor = "blue";

//scope is where vairbles can be referenced

if(age == 34){
    //we are now in a different scope
    // inside this scope, we can reference varibles declared outside of this scope
    console.log(name);

    //declare a varible in an inner scope 
    let favoriteColor = "blue";

}

//console.log(favoriteColor)

document.querySelector("h1").style.color = favoriteColor;