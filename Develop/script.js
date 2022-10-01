// Assignment code here
document.getElementById("generate");
var passwordo = document.getElementById("password");
upperls = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
lowerls = 'abcdefghijklmnopqrstuvwxyz';
numls = '1234567890'
symls = '!@#$%^&*()?<>'

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  var result = '';
  var characters = '';
  let qUpper = prompt("Uppercase characters? Y/N");
  let qLower = prompt("Lowercase characters? Y/N");
  let qNum = prompt('Numbers? Y/N');
  let qSym = prompt('Sybmols? Y/n');
  if (qUpper == 'Y') {
   characters = characters + upperls;
  }
  if (qLower == 'Y'){
    characters = characters + lowerls;
  }
  if(qNum == 'Y'){
    characters = characters + numls;
  }
  if(qSym == 'Y'){
    characters = characters + symls;
  }
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

// Write password to the #password input
function writePassword() {
  let pLength = prompt("How many characters? Min 8, Max 128")
if(pLength >= 8 && pLength <= 128){
  var password = generatePassword(pLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
