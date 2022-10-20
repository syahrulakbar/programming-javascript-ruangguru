function travelSeat(passengers, seatColumn) {
  if (passengers.length == 0) {
    return `Oops! tickets not sold!`;
  } else if ((seatColumn <= 0) | (typeof seatColumn === "string")) {
    return `Invalid number`;
  } else {
    let result = [];
    const sortArr = passengers.sort();
    for (let i = 0; i < sortArr.length; i += seatColumn) {
      let chunkIndex = sortArr.slice(i, i + seatColumn);
      result.push(chunkIndex);
      while (chunkIndex.length % seatColumn != 0) {
        const seatAvailable = "Seat available";
        chunkIndex.push(seatAvailable);
      }
    }

    return result;
  }
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 5));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
console.log(travelSeat(["Zona", "Retha", "Yoga"], 0));
console.log(travelSeat([], 4));

module.exports = travelSeat;
