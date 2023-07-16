const nameInput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

function handleInputChange(event) {
    const inputValue = event.target.value.trim();
   nameOutput.textContent = inputValue !== '' ? inputValue : 'Anonymous';
}
nameInput.addEventListener(`input`, handleInputChange);