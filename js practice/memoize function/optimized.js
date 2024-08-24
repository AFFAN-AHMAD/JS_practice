function factorial(n) {
    if (n === 1 || n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
}
factorial.identifier = 'identity'
  
  const memoize = (fn) => {
    const cache = new Map()
    const identifier = fn.identifier ?? fn
    // console.log('identifier',identifier);
    return (val) => {
        // console.log('fn',fn);
    const key = `${identifier}${val}`
    // console.log('key',key);
    if(cache.has(key)){
        console.log("inside", cache.get(key))
            return cache.get(key)
        };
         const eval = fn(val);
         cache.set(key, eval)
         return eval
    //   return res;
    };
  };
  
  const memoizedFactorial = memoize(factorial);
  let a = memoizedFactorial(15);
  console.log("a", a);
  b = memoizedFactorial(55);
  console.log("b", b);
  
  c = memoizedFactorial(10);
  console.log("c", c);
  
  d = memoizedFactorial(15);
  console.log("c", d);
  