const retry = (fn, count, delay, err = "failes") => {
  // console.log('count',count);
  return new Promise(async (resolve, reject) => {
    console.log("fn", fn);
    let success = false;
    let res = "";
    while (count >= 0 && !success) {
      console.log("count", count);
      console.log("success", success);
      res = await fn(count)
        .then((ress) => {
          if (ress) {
            success = true;
          }
          console.log("ress", ress);
        })
        .catch((err) => {
          console.log("err", err);
          count--;
        });
      // console.log('res',res);
    }
    //   console.log('res',res);
    if (res) resolve(res);
    reject(err);
  });
};

const getTestFunc = (callCounter) => {
  // let callCounter = 0;
  return async () => {
    // callCounter+=1;

    if (callCounter < 5) {
      console.log("errrr");
      //   throw new Error("not yet");
      return "error";
    } else {
      return "asdfklas";
    }
  };
};

const test = async () => {
  console.log("success1");
  await retry(getTestFunc(), 2);
  // console.log('success');
  // await retry(getTestFunc(), 3);
  // console.log('failedd');
};
// retry(asyncFn, retries, dela, (finalError = "failed"));
test().then(console.log).catch(console.error);
