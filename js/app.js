const passwordEl = document.getElementById("password")
const passwordLength = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numberEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generatePwBtn = document.querySelector(".generate-btn")

function getRandomLowercase(){
    const lowercase = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    return lowercase
}

function getRandomUppercase () {
    const uppercase = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    return uppercase
}

function getRandomNumber(){
    const number = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
    return number
}

function getRandomSymbols () {
    const symbols = String.fromCharCode(Math.floor(Math.random() * 50) + 174)
    return symbols    
}

numberEl.value = getRandomNumber()
symbolsEl.value = getRandomSymbols()
uppercaseEl.value = getRandomUppercase()
lowercaseEl.value = getRandomLowercase()

const passwordArray = [
    uppercaseEl,
    lowercaseEl,
    numberEl,
    symbolsEl,
    length
]

passwordArray.forEach(elements => {
        generatePwBtn.addEventListener("click", () => {
           let checked_value = elements.checked
            passwordEl.value = lowercaseEl.value + uppercaseEl.value + numberEl.value + symbolsEl.value
            console.log(passwordEl.value,checked_value)
        })
});








