const pipe = (obj) => (...values) => {
    // console.log("arguments", obj)
    // console.log("values", values)
    const newObj = {};
    for (const key in obj) {
      if (typeof obj[key] == 'object') {
        newObj[key] = pipe(obj[key])(...values)
      } else if (typeof obj[key] == 'function') {
        newObj[key] = obj[key](...values)
      }
    };
    return newObj;
  
  };
  const test = {
    a: (a, b, c, d) => a + b + c - d,
    b: {
      c: (a, b, c) => a + b + c,
      d: (a, b, c) => a + b + c
    }
  }
  console.log(pipe(test)(1, 2, 3, 4));
//   { a: 2, b: { c: 6, d: 6 } }