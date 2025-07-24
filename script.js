`use strict`;

const inputRange = document.querySelector(`.input-range`);
const inputRangeContainer = document.querySelector(`.range-input--container`);
const inputRangeTruck = document.querySelector(`.input-range--truck`);


let inputRangeLength;
let inputRangeTruckLength;


updateInputRange();
window.addEventListener(`resize`, updateInputRange);


inputRange.addEventListener(`input`, () => {
    calcInputRangeTruckWidth();    
})


function updateInputRange() {
    
    calcInputRangeWidth()
    calcInputRangeTruckWidth();
}

function calcInputRangeWidth() {
    inputRangeLength = getComputedStyle(inputRangeContainer).width
}

function calcInputRangeTruckWidth() {
    inputRangeTruckLength = (parseInt(inputRangeLength) / 20) * parseInt(inputRange.value);
    inputRangeTruck.style.width = `${inputRangeTruckLength}px`;
}
