const name = {
  first: "First",
  last: "Last",
};

const printName = function (location, state, country) {
  console.log(
    `${this.first} ${this.last} lives in ${location}, ${state}, ${country}`
  );
};

const printNameStored = printName.bind(name);
printNameStored();
