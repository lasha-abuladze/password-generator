`use strict`;

const inputRange = document.querySelector(`.input-range`);
const inputRangeContainer = document.querySelector(`.range-input--container`);
const inputRangeTruck = document.querySelector(`.input-range--truck`);
const charactersQuantity = document.querySelector(`.characters-quantity`);
const generateBtn = document.querySelector(`.submit-btn`);
const inputCheckbox = document.querySelectorAll(`.input-checkbox`);
const generatedPassword = document.querySelector(`.generated-password`);

let inputRangeLength;
let inputRangeTruckLength;

const generatorFunctions = [randomLowercase, randomUppercase, randomNumber, randomSymbol];
let generatorOptions = [];
let charactersLength;

let passwordCharacters = [];




updateInputRange();
window.addEventListener(`resize`, updateInputRange);


inputRange.addEventListener(`input`, () => {
    calcInputRangeTruckWidth();    
    charactersQuantity.textContent = `${inputRange.value}`;
})

generateBtn.addEventListener(`click`, (e) => {
    e.preventDefault();

    generatorOptions = [];
    passwordCharacters = [];
    
    inputCheckbox.forEach(el => {
        if(el.checked) {
            generatorOptions.push(el.dataset.option)
        }
    })

    charactersLength = Number(inputRange.value);


    generatePassword();

    generatedPassword.textContent = `${generatePassword()}`;


    resetInputs();
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


function randomSymbol() {
  const symbols = "!@#$%^&*()_+{}[]|:;'<>,.?/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function generatePassword() {
    for (let i=0; i<charactersLength; i++) {
        passwordCharacters.push(randomCharacter())
    }

    return passwordCharacters.join(``);
}


function randomCharacter() {

    const number = generatorOptions.length;
    const option = generatorOptions[Math.floor(Math.random() * number)];
    let generatedCharacter;

    // console.log(number, option)
    
    if(generatorOptions.length > 0) {

        generatorFunctions.forEach((el, i) => {
    
            // if(option.toLocaleUpperCase() && el.name.toLocaleUpperCase().includes(`${option.toLocaleUpperCase()}`)) {
            //     generatedCharacter = generatorFunctions[i]();
            // }
    
            if(el.name.toLocaleUpperCase().includes(`${option.toLocaleUpperCase()}`)) {
                generatedCharacter = generatorFunctions[i]();
            }
        })
    }

    
    return generatedCharacter
    // return generatedCharacter
}


function resetInputs() {

    inputCheckbox.forEach(el => {
        el.checked = false;
    })

    inputRange.value = `10`;
    charactersQuantity.textContent = `${inputRange.value}`
    updateInputRange();

}