function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('input');
const container = document.querySelector('#boxes');


createBtn.addEventListener('click', () => {
  const inputValue = parseInt(inputEl.value);
  if (validateInput(inputValue)) {
   return createBoxes(inputValue);
  }
});

let inputValue = parseInt(inputEl.value);

function validateInput(inputValue) {
  if (inputValue >= inputEl.min && inputValue <= inputEl.max) {
    return true; 
  } else {
    return false; 
  }}


let count = 30

function createBoxes(inputValue) {
  container.innerHTML = ""
    for (let i = 0; i < inputValue; i++) {
      let block = document.createElement("div");
      block.style.width = `${count}px`;
      block.style.height = `${count}px`;
      block.style.backgroundColor = getRandomHexColor();
      container.appendChild(block);
      count += 10;
      inputEl.value = ''
    }
    count = 30
}

destroyBtn.addEventListener('click', destroyBlocks)

function destroyBlocks(){
  container.innerHTML = ""
  count = 30
  inputEl.value = ''
}













































