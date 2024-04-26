const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  let result = event.currentTarget.value.trim(); 
  output.textContent = result; 
  if (result.length === 0) {
    output.textContent = 'Anonymous';
  }
});
