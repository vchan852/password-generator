// Assignment Code
var generateBtn = document.querySelector("#generate");


let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacterArray = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", "|", "/", "'", ":", ";", "<", ",", ">", ".", "?"];
//arrays of characters

var passwordArray = [];
//passwordArray starts empty in order to add other password requirements (such as lower,upper,number,special character types into the password

// Write password to the #password input
function generatePassword() {
  var passwordMessage = "Your password must contain 8 - 128 characters.";
  var userInput = prompt(passwordMessage);
  //pop up message for when window is first opened

  while ((userInput !== null && isNaN(userInput)) || userInput < 8 || userInput > 128) {
    alert("This doesn't meet password requirement. Try again.");
    userInput = prompt(passwordMessage);
  }
  //password must have more than 8 characters and less than 128 character.
  //password will not generate if these requirements aren't met

  console.log(userInput);


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
  }

  if (upperCaseChoice) {
    passwordArray = passwordArray.concat(upperCaseArray);
  }

  if (lowerCaseChoice) {
    passwordArray = passwordArray.concat(lowerCaseArray);
  }

  if (specialCharacterChoice) {
    passwordArray = passwordArray.concat(specialCharacterArray);
  }

  if (numberChoice) {
    passwordArray = passwordArray.concat(numberArray);
  }

  console.log(passwordArray);

  let password = [];
  for (i = 0; i < userInput; i++) {
    var randomCharacter = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    password.push(randomCharacter);
  }
  console.log(password);
  return password.join("");
}


function writePassword() {
  console.log("here");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
