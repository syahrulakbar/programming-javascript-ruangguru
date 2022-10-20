function convertItems(items) {
  let arrItems = [];
  for (let i = 0; i < items.length; i++) {
    let splitItems1 = items[i].split("|");
    arrItems.push(splitItems1);
  }
  return arrItems;
}

function filterItems(items) {
  let temp = [];

  for (let j = 0; j < items.length; j++) {
    if (items[j].length < 3) {
      items[j].splice(0, 1);
    }
  }
  for (let z = 0; z < items.length; z++) {
    if (items[z] != "") {
      temp.push(items[z]);
    }
  }
  for (let x = 0; x < temp.length; x++) {
    temp[x][1] = parseInt(temp[x][1]);
  }
  return temp;
}

function generateSpareParts(items) {
  let objSpareParts = [];

  for (let i = 0; i < items.length; i++) {
    objSpareParts.push({
      name: items[i][0],
      price: items[i][1],
      category: items[i][2],
    });
  }

  console.log(objSpareParts);
  return objSpareParts;
}

function itemsStatistics(items) {
  let arrVariation = [],
    arrBodyParts = [],
    arrElectric = [];

  for (let i = 0; i < items.length; i++) {
    if (items[i][2] === "variation") {
      arrVariation.push(items[i]);
    } else if (items[i][2] === "bodyParts") {
      arrBodyParts.push(items[i]);
    } else if (items[i][2] === "electricity") {
      arrElectric.push(items[i]);
    }
  }
  const stringBody = "bodyParts";
  resultArr = {
    variation: arrVariation.length,
    [stringBody]: arrBodyParts.length,
    electricity: arrElectric.length,
  };

  return resultArr;
}

function generateItemsData(items) {
  const result1 = convertItems(items);
  const result2 = filterItems(result1);
  const result3 = generateSpareParts(result2);
  const result4 = itemsStatistics(result2);
  // console.log(result4);\
  let resultObj = {
    spare_parts: result3,
    statistics: result4,
  };

  return resultObj;
}

const items = [
  "Spakbor Gordon|150000|variation",
  "Head Lamp",
  "USD KX150|8500000|bodyParts",
  "Handle Expedition|275000|variation",
  "Karet Body",
  "Body set KTM|1899950|bodyParts",
  "Jok Gordon|250000|variation",
  "Behel Bodyset Gordon",
  "CDI BRT KLX|625000|electricity",
  "Cover jok KLX|185000|variation",
];

console.log(generateItemsData(items));
const items2 = [["KAYABA OS", "177380", "bodyParts"], ["KAYABA OC", "205800", "bodyParts"], ["Boba black"], ["Cover full tank", "159000", "variation"], ["Aki GS ASTRA MF", "196000", "electricity"], ["Fabio black"], ["Porte sling"]];
console.log(filterItems(items2));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
