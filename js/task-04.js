const decrementBtn = document.querySelector(`[data-action="decrement"]`);
const incrementBtn = document.querySelector(`[data-action="increment"]`);
const valueSpan = document.querySelector(`#value`);

let counterValue = 0;

const updateCounterValue = () => {
    valueSpan.textContent = counterValue;
};

const incrementCounter = () => {
    counterValue += 1;
    updateCounterValue();
};

const decrementCounter = () => {
    counterValue -= 1;
    updateCounterValue();
};

decrementBtn.addEventListener('click', decrementCounter);
incrementBtn.addEventListener(`click`, incrementCounter);

updateCounterValue();