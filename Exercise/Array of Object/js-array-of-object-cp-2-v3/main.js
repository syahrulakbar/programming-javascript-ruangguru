function countryMedals(players, countries) {
  if (countries === undefined) {
    return `Countries not provided`;
  } else {
    const result = players.reduce((total, current) => {
      total[current.country] = total[current.country] || [];
      total[current.country].push(current.name);
      return total;
    }, {});
    console.log(result);
    const resultMedals = players.reduce((total, current) => {
      total[current.country] = total[current.country] || [];
      total[current.country].push(current.medals);
      return total;
    }, {});

    const resultValues = Object.values(result);
    const resultKeys = Object.keys(result);
    const medalsValues = Object.values(resultMedals);
    let arrResult = [];
    for (let i = 0; i < resultValues.length; i++) {
      let sumMedals = medalsValues[i].reduce((total, index) => {
        return total + index;
      });
      // console.log(sumMedals);

      arrResult.push({
        name: resultKeys[i],
        athlete: resultValues[i],
        totalMedals: sumMedals,
      });
    }
    let lastData = [];
    function filterGroup(data, key) {
      for (let i = 0; i < data.length; i++) {
        if (data[i]["name"] === key) {
          lastData.push(data[i]);
        }
      }
    }
    countries.forEach((element) => {
      filterGroup(arrResult, element);
    });
    // return lastData;
  }
}

let playerData = [
  {
    name: "Lionel Messi",
    medals: 5,
    country: "Argentina",
  },
  {
    name: "Iker Casillas",
    medals: 7,
    country: "Spain",
  },
  {
    name: "Ahmad Waluyo",
    medals: 5,
    country: "Indonesia",
  },
  {
    name: "Alvin Arkansas",
    medals: 8,
    country: "Indonesia",
  },
  {
    name: "Gabriel Batistuta",
    medals: 1,
    country: "Argentina",
  },
  {
    name: "Xavi Hernandes",
    medals: 9,
    country: "Spain",
  },
  {
    name: "Carles Puyol",
    medals: 5,
    country: "Spain",
  },
  {
    name: "Jatmika Teja",
    medals: 6,
    country: "Indonesia",
  },
  {
    name: "Sergio Aguero",
    medals: 3,
    country: "Argentina",
  },
];

console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals;
