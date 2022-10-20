function trasureHunter(dailyLog) {
  splitDailyLog = dailyLog.split("");
  let totalPrize = 0;

  for (let i = 0; i <= splitDailyLog.length; i++) {
    if (splitDailyLog[i] === "$") {
      totalPrize += 100;
    } else if ((splitDailyLog[i] === "x" && totalPrize <= 10) || (splitDailyLog[i] === "#" && totalPrize == 0)) {
      totalPrize = 0;
    } else if (splitDailyLog[i] === "x") {
      totalPrize -= 10;
    } else if (splitDailyLog[i] === "#") {
      totalPrize /= 2;
    }
    console.log(splitDailyLog[i]);
  }
  return totalPrize;
}

console.log(trasureHunter("$x$#x$")); // expected: 185
console.log(trasureHunter("$$#x$$")); //expected:  290
console.log(trasureHunter("x$#x$#x$")); // expected: 157.5
console.log(trasureHunter("xx$#$#$#$###xx")); // expected: 3.125

module.exports = trasureHunter;
