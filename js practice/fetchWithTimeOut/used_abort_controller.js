const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const signal = controller.signal; //this will help to identify the API 
    let timerId = null;
    fetch(url, { signal })
      .then((resp) => {
        resp
          .json()
          .then((result) => {
            clearTimeout(timerId);
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
    timerId = setTimeout(() => {
      console.log("Aborted");
      controller.abort();
      reject(new Error("Time limit exceed"));
    }, duration);
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 10)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });
class name {
    constructor(parameters) {
    }
}

// Aborted
// error
