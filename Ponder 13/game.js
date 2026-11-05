dice = document.querySelectorAll("img");

document.querySelector('#rollButton').addEventListener("click", e =>{
    //animat die
    document.querySelectorAll('#gameboard img').forEach(image =>{
        image.src = "assets/die_rolling.gif";
    });
    // land on new random number
    setTimeout(()=>{
        //this function will run after the timeout duration below
        document.querySelectorAll('#gameboard img').forEach(image =>{
            const randomNumber = Math.ceil(Math.random()* 6);
            image.src = `assets/white_dice_${randomNumber}.gif`;
    });
    }, 1000);
});

function setDieImages(imagePath) {
    document.querySelectorAll('#gameboard ing').forEach(image =>{
        image.src = imagePath;
    })
}