function countAndSum(number) {
  //your code here
  let line = "";
  let total = 0;
  let lastNum = 0;
  for (let i = 0; i <= number - 1; ++i) {
    let patternNumber = (i % 3) + 1;
    line += patternNumber + "";

    lastNum = line
      .split("")
      .map(Number)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  }

  return lastNum;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(13)); // 0
console.log(countAndSum(0)); // 0

module.exports = countAndSum;
