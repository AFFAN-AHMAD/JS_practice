const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;

    if (callCounter < 5) {
      console.log("errrr");
      throw new Error("not yet");
      //   return 'error'
    } else {
      return "asdfklas";
    }
  };
};
const wait = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));

const retry = async (fn, retries, interval, finalError = "failes") => {
  try {
    await fn();
  } catch (err) {
    if (retries <= 0) return Promise.reject(finalError);

    await wait(interval);
    return retry(fn, retries - 1, interval, finalError);
  }
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
