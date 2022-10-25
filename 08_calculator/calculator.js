const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = (a) => {
  return a.reduce((sum, num) => {
    return sum + num;
  }, 0);
};

const multiply = (a) => {
  return a.reduce((multiply, num) => {
    return multiply * num;
  });
};

const power = (a, b) => {
  return a ** b;
};

const factorial = (a) => {
  let answer = a;
  if (a === 0) {
    return 1;
  } else {
    for (let num = a - 1; num > 0; num--) {
      answer = answer * num;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
