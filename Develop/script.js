// Assignment Code
var generateBtn = document.querySelector("#generate");


let upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacterArray = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "{", "]", "}", "|", "/", "'", ":", ";", "<", ",", ">", ".", "?"];
//arrays of characters

var passwordArray = [];
//passwordArray starts empty in order to add other password requirements (such as lower,upper,number,special character types into the password
