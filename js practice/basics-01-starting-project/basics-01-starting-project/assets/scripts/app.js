let defaultResult = 0;

let currentResult = defaultResult;
let calcOutput = 0;
function clearInput() {
  userInput.value = "";
}
function add() {
  const enteredValue = userInput.value;
  if (enteredValue === "") return;
  currentResult = currentResult + Number(enteredValue);
  calcOutput = `${calcOutput} + ${enteredValue}`;
  outputResult(currentResult, calcOutput);
  clearInput();
}

function subtract() {
  const enteredValue = userInput.value;
  if (enteredValue === "") return;
  currentResult = currentResult - Number(enteredValue);
  calcOutput = `${calcOutput} - ${enteredValue}`;
  outputResult(currentResult, calcOutput);
  clearInput();
}

function multiply() {
  const enteredValue = userInput.value;
  if (enteredValue === "") return;
  currentResult = currentResult * Number(enteredValue);
  calcOutput = `${calcOutput} * ${enteredValue}`;
  outputResult(currentResult, calcOutput);
  clearInput();
}

function divide() {
  const enteredValue = userInput.value;
  if (enteredValue === "") return;
  currentResult = currentResult / Number(enteredValue);
  calcOutput = `${calcOutput} / ${enteredValue}`;
  outputResult(currentResult, calcOutput);
  clearInput();
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
