function buyThemAll(books, budget) {
  // splitBooks = books.split(/,|:/);
  splitBooks = books.split(",");
  let result = [];
  let totalBook = 0;
  let headingBook = [];
  let hargaBuku = [];
  let totalPrice = 0;

  if (budget === 0) {
    return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
  } else {
    for (let i = 0; i < splitBooks.length; i++) {
      splitNamePriceBook = splitBooks[i].split(":");
      result.push(splitNamePriceBook);
    }

    for (let j = 0; j < result.length; j++) {
      if (budget - totalPrice < parseInt(result[j][1])) continue;
      else {
        if (budget - totalPrice < parseInt(result[j][1])) break;
        else if (budget - totalPrice > parseInt(result[j][1])) {
          totalBook++;
          headingBook.push(result[j][0]);
          totalPrice = totalPrice + parseInt(result[j][1]);
          shoopingReturn = budget - totalPrice;
        }
      }
    }
    if (totalBook === 0) {
      return `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${budget}.`;
    }
    return `Afista membeli ${totalBook} buku yaitu ${headingBook.join(", ")}. Total belanja ${totalPrice}, sisa uang Afista adalah ${shoopingReturn}.`;
  }
}

console.log(buyThemAll("The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000", 200000)); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.
console.log(buyThemAll("Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,", 20000)); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.
console.log(buyThemAll("The Alchemist:55000,The Hobit:25000,The Power of Habit:10000,Harry Potter:5000", 20000)); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.
console.log(buyThemAll("Javascript itu asik:143200,Lebih Mengenal CSS3:123000,Belajar HTML5:78000,", 300000)); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
