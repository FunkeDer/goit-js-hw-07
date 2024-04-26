function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

console.log(getRandomHexColor());

const changeColorBtn = document.querySelector(".change-color")
const currentColor = document.querySelector('.color')
const body = document.querySelector('body')

changeColorBtn.addEventListener('click', changeColorFunc)

function changeColorFunc(){
  currentColor.innerHTML = getRandomHexColor()
   body.style.backgroundColor = getRandomHexColor();
   return
}