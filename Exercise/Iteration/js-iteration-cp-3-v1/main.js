function printNumber(totalNumber) {
  line = "";

  for (i = 0; i <= totalNumber - 1; ++i) {
    let patternNumber = (i % 3) + 1;
    line += patternNumber + "";
  }
  return line;
}

console.log(printNumber(7));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
