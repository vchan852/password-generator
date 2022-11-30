// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


var upperCaseChoice = confirm(
  "Would you want to include an uppercase letter in your password?"
);

var lowerCaseChoice = confirm(
  "Would you want to include a lowercase letter in your password?"
);

var numberChoice = confirm(
  "Would you want to include a number in your password?"
);

var specialCharacterChoice = confirm(
  "Would you want to include a special character in your password?"
);

console.log(upperCaseChoice);
console.log(lowerCaseChoice);
console.log(numberChoice);
console.log(specialCharacterChoice);

if (
  !upperCaseChoice && !lowerCaseChoice && !specialCharacterChoice && !numberChoice
) {
  alert("You must meet all character types");
  return generatePassword
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
