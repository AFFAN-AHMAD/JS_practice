const Calculator = function(init= 0) {
  this.total= init
  this.add= function (val) {
    this.total += val;
    return this;
  };
  this.sub= function (val) {
    this.total -= val;
    return this;
  };
  this.multiply= function(val){
    // if(!this.total){
    //   this.total = val
    // }else{
      this.total*=val
    // };
    return this
  };
  this.divide= function(val){
    if(!this.total){
      this.total = 1/val
    }else{
      this.total/=val
    };
    return this
  }
};
const calculator = new Calculator(23)
calculator.add(10).sub(2).multiply(2).divide(4);
console.log("calculator.total", calculator.total); // Output: calculator.total 8

const newCal = new Calculator()
newCal.multiply(10).sub(5);
console.log("newCal.total", newCal.total);
