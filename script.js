// Assignment Code

/* 
  script.js provides the user with a secure password between
  the lengths of 8-128 characters. It provides the user the
  option to include upper case, lower case, numbers, and
  symbols in their password.
*/

/*
Instantiate the pass object to store our constant values, our password string components.
We are using strings as a string is what is going to be returned to our user, this allows
for less computations and less array mutation.
*/
const pass = {
  upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // String to contain our upperCase characters.
  lowerCaseChar: "abcdefghijklmnopqrstuvwxyz", // String to contain our lowerCase characters.
  numbersChar: "0123456789", // String to contain our numbers characters.
  specialChar: "!@#$%^&*()_+-={}|[]\:<>?/" // String to contain our symbol characters.
}

// Declare our generateBtn.
var generateBtn = document.querySelector("#generate");
// Declare our passwordText box.
var passwordText = document.querySelector("#password");

// Declare our password variables.
var passLengthInput, hasUppers, hasLowers, hasNumbers, hasSpecialChars;
var password = "";
var newPassString = "";

/*
  writePassword() stores the current password generated
  from the generatePassword() method and shows it to the
  user via the passwordText box.
*/
function writePassword() {

// Store the password variable with the returnd value of generatePassword().

var password = generatePassword();

// Show the user the password in the passwordText box.

passwordText.value = password;
}
/* 
   generatePassword() concatenates the supplied
   user input to return the password value to
   the writePassword() method.
   @return password, the variable containing our password.
*/
function generatePassword() {

  // Clear out the password value so the user can generate a clean new password.
  resetPasswordBox();

  // Call collectInput() to gather our users' input.
  collectInput();

  // Loop through our newPassString based on the desired lengh of the password.
  for (i = 0; i < passLengthInput; i++) {

    // Using the contents of the newPassString, randomly assign a character to password variable.
    password += newPassString.charAt(Math.floor(Math.random() * newPassString.length));
  }
    // Return the password value.
  return password;

}

/*
  The collectInput() function simply prompts the user for
  their input regarding how they want to design their
  password string. Collects the desired password length
  and the desired password character components.
*/
function collectInput() {

  // Get the desired password length from the user.
  passLengthInput = prompt("Desired passworth length (8-128: ");
  // Validate the user's input to ensure the length requirements are met.
  while ((passLengthInput < 8) || (passLengthInput > 128 || (isNaN(passLengthInput)))) {

    // Gently nudge the user in the correct direction
    passLengthInput = prompt("Desired passsword MUST be a NUMBER between 8-128 chars long!: ");
  }
  // Make our passLengthInput value a valid number.
  passLengthInput = parseInt(passLengthInput);
  console.log(`User selected a password length of: ${passlengthInput}`);



  // Ask the user if they want uppercase chars, set hasUppers flag appropriately.
  hasUppers = confirm("Would you like uppercase characters?");
  // If the user wants lowercase characters add our lowerCase string to the newPassString variable.
  if (hasUppers) {
    newPassString += pass.upperCaseChar;
    console.log("Uppercase selected.");
  } else {
    console.log("Uppercase not selected.");
  }

  // Ask the user if they want lower chars, set hasLowers flag appropriately.
  hasLowers = confirm("Would you like lowercase characters");
  // If the user wants lowercase characters add our lowerCase string to the newPassString variable.
  if (hasLowers) {
    // concatenate lowerCase 
    newPassString += pass.lowerCaseChar;
    console.log("Lowercase selected.");
  } else {
    console.log("Lowercase not selected.");
  }

  // Ask the user if they want numers, set hasNumbers flag appropriately.
  hasNumbers = confirm("Would you like number characters");
  // If the user wants numbers add our numbers string to the newPassString variable.
  if (hasNumbers) {
    // concatenate numbers value to the newPassString.
    newPassString += pass.numbersChar;
    console.log("Numbers selected");
  } else {
    console.log("Numbers not selected");
  }

  // Ask the user if they want numers, set hasSpecialChars flag appropriately.
  hasSpecialChars = confirm("Would you like special characters");
  // If the user wants special characters add our special string to the newPassString variable.
  if (hasSpecial) {
    // concatenate special value to the newPassString.
    newPassString += pass.specialChar;
    console.log("Spcecial characters selected");
  } else {
    console.log("Special characters not  selected");
  }

  // Check to ensure the user selected atleast one of the values from the prompts.
  evaluateInput();

}




/*
  The evaluateInput() function determines if the user
  selected at least one password option, if not it
  sends them back to the collectInput() function to
  start over.
*/
function evaluateInput() {


  // If our user selects no values, send them back to the beginning.

  if ((!hasUppers) && (!hasLowers) && (!hasNumbers) && (!hasSpecial)) {

    // Alert the user that they did not select one type of input.
    alert("You must select at least one type of input!");

    // call the collectInput() function again to get input.
    collectInput();
  }
}
/*
  The resetPasswordBox() function cleans out
  the password variable so that each time the
  user hits the Generate Password box they
  get a fresh new password.
*/
function resetPasswordBox() {
  // reset the password value to default.
  password = "";
  newPassString = "";
}
// Add event listener to generateBtn button to listen for user clicks.
generateBtn.addEventListener("click", writePassword);