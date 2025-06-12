const asyncTask = async function (params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`completing ${params}`);
    }, params * 100);
  });
};

const promises = [asyncTask(3), asyncTask(2), asyncTask(5), asyncTask(7)];
const executer = (arg, index) => {
  arg[index].then((res) => {
    console.log("res", res);
    index++;
    if (index < arg.length) {
      executer(arg, index);
    }
  });
};

const asyncSeriesExecuter = async (args) => {
  let index = 0;
  // console.log('res',res);
  executer(args, index);
};

asyncSeriesExecuter(promises);

