const promise = Promise.resolve("I am resolved");

const example = async (promise) => {
  try {
    const resp = await promise;
    console.log("resp", resp);
    return resp;
  } catch (err) {
    console.log(err);
  } finally {
    console.log("task done");
  }
};

example(promise).then((val) => {
  console.log(val);
});
// console.log("eoxample", example(promise));
// let resp = async example()
