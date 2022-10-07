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
  
  if (qUpper == 'Y') {
   characters = characters + upperls;
  } else if (qUpper == 'N'){
    window.prompt("There will be no uppercase characters");
  } else{
    window.prompt("Response not recognized");
    return;
  }
  let qLower = prompt("Lowercase characters? Y/N");
  if (qLower == 'Y'){
    characters = characters + lowerls;
  } else if (qLower == 'N'){
    window.prompt("There will be no lowercase characters");
  } else{
    window.prompt("Response not recognized");
    return;
  }
  let qNum = prompt('Numbers? Y/N');
  if(qNum == 'Y'){
    characters = characters + numls;
  } else if (qNum == 'N'){
    window.prompt("There will be no numbers");
  } else{
    window.prompt("Response not recognized");
    return;
  }
  let qSym = prompt('Sybmols? Y/N');
  if(qSym == 'Y'){
    characters = characters + symls;
  } else if (qSym == 'N'){
    window.prompt("There will be no symbols");
  } else{
    window.prompt("Response not recognized");
    return;
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
}else{
  prompt("Improper length")
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
