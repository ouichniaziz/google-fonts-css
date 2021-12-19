const rangeInput = document.querySelector(".container__slider-input");
const sliderPixels = document.querySelector(".container__slider-pixels");
let defaultValue = 54;
rangeInput.value = defaultValue;
sliderPixels.innerText = `${defaultValue}px`;

rangeInput.addEventListener("input", updateRange);
function updateRange (event) {
  const value = event.target.value;
  sliderPixels.innerText = `${value}px`;
  updateSize(value);
};

function updateSize(textSize) {
    document.querySelector("html").style.setProperty("--text-size", `${textSize}px`)
}
