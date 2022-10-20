function deretanAngkaHinggaN(n) {
  let line = "";
  if (n <= 1) {
    return "Incorrect param";
  } else {
    for (let i = n - 1; i >= 1; i--) {
      line += i + "";
      for (let j = i - 1; j >= 1; j--) {
        line += j + "";
      }
    }
    return line;
  }
}

console.log(deretanAngkaHinggaN(5)); //4321321211
console.log(deretanAngkaHinggaN(1)); //4321321211
console.log(deretanAngkaHinggaN(6)); //4321321211

module.exports = deretanAngkaHinggaN;
