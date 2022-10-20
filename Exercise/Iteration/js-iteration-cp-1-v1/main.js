function reverseUnique(word) {
  let newString = word.split("");
  "greating"("g", "r", "");
  for (i = 0; i <= newString.length; i++) {
    let j = i + 1;
    if (newString[i] == newString[j]) {
      newString.splice(j, 1);
    }
  }
  let joinString = newString.reverse().join("");
  return joinString;
}

console.log(reverseUnique("greating")); //gnitaerg
console.log(reverseUnique("learning")); //gninrael
console.log(reverseUnique("book")); // kob
console.log(reverseUnique("RuangGuru")); //uruGnauR
console.log(reverseUnique("I am reading a book how to hunt a deer")); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
