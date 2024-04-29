function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const changeColorBtn = document.querySelector(".change-color")
const currentColor = document.querySelector('.color')
const body = document.querySelector('body')

changeColorBtn.addEventListener('click', changeColorFunc)

function changeColorFunc(){
  let color = getRandomHexColor()
  currentColor.innerHTML = color;
  body.style.backgroundColor = color;
  console.log(color);
  return
}