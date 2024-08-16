const axios = require("axios");
const cachedApiCall = function (duration) {
  // your code goes here...
  let approve = true;
  console.log("duration", duration);
  let timer = setTimeout(() => {
    approve = false;
    clearTimeoutId()
  }, duration);
  const clearTimeoutId = () =>{
    clearTimeout(timer);
  }
  let cachedData = null;
  let firstCall = true;
  return function (api, obj) {
    return new Promise((resolve, reject) => {
      if (approve && !firstCall) {
        console.log("cached data");
        return resolve(cachedData);
      } else {
        console.log("new data");
        axios.get(api).then((resp) => {
          cachedData = resp.data;
          return resolve(cachedData);
        });
        firstCall = false;
      }
    });
  };
};

const call = cachedApiCall(1500);

// first call
// an API call will be made and its response will be cached
call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
  console.log('init',a)
);
//"making new api call"
/*
 {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 }
 */

// cached response will be returned
// it will be quick
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log('700',a)
  );
}, 700);

/*
 {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 }
 */
 setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
      console.log('800',a)
    );
  }, 800);

  setTimeout(() => {
    call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
      console.log('600',a)
    );
  }, 600);

  
// a fresh API call is made
// as time for cached entry is expired
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/todos/1", {}).then((a) =>
    console.log('2000',a)
  );
}, 2000);
//"making new api call"
/*
 {
   "userId": 1,
   "id": 1,
   "title": "delectus aut autem",
   "completed": false
 }
 */
