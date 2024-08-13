const fetchWithTimeout = function (api, time) {
    // ... your code goes here;
    return new Promise(async (resolve, reject) => {
      const startTime = performance.now();
      const response = await fetch(api);
      const data = await response.json();
      const endTime = performance.now();
      const diff = endTime - startTime;
      if (time > diff) resolve(data);
      else reject(new Error('time limit exceed'));
    });
  };
  
  fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 10)
    .then(resp => {
      console.log(resp);
    })
    .catch(error => {
      console.error(error);
    });
  
  // Aborted
  // error
  