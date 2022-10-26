const fibonacci = (n) => {
  Number(n);
  if (n < 0) {
    return "OOPS";
  }
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 1; i < n; i++) {
    c = b;
    b += a;
    a = c;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
