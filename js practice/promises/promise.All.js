/**
 * as per MDN
 * --> it returns a promise
 * --> it returns the result of all the resolved promises
 *     else returns with the first rejected promise
 * --> the result will be in the order of the given input
 *
 */

const myPromiseAll = function (taskList) {
  let noOfCompletedPromises = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    return taskList.forEach((currentPromise, index) => {
      currentPromise
        .then((val) => {
          result[index] = val;
          noOfCompletedPromises += 1;

          if (taskList.length == noOfCompletedPromises) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}
const taskList = [task(1000), task(5000), task(3000)];
//run promise.all
myPromiseAll(taskList)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);

function task2(time) {
  return new Promise(function (resolve, reject) {
    if (time > 3000) {
      reject("time limit exceeds");
    } else {
      setTimeout(function () {
        resolve(time);
      }, time);
    }
  });
}

const taskList2 = [task2(1000), task2(2000), task2(3000)];
//run promise.all
myPromiseAll(taskList2)
  .then((results) => {
    console.log("got results", results);
  })
  .catch(console.error);
