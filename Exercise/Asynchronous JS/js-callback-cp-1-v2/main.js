function calculate(number1, number2, callback) {
  if (number1 % 2 === 0 && number2 % 2 === 0) {
    let subtractNum = number1 - number2;
    return callback(subtractNum);
  } else if (number1 % 2 !== 0) {
    let multiplyNum = number1 * number2;
    return callback(multiplyNum);
  } else if (number1 % 2 === 0) {
    let addNum = number1 + number2;
    return callback(addNum);
  }
}

module.exports = calculate;
