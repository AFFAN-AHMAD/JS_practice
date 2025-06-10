const task3Element = document.getElementById('task-3');

function one(){
    alert('Hello World');
}


function two(variable){
    alert(variable)
}

one();
two('Hello World from the second function!');
task3Element.addEventListener('click', one)