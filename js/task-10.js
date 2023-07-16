const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesContainer = document.querySelector("#boxes");

  createButton.addEventListener("click", createBoxes);
  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes() {
    const amount = document.querySelector("input").value;

    let boxesHTML = "";
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const color = getRandomHexColor();
      const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
      boxesHTML += box;
      size += 10;
    }

    boxesContainer.innerHTML = boxesHTML;
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
