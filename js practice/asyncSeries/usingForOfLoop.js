const asyncTask = async function (params) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`completing ${params}`);
      }, params * 100);
    });
  };
  
  const promises = [asyncTask(3), asyncTask(2), asyncTask(5), asyncTask(7)];

  const asyncSeriesExecuter = async (args) => {
    for(let promise of args){
        let res = await promise;
        console.log('res',res);
    }
  };
  
  asyncSeriesExecuter(promises);