



const convertBtn = document.getElementById("convert-btn")
let result = ""
const lengthBox = document.getElementById("length-box")
const volBox = document.getElementById("volume-box")
const massBox = document.getElementById("mass-box")
const setBlank = ""

function metersAndFeet(number) {
	const value = Number(number)
	const numFeet = value * 3.281
	const roundedFeet = numFeet.toFixed(3)
	const numMeters = value / 3.281
	const roundedMeters = numMeters.toFixed(3)
	lengthBox.innerHTML = `<h3>Length (Meters/Feet)</h3>`
	result = `<p> ${value} meters = ${roundedFeet} feet | ${value} feet = ${roundedMeters} meters </p>`
	lengthBox.innerHTML += result
}

function gallonAndLiter(number) {
	const value = Number(number)
	const numGal = value / 3.785
	const roundedGal = numGal.toFixed(3)
	const numLiter = value * 3.785
	const roundedLiters = numLiter.toFixed(3)
	volBox.innerHTML = `<h3>Volume (Liters/Gallons)</h3>`
	result = `<p> ${value} liters = ${roundedGal} gallons | ${value} gallons = ${roundedLiters} liters </p>`
	volBox.innerHTML += result
}

function poundAndKilogram(number) {
	const value = Number(number)
	const numPounds = value / 0.453
	const roundedPounds = numPounds.toFixed(3)
	const numKilos = value * 0.453
	const roundedKilos = numKilos.toFixed(3)
	massBox.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>`
	result = `<p> ${value} kilos = ${roundedPounds} pounds | ${value} pounds = ${roundedKilos} kilos </p>`
	massBox.innerHTML += result
}

convertBtn.addEventListener("click", function () {
	const inputEl = document.getElementById("input")
	const userInput = inputEl.value
	lengthBox.innerHTML += setBlank
	volBox.innerHTML += setBlank
	massBox.innerHTML += setBlank
	metersAndFeet(userInput)
	gallonAndLiter(userInput)
	poundAndKilogram(userInput)
	inputEl.value = ""
} )