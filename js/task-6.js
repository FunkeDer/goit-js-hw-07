function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
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
let count = 30;

function validateInput(inputValue) {
  return inputValue >= inputEl.min && inputValue <= inputEl.max;
}

function createBoxes(inputValue) {
  const fragment = document.createDocumentFragment();
  container.innerHTML = '';
  for (let i = 0; i < inputValue; i++) {
    const size = count + i * 10;
    const block = document.createElement('div');
    block.style.width = `${size}px`;
    block.style.height = `${size}px`;
    block.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(block);
  }
  container.appendChild(fragment);
  inputEl.value = '';
}

destroyBtn.addEventListener('click', destroyBlocks);

function destroyBlocks() {
  container.innerHTML = '';
  count = 30;
  inputEl.value = '';
}
