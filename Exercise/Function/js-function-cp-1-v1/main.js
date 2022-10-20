function checkDatatype(tipeData) {
  if (Array.isArray(tipeData)) {
    return `array`;
  } else if (tipeData == undefined) {
    return `null`;
  } else {
    return `${typeof tipeData}`;
  }
}
console.log(checkDatatype("remot"));
console.log(checkDatatype());
console.log(checkDatatype(123));
console.log(checkDatatype(true));
console.log(checkDatatype([1, "a", true, null, undefined]));
console.log(checkDatatype(["1", "2", "3"]));

exports.checkDatatype = checkDatatype;
