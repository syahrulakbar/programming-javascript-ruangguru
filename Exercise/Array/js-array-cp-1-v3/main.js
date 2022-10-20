function splitToArr(str) {
  if (str === "") {
    return `Data not available`;
  } else if (str == undefined) {
    return `Invalid input`;
  } else {
    splitStr = str.split(/;|-/);
  }

  return splitStr.map((a) => a.charAt(0).toUpperCase() + a.substr(1));
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(splitToArr("ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"));
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;
