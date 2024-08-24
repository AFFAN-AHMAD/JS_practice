const uuid = require("uuid");
function factorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const memoize = (fn) => {
  let functionMap = new Map(); //a, b
  let valueMap = new Map();
  return (val) => {
    //
    let res = "";
    if (functionMap.has(fn)) {
      let value = functionMap.get(fn);
      // console.log('value',value);
      // console.log('valueMap',valueMap);
      if (valueMap.has(`${value}${val}`)) {
        res = valueMap.get(`${value}${val}`);
        console.log("resInIF", res);
      } else {
        res = fn(val);
        console.log("resinINNer", res);
        valueMap.set(`${value}${val}`, res);
      }
    } else {
      const uuidV = uuid.v4();
      functionMap.set(fn, uuidV);
      // console.log('uuidV',uuidV);
      // const newVal  = functionMap.get(uuidV);
      const latest = fn(val);
      // console.log('val',val);

      valueMap.set(`${uuidV}${val}`, latest);
      res = latest;
    }
    return res;
  };
};

const memoizedFactorial = memoize(factorial);
let a = memoizedFactorial(50);
console.log("a", a);
b = memoizedFactorial(50);
console.log("b", b);

c = memoizedFactorial(10);
console.log("c", c);
