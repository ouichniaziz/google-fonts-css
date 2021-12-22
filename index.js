const rangeInput = document.querySelector(".container__slider-input");
const textInput = document.querySelector(".container__slider-input-text");
const sliderPixels = document.querySelector(".container__slider-pixels");
const textFont = document.querySelectorAll(".container__main-row p");
let defaultValue = 54;
let defaultText = "Almost before we knew it, we had left the ground."
rangeInput.value = defaultValue;
textInput.value = defaultText;
textFont.forEach(p => p.innerText = defaultText);
sliderPixels.innerText = `${defaultValue}px`;

rangeInput.addEventListener("input", updateRange);
textInput.addEventListener("input", updateText);

function updateText(event) {
  const textValue = event.target.value;
  textFont.forEach(p => p.innerText = textValue);

}
function updateRange(event) {
  const value = event.target.value;
  sliderPixels.innerText = `${value}px`;
  updateSize(value);
}

function updateSize(textSize) {
  document
    .querySelector("html")
    .style.setProperty("--text-size", `${textSize}px`);
}
