//-------------constant values--------------------//
const G = 9.81
//ref pressure at sea level in kiloPascals
const pSubO = 101.32
//molar mass of dry air
const M = 0.02896968
//gas constant 
const R = 8.31432
//Euler's constant
const e = 2.71828
//reference altitude (sea level)
const hSubO = 0

//---------these need to be input from UI --------//
//current altitude in meters
let H = ""
//this needs to be input from UI- current temp in Fahrenheit
let tempFahrenheit = ""
//----------------------------------------------------//

//current temp at altitude in Kelvins - calculated with a helper function
let T = ""
//final result - calculated with a helper function
let P = ""
let exponent = ""

//----------------------element grabber variables-----------------------------//

const altitude = document.getElementById("altitude-el")
const tempInputEl = document.getElementById("tempInput-el")
const calcBtn = document.getElementById("calc")
const result = document.getElementById("result")
const clearBtn = document.getElementById("clear")

//-----------------------------------------------------------------------------//

let printout = ""
let finalPrint = ""



//----------- helper functions ---------------------------//

function feetToMeters(feet) {
	let result1 = (feet * 3.281).toFixed(6)
	return result1
}

function tempToKelvin(temp) {
	let result2 = ((temp + 459.67) * (5/9)).toFixed(6)
	return result2
}

function calcExponent() {
	let result3 = ( ( (G * -1) * M * (H-hSubO) ) / (R * T)  ).toFixed(6)
	return result3
}

function calculatePressureAtAlt() {
	let result4 = ( pSubO * Math.pow(e, calcExponent() ) ).toFixed(6)
	return result4
}

//-------------event listeners-----------------//
calcBtn.addEventListener("click", function () {
	let altInFeet = Number(altitude.value)
	//TODO - add exception handling if a letter or special char is entered on accident
	H = Number(feetToMeters(altInFeet))
	tempFahrenheit = Number(tempInputEl.value)
	//TODO - add exception handling if a letter or special char is entered accidentally
	T = Number(tempToKelvin(tempFahrenheit))
	P = Number(calculatePressureAtAlt())
	printout = `<p id = "final">
							${P}
						</p>
					`
	result.innerHTML = printout
	finalPrint = document.getElementById("final")
	altitude.value = ""
	tempInputEl.value = ""
		
						
})

clearBtn.addEventListener("click", function () {
	result.innerHTML = ""
	
})



