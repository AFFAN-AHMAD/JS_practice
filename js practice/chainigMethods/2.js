const computeAmount = function () {
  this.total = 0;
  this.lacs = function (val) {
    this.total += val * Math.pow(10, 5);
    return this;
  };
  this.crores = function (val) {
    this.total += val * Math.pow(10, 7);
    return this;
  };
  this.hundreds = function (val) {
    this.total += val * Math.pow(10, 2);
    return this;
  };
  this.thousands = function (val) {
    this.total += val * Math.pow(10, 3);
    return this;
  };
  this.tens = function (val) {
    this.total += val * 10;
    return this;
  };
  this.unit = function (val) {
    this.total += val;
    return this;
  };

  this.value = () => console.log("this.total", this.total);
};
const compute = new computeAmount();
compute.lacs(15).crores(5).crores(2).unit(25).value();
