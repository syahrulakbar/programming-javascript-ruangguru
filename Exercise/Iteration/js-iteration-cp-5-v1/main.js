function generateParenthesesPair(numberOfPairs) {
  let front = "(";
  let back = ")";
  if (numberOfPairs == 0) {
    return "";
  }
  for (let i = 1; i <= numberOfPairs; i++) {
    return `${front.repeat(numberOfPairs)}${back.repeat(numberOfPairs)}`;
  }
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
