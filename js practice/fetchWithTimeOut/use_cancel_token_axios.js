const axios = require('axios')
const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    const cancelTokenSource = axios.CancelToken.source();
    console.log('cancelTokenSource', cancelTokenSource);
    let timerId = null;
    axios.get(url, { cancelToken: cancelTokenSource.token })
      .then((resp) => {
        // console.log("resp", resp)

        clearTimeout(timerId);
        resolve(resp.data);
      })
      .catch((err) => {
        reject(err);
      });
    timerId = setTimeout(() => {
      console.log("Aborted");
      cancelTokenSource.cancel("Operation canceled due to new request.");
      // reject(new Error("Time limit exceed"));
    }, duration);
  });
};

fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 1000)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });


  // Aborted
  // error

