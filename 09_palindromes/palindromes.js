const palindromes = function (word) {
  const wordNoPunc = word
    .toLowerCase()
    .split("")
    .filter((a) => {
      switch (a) {
        case "!":
          return false;
          break;
        case "?":
          return false;
          break;
        case ",":
          return false;
          break;
        case ".":
          return false;
          break;
        case " ":
          return false;
          break;
        default:
          return true;
          break;
      }
    })
    .join("");
  const wordReverse = wordNoPunc.split("").reverse().join("");
  return wordNoPunc === wordReverse;
};

// Do not edit below this line
module.exports = palindromes;
