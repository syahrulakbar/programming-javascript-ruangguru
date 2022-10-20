function discountChecker(costumers, date) {
  let splitDate = date.split("-");

  let result = [];

  for (let i = 0; i < costumers.length; i++) {
    let totalPrice = costumers[i][0].split("$ ");
    let showDate = splitDate[0];

    if (costumers[i].includes("member")) {
      result.push(costumers[i]);
    } else {
      if (parseInt(showDate) % 2 === 0 && parseInt(totalPrice[1]) % 2 === 0) {
        result.push(costumers[i]);
      } else if (parseInt(showDate) % 2 !== 0 && parseInt(totalPrice[1]) % 2 !== 0) {
        result.push(costumers[i]);
      }
    }
  }

  return result;
}

let costumers1 = [
  ["$ 128", "member"],
  ["$ 29", "non-member"],
  ["$ 338", "non-member"],
  ["$ 9", "member"],
];

console.log(discountChecker(costumers1, "28-10-2022"));

let costumers2 = [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "non-member"],
  ["$ 332", "non-member"],
];

console.log(discountChecker(costumers2, "11-06-2022"));
let data1 = [
  ["$ 50", "member"],
  ["$ 11", "non member"],
  ["$ 77", "member"],
  ["$ 42", "non member"],
];
let data2 = [
  ["$ 90", "non member"],
  ["$ 63", "member"],
  ["$ 22", "member"],
  ["$ 81", "non member"],
];
// console.log(data1);
console.log(discountChecker(data1, "11-08-2022"));
// toEqual([
//   ["$ 50", "member"],
//   ["$ 11", "non member"],
//   ["$ 77", "member"]
// ]);
console.log(discountChecker(data2, "24-01-2022"));
// toEqual([
//   ["$ 90", "non member"],
//   ["$ 63", "member"],
//   ["$ 22", "member"],
// ]);
let data = [
  ["$ 5", "non-member"],
  ["$ 1", "non-member"],
  ["$ 7", "non-member"],
  ["$ 4", "non-member"],
];
console.log(discountChecker(data, "11-08-2022"));
// .toEqual([
//     ["$ 5", "non-member"],
//     ["$ 1", "non-member"],
//     ["$ 7", "non-member"]
// ]);

module.exports = discountChecker;
