const name = {
  first: "Affan",
  last: "Ahmad",
};

const printName = function (
  location = "loni",
  state = "UP",
  country = "India"
) {
  console.log(
    `${this.first} ${this.last} lives in ${location}, ${state}, ${country}`
  );
};

const name2 = {
  first: "Hassan",
  last: "Ahmad",
};

printName.call(name2);
// output: Hassan Ahmad

printName.call(name);
// output: Affan Ahmad

printName.call(name2, 'NOIDA','UP','India');
// arguments from 1st index are passed to the function, 
// while the first argument is always the scope

