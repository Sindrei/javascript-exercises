const sumAll = function (a, b) {
  let c = 0;
  let sum = 0;

  if (
    Number.isInteger(a) === false ||
    Number.isInteger(b) === false ||
    a < 0 ||
    b < 0
  ) {
    return "ERROR";
  } else {
    if (a > b) {
      c = b;
      b = a;
      a = c;
    }
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
