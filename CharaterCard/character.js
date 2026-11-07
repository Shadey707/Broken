let health = 100;
let level = 1

const attackButton = document.querySelector("#attack");
const healthText = document.querySelector("#health");
const levelText = document.querySelector("#level");
const levelButton = document.querySelector("#levelbtn");

attackButton.addEventListener("click", () => {
  health -= 10;
  healthText.textContent = health;
});

levelButton.addEventListener("click", () => {
  level += 1;
  levelText.textContent = level;
});