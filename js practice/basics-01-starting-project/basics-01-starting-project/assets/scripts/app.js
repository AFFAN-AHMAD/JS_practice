let defaultResult = 0;

let currentResult = defaultResult;
let calcOutput = 0;
function clearInput() {
  userInput.value = "";
}
function add() {
  if (userInput.value === "") return;
  calcOutput = `${currentResult} + ${userInput.value}`;
  currentResult = currentResult + Number(userInput.value);
  outputResult(currentResult, calcOutput);
  clearInput();
}

function subtract() {
  if (userInput.value === "") return;

  calcOutput = `${currentResult} - ${userInput.value}`;
  currentResult = currentResult - Number(userInput.value);
  outputResult(currentResult, calcOutput);
  clearInput();
}

function multiply() {
  if (userInput.value === "") return;

  calcOutput = `${currentResult} * ${userInput.value}`;
  currentResult = currentResult * Number(userInput.value);
  outputResult(currentResult, calcOutput);
  clearInput();
}

function divide() {
  if (userInput.value === "") return;

  calcOutput = `${currentResult} / ${userInput.value}`;
  currentResult = currentResult / Number(userInput.value);
  outputResult(currentResult, calcOutput);
  clearInput();
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
