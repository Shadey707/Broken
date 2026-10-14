//grab our html elements
let gallerySection = document.querySelector(".gallery");
let modal = document.querySelector('dialog');
let modalImg = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


gallerySection.addEventListener('click', (event) =>{
    console.log(event.target.src);
   
    modal.showModal();
    
    modalImg.src = event.target.src.replace("-sm", "-full");

    

});




closeButton.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }});


    let menu = document.querySelector(".menu-btn");

menu.addEventListener("click",function(event){
    let nav = document.querySelector('nav');

    if(nav.style.display === '') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = '';
    }

    menu.classList.toggle('change');

});