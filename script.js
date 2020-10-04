
const pass = {
  upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
  lowerCaseChar: "abcdefghijklmnopqrstuvwxyz", 
  numbersChar: "0123456789", 
  specialChar: "!@#$%^&*()_+-={}|[]\:<>?/" ,
}

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var passLengthInput, hasUppers, hasLowers, hasNumbers, hasSpecial;
var password = "";
var newPassString = "";


function writePassword() {

var password = generatePassword();

passwordText.value = password;
}

function generatePassword() {

  resetPasswordBox();

  collectInput();

  for (i = 0; i < passLengthInput; i++) {

    password += newPassString.charAt(Math.floor(Math.random() * newPassString.length));
  }
    
  return password;

}

function collectInput() {

  passLengthInput = prompt("The password length must be between 8-128: ");
  
  while ((passLengthInput < 8) || (passLengthInput > 128) || (isNaN(passLengthInput))) {

    passLengthInput = prompt("Try again, passsword MUST be a NUMBER between 8-128 characters long!: ");
  }
  
  passLengthInput = parseInt(passLengthInput);
  console.log(`User selected a password length of: ${passLengthInput}`);

  hasUppers = confirm("Would you like uppercase characters?");
  
  if (hasUppers) {
    
    newPassString += pass.upperCaseChar;
    console.log("Uppercase selected.");
  } else {
    console.log("Uppercase not selected.");
  }

  
  hasLowers = confirm("Would you like lowercase characters");
  
  if (hasLowers) {
    
    newPassString += pass.lowerCaseChar;
    console.log("Lowercase selected.");
  } else {
    console.log("Lowercase not selected.");
  }

  
  hasNumbers = confirm("Would you like number characters");
  
  if (hasNumbers) {
    
    newPassString += pass.numbersChar;
    console.log("Numbers selected");
  } else {
    console.log("Numbers not selected");
  }

  
  hasSpecial = confirm("Would you like special characters");
  
  if (hasSpecial) {
    
    newPassString += pass.specialChar;
    console.log("Spcecial characters selected");
  } else {
    console.log("Special characters not  selected");
  }

 evaluateInput();

}

function evaluateInput() {

  if ((!hasUppers) && (!hasLowers) && (!hasNumbers) && (!hasSpecial)) {

    alert("You must select at least one type of input!");

    collectInput();
  }
}

function resetPasswordBox() {
  
  password = "";
  newPassString = "";
}

generateBtn.addEventListener("click", writePassword);