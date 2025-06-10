 let defaultResult = 0;

 let currentResult= defaultResult;


 function add() {
    console.log('currentResult',currentResult);
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, "")
 }
 addBtn.addEventListener('click',add)
 