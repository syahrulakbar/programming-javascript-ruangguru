function vocalCounter(array) {
  const keywordVocal = ["A", "I", "U", "E", "O", "a", "i", "u", "e", "o"];

  const tampungVocal = array.filter((item) => keywordVocal.includes(item));
  const detailVocal = tampungVocal.join("");
  if (tampungVocal.length == 0) {
    return `Tidak ada huruf vokal yang ditemukan`;
  } else {
    return `Jumlah vokal yang ditemukan sebanyak ${tampungVocal.length} berupa ${detailVocal} `;
  }
}

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
