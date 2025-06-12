const asyncTask = async function (params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`completing ${params}`);
    }, params * 100);
  });
};

const promises = [asyncTask(3), asyncTask(2), asyncTask(5), asyncTask(7)];

const asyncSeriesExecuter = (args) => {
  args.reduce((acc, curr, index) => {
    return acc.then((val1) => {
      // console.log('index',index);
      if(index == 1){
        console.log('val',val1);
      }
      return curr.then((val) => console.log("val", val));
    });
  });
//   here promise.resolve is used to run the accumulator 
};

asyncSeriesExecuter(promises);












// let array = [1,2,3,4,5];

// array.reduce((acc,curr,index)=>{
//   console.log('index11111',index);
// }, 0);


// array.forEach((item, index)=>{
//   console.log('indexeachh',index);
// })