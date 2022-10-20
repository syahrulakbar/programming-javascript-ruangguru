function counterApp(arr) {
  if (arr == undefined) {
    return `Invalid input`;
  } else if (arr.length == 0) {
    return `Data not found`;
  } else {
    let nb = 0,
      result = {};

    for (let i = 0; i < arr.length; i++) {
      nb = 0;
      arr.forEach(function (item) {
        if (item === arr[i]) {
          nb++;
        }
      });
      if (!result[arr[i]]) {
        result[arr[i]] = nb;
      }
    }
    const resultSortable = Object.fromEntries(Object.entries(result).sort(([, a], [, b]) => a - b));

    return resultSortable;
  }
}

console.log(counterApp(["Hikman", "Naufal", "Kanda", "Arya", "Kanda", "Hikman", "Naufal", "Hikman", "Kanda", "Kanda"]));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp;
