const arr = [1, 2, 3, 4, 5];
const initializer = {
  add: 0,
  mul: 1,
  div: 1,
  sub: 0,
};
const operator = {
  add: "+",
  mul: "*",
  div: "/",
  sub: "-",
};
const result = (array, method) => {
  return array.reduce((prev, current) => {
    switch (operator[method]) {
      case "+":
        return prev + current;
      case "*":
        return prev * current;
      case "/":
        return prev / current;
      case "-":
        return prev - current;
      default:
        throw new Error("Invalid method");
    }
  }, initializer[method]);
};

console.log(result(arr, "add"));
console.log(result(arr, "mul"));
console.log(result(arr, "div"));
console.log(result(arr, "sub"));
console.log(result(arr, "abb"));
