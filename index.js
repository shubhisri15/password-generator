const upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

const lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 

const numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolChars = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; 

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")

let lengthInput = document.getElementById("password-length");
let slider = document.getElementById("myRange");

// Sync input → slider
lengthInput.addEventListener("input", () => {
  slider.value = lengthInput.value;
});

slider.addEventListener("input", () => {
  lengthInput.value = slider.value;
});

function generateRandomPassword() {
  let passwordLength = parseInt(lengthInput.value, 10)
  let result = "";
  
  let characters = []
  if (uppercase.checked) characters = characters.concat(upperCaseChars);
  if (lowercase.checked) characters = characters.concat(lowerCaseChars);
  if (numbers.checked) characters = characters.concat(numberChars);
  if (symbols.checked) characters = characters.concat(symbolChars);
  
  if (characters.length === 0) {
    alert("Please select at least one character type.");
    return "";
  }
  
  for (let i = 0; i < passwordLength; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}

function generatePasswords() {
    passwordOne.textContent = generateRandomPassword()
    passwordTwo.textContent = generateRandomPassword()
}





