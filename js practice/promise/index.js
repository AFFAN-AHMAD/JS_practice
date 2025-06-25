const myPromnise = new Promise((res, rej) => {
  res("mypromise");
});
document.getElementById("my-btn").addEventListener("click", () => {
  console.log("asdfsaf");
  myPromnise.then((item) => {
    console.log("item", item);
  });
});
