function stockOpname(items) {
  let stockItems = {
    Ram: 10,
    Motherboard: 4,
    Processor: 5,
    SSD: 8,
    PSU: 12,
    Cooling: 5,
  };
  if (items.length == 0) {
    return "Data not found";
  } else {
    let output = {};
    items.forEach((v) => {
      let key = v[0];
      let value = v[1];
      output[key] = value;
    });
    console.log(output);

    const result = Object.keys(stockItems).reduce((obj, stockKey) => {
      obj[stockKey] = stockItems[stockKey] - (output[stockKey] ?? 0);
      return obj;
    }, {});

    // return result;
  }
}

let items1 = [
  ["PSU", 6],
  ["SSD", 3],
  ["Motherboard", 3],
  ["Ram", 2],
  ["Cooling", 4],
  ["Processor", 5],
];

let items2 = [
  ["SSD", 5],
  ["Motherboard", 4],
  ["Processor", 1],
  ["PSU", 3],
  ["Cooling", 5],
  ["Ram", 5],
];

console.log(stockOpname(items1));
console.log(stockOpname(items2));
console.log(stockOpname([]));

module.exports = stockOpname;
