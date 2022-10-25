const palindromes = function (word) {
  const wordNoPunc = word.toLowerCase().replace(/[^a-z]/g, "");
  const wordReverse = wordNoPunc.split("").reverse().join("");
  return wordNoPunc === wordReverse;
};

// Do not edit below this line
module.exports = palindromes;
