const name1  = {
    first: 'Affan',
    last: 'Ahmad'
};

const name3 = {
    first: 'Hassan',
    last: "Ahmad"
};

const printName = function(location, state, country){
    console.log(`${this.first} ${this.last} lives in ${location}, ${state}, ${country}`);
};

printName.apply(name1,['Loni','UP','India']);
// Affan Ahmad lives in Loni, UP, India

// the difference between call and apply is the way the arguments are passed
// the function can be used to call