'use strict';

function makeRobotAccountant() {
  let count = 0;

  const sum = num1 => num2 => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return num1 + num2;
  };

  const resetCount = () => {
    count = 0;
  };

  return {
    sum,
    resetCount,
  };
}

const getSum = makeRobotAccountant();

console.log(getSum.sum(2)(2));
console.log(getSum.sum(2)(2));
getSum.resetCount();
console.log(getSum.sum(2)(2));
console.log(getSum.sum(2)(2));

// console.log(getSum(2)(5));
// console.log(getSum(2)(5));
// console.log(getSum(2)(5));
// console.log(getSum(2)(5));
// console.log(getSum(2)(5));


module.exports = makeRobotAccountant;
