`use strict`;

const inputRange = document.querySelector(`.input-range`);
const inputRangeContainer = document.querySelector(`.range-input--container`);
const inputRangeTruck = document.querySelector(`.input-range--truck`);


const inputRangeLength = getComputedStyle(inputRangeContainer).width;
let inputRangeTruckLength;



inputRange.addEventListener(`input`, () => {
    
    inputRangeTruckLength = (parseInt(inputRangeLength) / 20) * parseInt(inputRange.value);
    inputRangeTruck.style.width = `${inputRangeTruckLength}px`
    
})