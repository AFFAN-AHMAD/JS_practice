const task3Element = document.getElementById('task-3');

function one(){
    alert('Hello World');
}


function two(variable){
    alert(variable)
}

function brandNew(var1, var2, var3){
    return`${var1} ${var2} ${var3}`;
}

one();
two('Hello World from the second function!');
const res = brandNew('Hello', 'World', 'from the third function!');
alert(res);
task3Element.addEventListener('click', one);

