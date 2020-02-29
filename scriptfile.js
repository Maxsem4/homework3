let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Write password to the #password input
function generatePasswordOptions() {
  // let password = generatePassword();
  // let passwordText = document.querySelector("#password");

  //window alerts:
  let lengthInput = parseInt(
    window.prompt("How many caracters would you like your password to contain?")
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(lengthInput) === true) {
    alert("Password length must be provided as a number");
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (lengthInput < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (lengthInput > 128) {
    alert("Password length must less than 128 characters");
    return;
  }
  //Create a variable that holds and checks for teh proper options
  let checkforUppercase = confirm("Click OK if utilizing UpperCase");
  console.log(checkforUppercase);

  let checkforLowercase = confirm("Click OK if utilizing Lowercase");
  console.log(checkforLowercase);

  let checkforNumber = confirm("Click OK if utilizing Numbers");
  console.log(checkforNumber);

  let checkforSpecial = confirm("Click OK if utilizing Special Characters");
  console.log(checkforSpecial);

  //Create Conditional Statements
  if (
    checkforLowercase === false &&
    checkforUppercase === false &&
    checkforNumber === false &&
    checkforSpecial === false
  ) {
    alert("You must check at least one ");
    return;
  }
  //Create a variable that holds the users input choice
  let userChoice = {
    length: lengthInput,
    checkforLowercase: checkforLowercase,
    checkforUppercase: checkforUppercase,
    checkforNumber: checkforNumber,
    checkforSpecial: checkforSpecial
  };
  return userChoice;
}

//Get random element from array
function Randomize(arr) {
  var IndexArray = Math.floor(Math.random() * arr.length);
  var Elment = arr[IndexArray];
  return Elment;
}

//Create the pasword Generator function
function generatePassword() {
  let Options = generatePasswordOptions();

  let result = [];

  //Create an array the hold the types of characters to include
  let possibleChar = [];

  //Options that will definitely be used
  let toBeUsed = [];

  //Conditional statemnent to add possible characters to to be used characteers
  if (Options.checkforLowercase) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);
    toBeUsed.push(Randomize(lowerCasedCharacters));
  }
  if (Options.checkforUppercase) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
    toBeUsed.push(Randomize(upperCasedCharacters));
  }
  if (Options.checkforNumber) {
    possibleChar = possibleChar.concat(numericCharacters);
    toBeUsed.push(Randomize(numericCharacters));
  }
  if (Options.checkforSpecial) {
    possibleChar = possibleChar.concat(specialCharacters);
    toBeUsed.push(Randomize(specialCharacters));
  }

  //Create a variable that randomizes the possiblechar array
  for (let i = 0; i < Options.length; i++) {
    let maybeChar = Randomize(possibleChar);
    result.push(maybeChar);
    //a b
  }
  //Create a variable that randomly chooses options from the possibleChar array
  for (let i = 0; i < toBeUsed.length; i++) {
    result[i] = toBeUsed[i];
    //4 5
  }
  //Get references to generate the element
  return result.join("");
}

//Create a variable that will grab the awesome id
let buttonSelect = document.querySelector("#awesome");

//Display
function writePassword() {
  let password1 = generatePassword();

  //query the placemtn of data onto your HTML using querySelectors
  let passwordDisplay = document.getElementById("password");

  //Give the value
  passwordDisplay.value = password1;
}

//Event Listener
buttonSelect.addEventListener("click", writePassword);
