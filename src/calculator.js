const addTwoNumbers = (a, b) => {
  return a + b;
};

const subtractTwoNumbers = (a, b) => {
  return a - b;
};

const multiplyTwoNumbers = (a, b) => {
  return a * b;
};

const divideTwoNumbers = (a, b) => {
  return a / b;
};

const calculator = {
  add: addTwoNumbers,
  subtract: subtractTwoNumbers,
  multiply: multiplyTwoNumbers,
  divide: divideTwoNumbers,
};

export default calculator;
