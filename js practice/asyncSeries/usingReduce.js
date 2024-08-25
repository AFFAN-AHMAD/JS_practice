const asyncTask = async function (params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`completing ${params}`);
    }, params * 100);
  });
};

const promises = [asyncTask(3), asyncTask(2), asyncTask(5), asyncTask(7)];

const asyncSeriesExecuter = (args) => {
  args.reduce((acc, curr) => {
    return acc.then(() => {
      return curr.then((val) => console.log("val", val));
    });
  }, Promise.resolve());
//   here promise.resolve is used to run the accumulator 
};

asyncSeriesExecuter(promises);
