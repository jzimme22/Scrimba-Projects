import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js"

const firebaseConfig = {
	databaseURL: "https://daslymzmaillist-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
console.log(app)
const database = getDatabase(app)
const referenceInDb = ref(database, "mailingList") 

const container = document.getElementById("container")
const inputEl = document.getElementById("input-el")
const saveData = document.getElementById("saveData")
let email = ""
let emailExists = false;

document.addEventListener('DOMContentLoaded', function() {
	saveData.addEventListener("click", function () {
		email = inputEl.value
		//check input for blank or duplicate entries
		if (email.trim() === "" || email === null) {
			container.innerHTML += `<div id = "emptyEmail" class = "error-message">Invalid entry - please try again</div>`
			inputEl.value = ""
		} else {
			onValue(referenceInDb,function(snapshot) {
				if (snapshot.exists()) {
					const snapshotValues = snapshot.val()
					const entries = Object.values(snapshotValues)
					//check list of entries for duplicate values
					for (let i = 0; i < entries.length; i++) {
						if (entries[i] === email) {
							emailExists = true;
						} 
					}
					if (!emailExists) {
						push(referenceInDb, email)
						inputEl.value = ""
					} 	
				}
			}) 
		}	
	})
})