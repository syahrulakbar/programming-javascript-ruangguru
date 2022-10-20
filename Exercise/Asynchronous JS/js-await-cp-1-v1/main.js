async function calculate(number1, number2) {
  let subtractNum = number1 - number2;
  let addNum = number1 + number2;
  let multiplyNum = number1 * number2;
  return new Promise((resolve, reject) => {
    if (number1 === 0 && number2 === 0) {
      reject("number1 and number2 cannot be 0");
    } else if (number1 % 2 === 0 && number2 % 2 === 0) {
      resolve(subtractNum);
    } else if (number1 % 2 !== 0) {
      resolve(multiplyNum);
    } else if (number1 % 2 === 0) {
      resolve(addNum);
    }
  });
}

function e(a, b) {
  calculate(a, b)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
}

console.log(e(0, 0));
console.log(e(2, 2));
console.log(e(1, 2));
console.log(e(3, 2));
module.exports = calculate;
