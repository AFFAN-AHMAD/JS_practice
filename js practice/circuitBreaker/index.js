// question link --> https://alpha.learnersbucket.com/s/courses/658bee23e4b0174a3cb6c294/take

const testFunction = () => {
  let count = 0;
  return function () {
    count++;
    if (count < 4) throw "failed";
    else return hello;
  };
};

const circuitBreaker= function(fn, numberOfAttempts, duration){
    let count = 0;


}

let t = testFunction();
let c = circuitBreaker(t,3,200);

console.log(c())
console.log(c())
console.log(c())

console.log(c())
console.log(c())
console.log(c())


setTimeout(()=>{
    console.log(c());
},300)