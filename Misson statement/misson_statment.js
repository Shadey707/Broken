
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);
let heading = document.querySelector("h2");

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "black";
        logo.src = "byui-logo-white.png";
        document.body.style.color = "white";
        heading.style.borderBottomColor = "white";

    } else if(current == 'light'){
         // code for changes to colors and logo
        document.body.style.backgroundColor = "white";
        logo.src = "byui-logo-blue.webp";
        document.body.style.color = "black"
        heading.style.borderBottomColor = "black";

    } else {
        // code for changes to colors and logo
        document.body.style.backgroundColor = "white"
        logo.src = "byui-logo-blue.webp"
        document.body.style.color = "black"
        heading.style.borderBottomColor = "black";
    }
}           
                    