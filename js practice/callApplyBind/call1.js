const person = {
  name: "Affan",
  greet: function (hobby1) {
    console.log(`Hi I am ${this.name}, my hobbies are ${hobby1}`);
  },
};

person.greet("playing chess");

const person2 = {
  name: "Ahmad",
};

person.greet.call(person2, "playing guitar");
