
const atmosPressure = 12.29513
const fpInput = document.getElementById("fpInput")
const itInput = document.getElementById("itInput")
const ftInput = document.getElementById("ftInput")
const calcBtn = document.getElementById("calc")
const result = document.getElementById("result")
const clearBtn = document.getElementById("clear")
let finalPrint = ""
let printout = ""
let finalResult = ""
let error = ""


calcBtn.addEventListener("click", function () {
	let finalPressure = Number(fpInput.value)
	let initTemp = Number(itInput.value)
	let finalTemp = Number(ftInput.value)
	let fpPlusAp = finalPressure + atmosPressure
	let num = initTemp + 460
	let denom = finalTemp + 460
		
	finalResult = ( fpPlusAp * ( num / denom )  )- atmosPressure 
	printout = `<p id = "final">
							${finalResult}
						</p>
					`
	result.innerHTML = printout
	finalPrint = document.getElementById("final")
	fpInput.value = ""
	itInput.value = ""
	ftInput.value = ""	
						
})
clearBtn.addEventListener("click", function () {
	result.innerHTML = ""
	
})
