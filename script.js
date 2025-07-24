`use strict`;

const inputRange = document.querySelector(`.input-range`);
const inputRangeContainer = document.querySelector(`.range-input--container`);
const inputRangeTruck = document.querySelector(`.input-range--truck`);
const charactersQuantity = document.querySelector(`.characters-quantity`);
const generateBtn = document.querySelector(`.submit-btn`);
const inputCheckbox = document.querySelectorAll(`.input-checkbox`);



let inputRangeLength;
let inputRangeTruckLength;

const generatorFunctions = [randomLowercase, randomUppercase];
let generatorOptions = [];





// generatorOptions.forEach(opt => {
//     generatorFunctions.forEach(fun => {
//         if(fun.name.toLocaleUpperCase().includes(opt.toUpperCase())) {
//             console.log(fun())
//         }
//     })
// })




// generatorFunctions.forEach(el => {
//     if(el.name.toLocaleUpperCase().includes(`UPPERCASE`)) {
//         console.log(el())
//     }
// })



updateInputRange();
window.addEventListener(`resize`, updateInputRange);


inputRange.addEventListener(`input`, () => {
    calcInputRangeTruckWidth();    
    charactersQuantity.textContent = `${inputRange.value}`
})

generateBtn.addEventListener(`click`, (e) => {
    e.preventDefault();
    generatorOptions = [];
    
    inputCheckbox.forEach(el => {
        if(el.checked) {
            generatorOptions.push(el.dataset.option)
        }
    })


    inputCheckbox.forEach(el => {
        el.checked = false;
    })
    
    
    console.log(generatorOptions)

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


function randomLowercase() {
    const randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
    return randomLetter;
}

function randomUppercase() {
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return randomLetter;
}
