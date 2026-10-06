// 1. select menu from the DOM
let menu = document.querySelector(".menu-btn");

// 2. Add event listeners to the menu bottom 
menu.addEventListener("click",function(event){
    let nav = document.querySelector('nav');
    //links are displayed or not
    if(nav.style.display === '') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = '';
    }

    //ternary operator 
    // nav.style.display = nav.style.display === '' ? 'flex' : '';

    // toggle X animation
    menu.classList.toggle('change');

});

// let myFunction = function() {

// }

// 3. whether the links are displayed or not
// function toggleMenuLinks(event) {

// }

// 4. Toggle X animation for menu

