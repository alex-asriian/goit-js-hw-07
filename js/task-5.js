function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const body = document.querySelector("body")
const newColorOutput = document.querySelector(".color");


changeBtn.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  console.log(newColor);
  
  body.style.backgroundColor = newColor;
  newColorOutput.textContent = newColor;
})
