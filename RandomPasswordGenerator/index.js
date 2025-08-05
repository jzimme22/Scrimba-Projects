const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const minLength = 15
let pw1 = document.getElementById("newPW1")
let pw2 = document.getElementById("newPW2")
let password1 = ""
let password2 = ""

function generatePassword() {
     if (password1 != "") {password1 = ""} 
     if (password2 != "") {password2 = ""}   
    for (let i = 1; i <= minLength; i++) {
        let randomChar1 = Math.floor(Math.random() * characters.length)
        let randomChar2 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomChar1]
        password2 += characters[randomChar2] 
         
    }
    
    pw1.textContent = password1
    pw2.textContent = password2
}

function copyPassword1() {
    
    pw1.textContent = "Password copied"
}
function copyPassword2() {
    
    pw2.textContent = "Password copied"
}


